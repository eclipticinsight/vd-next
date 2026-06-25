import { NextResponse } from "next/server";

const SITE_URL = "https://www.visionarydynamicsas.com";
const SITE_NAME = "Visionary Dynamics";

const llmsTxt = `\
# ${SITE_NAME}

> ${SITE_NAME} is a US-based business consulting firm headquartered in St. Petersburg, Florida.
> We deliver integrated Accounting, Taxation, IT Asset Management, and Digital Marketing services
> to small and mid-sized businesses across the United States.

## About

- [About Us](${SITE_URL}/about): Company overview, mission, values, and leadership team.
- [Industries Served](${SITE_URL}/industries): Sectors we specialise in, including healthcare, real estate, retail, and professional services.
- [Our Clients](${SITE_URL}/clients): Case studies and client success stories.
- [Locations](${SITE_URL}/location): Office address and service areas (St. Petersburg, FL and nationwide remote).
- [Contact Us](${SITE_URL}/contact): Phone, email, and enquiry form.
- [RPO Services](${SITE_URL}/rpo): Recruitment Process Outsourcing offerings.

## Accounting Services

- [Bookkeeping](${SITE_URL}/accounting/bookkeeping): Full-cycle bookkeeping, general ledger maintenance, and monthly close.
- [Payroll](${SITE_URL}/accounting/payroll): Payroll processing, tax filings (941, 940, W-2, 1099), and compliance.
- [Financial Reporting & Analysis](${SITE_URL}/accounting/financial-reporting-analysis): P&L statements, balance sheets, cash-flow reports, and KPI dashboards.
- [Accounting Software Setup & Migration](${SITE_URL}/accounting/software-setup-migration): QuickBooks, Xero, and FreshBooks onboarding and data migration.

## Taxation

- [Individual Tax](${SITE_URL}/taxation/individual): Personal income tax preparation and planning (Form 1040 and related schedules).
- [Corporate & Cooperative Tax](${SITE_URL}/taxation/cooperative-tax): Business entity tax returns (1120, 1120-S, 1065) and tax strategy.

## IT & Technology Services

- [AI Solutions](${SITE_URL}/ai): AI-powered automation, chatbots, and business intelligence integrations.
- [Automation](${SITE_URL}/automation): Workflow and process automation to reduce manual effort.
- [Cloud Services](${SITE_URL}/cloud): Cloud migration, infrastructure management, and cost optimisation.
- [Microsoft 365 Management](${SITE_URL}/ms365-management): M365 licensing, deployment, security hardening, and user support.
- [Mobile Device Management](${SITE_URL}/mobile-device-management): MDM policy configuration and device lifecycle management.
- [Managed Network Services](${SITE_URL}/managed-network-services): Proactive network monitoring, maintenance, and helpdesk support.
- [Business Analytics](${SITE_URL}/business-analytics): Power BI and data analytics dashboards for actionable business insights.

## Digital Marketing Services

- [Web Design & Development](${SITE_URL}/webdesign-development): Responsive website design, development, and CMS integration.
- [SEO](${SITE_URL}/seo): On-page, off-page, and technical SEO audits and execution.
- [Social Media Marketing](${SITE_URL}/social-media-marketing): Content strategy, scheduling, and performance analytics across platforms.
- [Email Marketing](${SITE_URL}/email-marketing): Campaign design, list management, and A/B testing.
- [LinkedIn Marketing](${SITE_URL}/linkedin-marketing): LinkedIn lead generation, thought leadership, and paid campaigns.

## Pricing

- [Accounting Pricing](${SITE_URL}/pricing/accounting): Transparent monthly retainer plans for accounting and bookkeeping.
- [Marketing Pricing](${SITE_URL}/pricing/marketing): Digital marketing packages by channel and scope.
- [Development Pricing](${SITE_URL}/pricing/development): Web development project estimates and hourly rates.

## Resources

- [Blog](${SITE_URL}/blog): Expert articles on accounting, tax, IT, and digital marketing.

## Legal

- [Privacy Policy](${SITE_URL}/privacy): How we collect, store, and use personal data.
- [Terms of Service](${SITE_URL}/terms): Contractual terms for service engagements.
- [Cookie Policy](${SITE_URL}/cookies): Cookie usage and consent management.
- [Data Security](${SITE_URL}/datasecurity): Security controls and data protection standards.
- [Intellectual Property](${SITE_URL}/intellectual): Ownership rights for content and deliverables.
- [Complaint Policy](${SITE_URL}/complaint): Process for raising and resolving client complaints.
- [Disclaimer](${SITE_URL}/disclaimer): Limitations of liability and accuracy of information.

## Contact

- **Address:** 7901 4th St N STE 300, St. Petersburg, FL 33702, USA
- **Phone:** +1-727-564-9476
- **Email:** connect@visionarydynamicsas.com
- **LinkedIn:** https://in.linkedin.com/company/visionarydynamicsas
- **Twitter / X:** https://x.com/VisionaryD64371
- **Facebook:** https://www.facebook.com/visionarydynamicsas/
- **Instagram:** https://www.instagram.com/visionary.dynamics/
`;

export async function GET() {
  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Cache for 24 hours, allow CDN to cache for 7 days
      "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
    },
  });
}
