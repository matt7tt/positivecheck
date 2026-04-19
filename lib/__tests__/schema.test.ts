// lib/__tests__/schema.test.ts
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  ORG_NAME_LEGAL,
  ORG_PHONE,
  ORG_EMAIL,
  SITE_URL,
} from "@/lib/schema";

describe("buildOrganizationSchema", () => {
  it("returns an Organization schema with legalName and required fields", () => {
    const schema = buildOrganizationSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Organization");
    expect(schema.legalName).toBe(ORG_NAME_LEGAL);
    expect(schema.url).toBe(SITE_URL);
    expect(schema.logo).toContain("positive-logo-dark-blue.png");
    expect(schema.contactPoint["@type"]).toBe("ContactPoint");
  });

  it("includes sameAs with at least LinkedIn and Facebook", () => {
    const schema = buildOrganizationSchema();
    expect(Array.isArray(schema.sameAs)).toBe(true);
    expect(schema.sameAs.some((u: string) => u.includes("linkedin"))).toBe(true);
    expect(schema.sameAs.some((u: string) => u.includes("facebook"))).toBe(true);
  });
});

describe("buildWebSiteSchema", () => {
  it("returns a WebSite schema referencing the organization as publisher", () => {
    const schema = buildWebSiteSchema();
    expect(schema["@type"]).toBe("WebSite");
    expect(schema.url).toBe(SITE_URL);
    expect(schema.publisher["@type"]).toBe("Organization");
    expect(schema.publisher.legalName).toBe(ORG_NAME_LEGAL);
  });
});

describe("Organization contact constants", () => {
  it("buildOrganizationSchema uses ORG_PHONE and ORG_EMAIL", () => {
    const schema = buildOrganizationSchema();
    expect(schema.contactPoint.telephone).toBe(ORG_PHONE);
    expect(schema.contactPoint.email).toBe(ORG_EMAIL);
  });
});

describe("Shared publisher org node", () => {
  it("buildWebSiteSchema publisher has the expected shape with legalName and logo ImageObject", () => {
    const schema = buildWebSiteSchema();
    expect(schema.publisher["@type"]).toBe("Organization");
    expect(schema.publisher.name).toBe("Positive Check");
    expect(schema.publisher.legalName).toBe("Positive Check LLC");
    expect(schema.publisher.url).toBe("https://positivecheck.com");
    expect(schema.publisher.logo["@type"]).toBe("ImageObject");
    expect(schema.publisher.logo.url).toContain("positive-logo-dark-blue.png");
  });
});

describe("buildBreadcrumbSchema", () => {
  it("maps items to ListItem elements with 1-based position", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", url: "https://positivecheck.com" },
      { name: "Solutions", url: "https://positivecheck.com/solutions" },
    ]);
    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0]).toEqual({
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://positivecheck.com",
    });
    expect(schema.itemListElement[1].position).toBe(2);
  });
});

describe("buildFAQSchema", () => {
  it("maps question/answer pairs to FAQPage schema", () => {
    const schema = buildFAQSchema([
      { question: "Q1?", answer: "A1." },
      { question: "Q2?", answer: "A2." },
    ]);
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(2);
    expect(schema.mainEntity[0]).toEqual({
      "@type": "Question",
      name: "Q1?",
      acceptedAnswer: { "@type": "Answer", text: "A1." },
    });
  });
});
