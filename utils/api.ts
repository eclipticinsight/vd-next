const BASE_URL =
  "http://localhost:5000/api";

export const API = {

  // ======================
  // GET
  // ======================
  get: async (url: string) => {

    const response =
      await fetch(
        `${BASE_URL}${url}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

    const json =
      await response.json();

    if (!response.ok) {
      throw json;
    }

    return {
      data: json,
    };
  },

  // ======================
  // POST
  // ======================
  post: async (
    url: string,
    data: any
  ) => {

    const response =
      await fetch(
        `${BASE_URL}${url}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          credentials:
            "include",

          body:
            JSON.stringify(data),
        }
      );

    const json =
      await response.json();

    if (!response.ok) {
      throw json;
    }

    return {
      data: json,
    };
  },

  // ======================
  // PUT
  // ======================
  put: async (
    url: string,
    data: any
  ) => {

    const response =
      await fetch(
        `${BASE_URL}${url}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          credentials:
            "include",

          body:
            JSON.stringify(data),
        }
      );

    const json =
      await response.json();

    if (!response.ok) {
      throw json;
    }

    return {
      data: json,
    };
  },

  // ======================
  // DELETE
  // ======================
  delete: async (
    url: string
  ) => {

    const response =
      await fetch(
        `${BASE_URL}${url}`,
        {
          method: "DELETE",

          credentials:
            "include",
        }
      );

    const json =
      await response.json();

    if (!response.ok) {
      throw json;
    }

    return {
      data: json,
    };
  },
};