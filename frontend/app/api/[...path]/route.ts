import { NextRequest, NextResponse } from "next/server";

// Internal backend URL (server-to-server, not exposed to browser)
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxyRequest(req, path, "GET");
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxyRequest(req, path, "POST");
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxyRequest(req, path, "PUT");
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxyRequest(req, path, "DELETE");
}

async function proxyRequest(
  req: NextRequest,
  pathSegments: string[],
  method: string
) {
  try {
    const pathStr = pathSegments.join("/");
    const search = req.nextUrl.search;
    const targetUrl = `${BACKEND_URL}/api/${pathStr}${search}`;

    // Forward headers but strip Next.js-specific ones
    const headers: Record<string, string> = {};
    req.headers.forEach((value, key) => {
      if (
        !["host", "connection", "transfer-encoding"].includes(
          key.toLowerCase()
        )
      ) {
        headers[key] = value;
      }
    });

    // Build fetch options
    const fetchOptions: RequestInit = {
      method,
      headers,
    };

    // Forward body for non-GET requests
    if (method !== "GET" && method !== "HEAD") {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("multipart/form-data")) {
        // Let FormData pass through as-is (for file uploads)
        const formData = await req.formData();
        fetchOptions.body = formData;
        // Remove content-type so browser sets it with boundary
        delete headers["content-type"];
      } else {
        fetchOptions.body = await req.text();
      }
    }

    const backendResponse = await fetch(targetUrl, fetchOptions);

    const responseText = await backendResponse.text();

    // Try to parse as JSON
    let responseBody: string | object;
    try {
      responseBody = JSON.parse(responseText);
    } catch {
      responseBody = responseText;
    }

    const responseHeaders: Record<string, string> = {};
    backendResponse.headers.forEach((value, key) => {
      if (
        !["transfer-encoding", "connection", "content-encoding"].includes(
          key.toLowerCase()
        )
      ) {
        responseHeaders[key] = value;
      }
    });

    if (typeof responseBody === "string") {
      return new NextResponse(responseBody, {
        status: backendResponse.status,
        headers: responseHeaders,
      });
    }

    return NextResponse.json(responseBody, {
      status: backendResponse.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("API Proxy Error:", error);
    return NextResponse.json(
      { message: "Backend unavailable", error: String(error) },
      { status: 502 }
    );
  }
}
