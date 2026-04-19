// lib/__tests__/schema.test.ts
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildArticleSchema,
  buildDefinedTermSchema,
  buildCPTCodeSchema,
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

describe("buildServiceSchema", () => {
  it("returns a Service schema without offers (pricing is never claimed)", () => {
    const schema = buildServiceSchema({
      name: "RPM with AI Calls",
      serviceType: "Remote Patient Monitoring",
      description: "Daily AI wellness calls",
      category: "Remote Patient Monitoring",
      audienceType: "Healthcare Providers",
    });
    expect(schema["@type"]).toBe("Service");
    expect(schema.name).toBe("RPM with AI Calls");
    expect(schema.provider["@type"]).toBe("Organization");
    expect(schema.provider.legalName).toBe("Positive Check LLC");
    expect(schema.audience.audienceType).toBe("Healthcare Providers");
    expect((schema as any).offers).toBeUndefined();
  });
});

describe("buildArticleSchema", () => {
  it("returns an Article with Organization author and publisher", () => {
    const schema = buildArticleSchema({
      headline: "Test Article",
      description: "Test description",
      url: "https://positivecheck.com/blog/test",
      image: "https://positivecheck.com/images/test.png",
      datePublished: "2026-04-19",
      dateModified: "2026-04-19",
    });
    expect(schema["@type"]).toBe("Article");
    expect(schema.author["@type"]).toBe("Organization");
    expect(schema.author.name).toBe("Positive Check");
    expect(schema.publisher["@type"]).toBe("Organization");
    expect(schema.mainEntityOfPage["@id"]).toBe("https://positivecheck.com/blog/test");
  });
});

describe("buildDefinedTermSchema", () => {
  it("returns a DefinedTerm pointing at the canonical glossary URL", () => {
    const schema = buildDefinedTermSchema({
      term: "HIPAA Compliance",
      definition: "A definition.",
      slug: "hipaa-compliance",
    });
    expect(schema["@type"]).toBe("DefinedTerm");
    expect(schema.name).toBe("HIPAA Compliance");
    expect(schema.url).toBe("https://positivecheck.com/resources/glossary/hipaa-compliance");
    expect(schema.description).toBe("A definition.");
  });
});

describe("buildCPTCodeSchema", () => {
  it("returns an array with DefinedTerm + MedicalEntity for a CPT code", () => {
    const schemas = buildCPTCodeSchema({
      code: "99457",
      name: "Remote physiologic monitoring treatment, initial 20 min",
      description: "CMS-reimbursed RPM interactive communication code.",
      category: "Remote Patient Monitoring",
    });
    expect(Array.isArray(schemas)).toBe(true);
    expect(schemas).toHaveLength(2);
    expect(schemas[0]["@type"]).toBe("DefinedTerm");
    expect(schemas[0].name).toBe("CPT 99457");
    expect(schemas[0].url).toBe("https://positivecheck.com/resources/glossary/cpt-99457");
    expect(schemas[1]["@type"]).toBe("MedicalEntity");
    expect(schemas[1].code.codeValue).toBe("99457");
    expect(schemas[1].code.codingSystem).toBe("CPT");
  });
});
