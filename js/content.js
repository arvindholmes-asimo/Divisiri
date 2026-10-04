/*
 * Divisiri — central content configuration
 * Editable data used to render navigation, footer links, FAQ, journal
 * previews, and the product catalogue. Keeping this data here means
 * copy can be updated in one place instead of across every page.
 */

/* Primary navigation, shared by every page */
const DIVISIRI_NAV_LINKS = [
  { label: "About Us", href: "about.html" },
  { label: "Solutions", href: "solutions.html" },
  { label: "Products", href: "products.html" },
  { label: "Institutional Sales", href: "institutional.html" },
  { label: "Private Label", href: "private-label.html" },
  { label: "Journal", href: "journal.html" },
  { label: "Contact", href: "contact.html" },
];

/* Four ways Divisiri works, shown as an interactive tab strip on the homepage */
const DIVISIRI_PILLARS = [
  {
    label: "Own Brands",
    heading: "Own Brands",
    body: "Health and wellness products sold directly under the Divisiri name, across medical nutrition and Ayur / Nutri cosmetics.",
    cta: "Explore our products",
    href: "products.html",
  },
  {
    label: "Private Label",
    heading: "Private Label",
    body: "Your brand, our products. We develop and supply wellness and nutrition products under your own label, with packaging and label coordination.",
    cta: "Discuss private label",
    href: "private-label.html",
  },
  {
    label: "Institutional Sales",
    heading: "Institutional & Hospital Sales",
    body: "Supply of medical nutrition and healthcare products to hospitals and institutions, with dependable volumes and documentation.",
    cta: "Institutional enquiries",
    href: "institutional.html",
  },
  {
    label: "Direct Supply",
    heading: "Direct Supply of Healthcare Products",
    body: "Direct supply of healthcare products so patients can access them at affordable prices.",
    cta: "Get in touch",
    href: "contact.html",
  },
];

/* Footer link columns, shared by every page */
const DIVISIRI_FOOTER_GROUPS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "about.html" },
      { label: "Careers", href: "careers.html" },
      { label: "Journal", href: "journal.html" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Solutions", href: "solutions.html" },
      { label: "Products", href: "products.html" },
      { label: "Institutional Sales", href: "institutional.html" },
      { label: "Private Label", href: "private-label.html" },
      { label: "Quality & Safety", href: "quality-safety.html" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "faq.html" },
      { label: "Contact", href: "contact.html" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "privacy.html" },
      { label: "Terms & Conditions", href: "terms.html" },
      { label: "Shipping Policy", href: "shipping.html" },
      { label: "Returns & Refunds", href: "returns.html" },
      { label: "Wellness Disclaimer", href: "disclaimer.html" },
      { label: "Accessibility Statement", href: "accessibility.html" },
    ],
  },
];

/* FAQ data, rendered on faq.html and mirrored in FAQPage JSON-LD */
const DIVISIRI_FAQS = [
  {
    question: "What is Divisiri?",
    answer:
      "Divisiri is a wellness brand offering a comprehensive, holistic approach to human well-being through the science of wellness. We sell our own-brand health products, develop private-label products, and supply healthcare products to institutions and hospitals.",
  },
  {
    question: "What products does Divisiri offer?",
    answer:
      "Our products fall into two categories: Medical Nutrition (including disease-oriented nutrition such as cancer and diabetes support, and lifestyle nutrition for joint health, weight management, stress and anxiety, and sleep) and Ayur / Nutri Cosmetics (natural cosmetics for hair, skin and nails, and edible cosmetics).",
  },
  {
    question: "Are Divisiri products made with natural ingredients?",
    answer:
      "Our Ayur / Nutri Cosmetics are formulated with 100% natural ingredients. Ingredient lists and product details are shown on each product page.",
  },
  {
    question: "Are Divisiri products certified?",
    answer:
      "Our cosmetic products are certified cosmetics. Certificates and supporting documentation are available on request.",
  },
  {
    question: "Can I buy Divisiri products directly?",
    answer:
      "Yes. We sell our own-brand products directly and supply healthcare products at affordable prices. Contact us to place an order or ask about availability in your area.",
  },
  {
    question: "Do you supply hospitals and institutions?",
    answer:
      "Yes. Our institutional sales team supplies medical nutrition and healthcare products to hospitals and institutions. Visit the Institutional Sales page or contact us to discuss requirements.",
  },
  {
    question: "Do you offer private-label products?",
    answer:
      "Yes. We develop and supply products under your own brand, including product selection, packaging and label coordination. Visit the Private Label page to start an enquiry.",
  },
  {
    question: "Are medical nutrition products a substitute for medical treatment?",
    answer:
      "No. Medical nutrition products are intended to be used under the guidance of a qualified healthcare professional. They are not a substitute for diagnosis, treatment, or medical advice. Please read our Wellness Disclaimer.",
  },
  {
    question: "What is an FSMP or FSDU product?",
    answer:
      "FSMP (Food for Special Medical Purposes) and FSDU (Food for Special Dietary Uses) are regulated categories of nutrition products. Where a product falls into one of these categories, its use is subject to applicable regulations and professional guidance.",
  },
  {
    question: "Where are Divisiri products available?",
    answer:
      "Availability varies by product and region. Contact us to confirm whether a product is available to you.",
  },
  {
    question: "How can I request a product catalogue or price list?",
    answer:
      "Use the Contact page and select Product enquiry, or Institutional enquiry if you are a hospital or institution.",
  },
  {
    question: "How can I report a product concern?",
    answer:
      "Please use the Contact page and select Customer support. If your question relates to a medication, medical condition, or personal health decision, please consult a qualified healthcare professional rather than relying on website content.",
  },
];

/* Journal article previews, rendered on journal.html */
const DIVISIRI_JOURNAL_ARTICLES = [
  {
    title: "What Makes a Wellness Product Meaningful?",
    category: "Consumer Wellness",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "4 min read",
    excerpt:
      "Meaningful wellness products start with a real, well-understood consumer need rather than a passing trend. This piece explores how Divisiri thinks about that starting point.",
    status: "Draft — pending review",
  },
  {
    title: "From Ingredient Idea to Finished Product.",
    category: "Product Development",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "5 min read",
    excerpt:
      "An ingredient idea has to travel a long way before it becomes a finished product. Here is a general look at the stages that journey tends to involve.",
    status: "Draft — pending review",
  },
  {
    title: "Understanding Nutraceutical Product Development.",
    category: "Nutraceuticals",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "6 min read",
    excerpt:
      "Nutraceutical development sits at the intersection of nutrition science and product design. This article introduces the basic vocabulary and considerations.",
    status: "Draft — pending review",
  },
  {
    title: "How Consumer Needs Shape Wellness Innovation.",
    category: "Nutrition",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "4 min read",
    excerpt:
      "Innovation works best when it responds to a clearly understood need. We look at how consumer insight informs the early stages of concept development.",
    status: "Draft — pending review",
  },
  {
    title: "Traditional Knowledge in Modern Wellness Formulation.",
    category: "Ayurveda & Traditional Knowledge",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "5 min read",
    excerpt:
      "Traditional botanical knowledge can inform modern wellness formats when approached with care, education, and respect for its origins.",
    status: "Draft — pending review",
  },
  {
    title: "What to Look for on a Wellness Product Label.",
    category: "Ingredient Education",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "3 min read",
    excerpt:
      "Product labels carry a lot of information. This introductory piece walks through the general categories of information consumers often look for.",
    status: "Draft — pending review",
  },
  {
    title: "The Role of Quality Review in Product Development.",
    category: "Quality & Safety",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "5 min read",
    excerpt:
      "Quality review is woven throughout product development rather than added at the end. We outline where it typically fits into the process.",
    status: "Draft — pending review",
  },
  {
    title: "Designing Better Everyday Nutrition Solutions.",
    category: "Functional Foods",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "4 min read",
    excerpt:
      "Everyday nutrition solutions need to fit real routines. This article considers how format, convenience, and nutrition intersect in practice.",
    status: "Draft — pending review",
  },
];

const DIVISIRI_JOURNAL_CATEGORIES = [
  "Nutrition",
  "Nutraceuticals",
  "Functional Foods",
  "Ayurveda & Traditional Knowledge",
  "Personal Care",
  "Product Development",
  "Ingredient Education",
  "Quality & Safety",
  "Consumer Wellness",
  "Industry Insights",
];

/* Shared placeholder detail fields applied to every product card */
const DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER =
  "To be confirmed — placeholder pending verified product data.";

/* Product catalogue, rendered on products.html */
const DIVISIRI_PRODUCTS = [
  {
    id: "disease-oriented-nutrition",
    name: "Disease-Oriented Nutrition",
    category: "Medical Nutrition",
    overview:
      "Nutrition products for people managing specific conditions such as cancer and diabetes. Intended for use under the guidance of a qualified healthcare professional.",
    intendedUse: "Disease-oriented nutritional support, under medical supervision.",
    keyFeatures: [
      "FSMP / FSDU formats where applicable",
      "Supplied to patients and to institutions",
    ],
  },
  {
    id: "joint-health",
    name: "Joint Health",
    category: "Medical Nutrition",
    overview: "Lifestyle nutrition to support joint health as part of an everyday routine.",
    intendedUse: "General lifestyle nutritional support.",
    keyFeatures: [DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
  {
    id: "weight-management",
    name: "Weight Management",
    category: "Medical Nutrition",
    overview: "Lifestyle nutrition designed to support healthy weight management alongside diet and activity.",
    intendedUse: "General lifestyle nutritional support.",
    keyFeatures: [DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
  {
    id: "stress-anxiety",
    name: "Stress & Anxiety",
    category: "Medical Nutrition",
    overview: "Lifestyle nutrition to support everyday stress and anxiety management.",
    intendedUse: "General lifestyle nutritional support.",
    keyFeatures: [DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
  {
    id: "sleep-support",
    name: "Sleep",
    category: "Medical Nutrition",
    overview: "Lifestyle nutrition to support restful sleep as part of a healthy routine.",
    intendedUse: "General lifestyle nutritional support.",
    keyFeatures: [DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
  {
    id: "hair-care",
    name: "Hair Care",
    category: "Ayur / Nutri Cosmetics",
    overview: "Certified cosmetic formulations for hair, made with 100% natural ingredients.",
    intendedUse: "Daily hair care.",
    keyFeatures: ["100% natural ingredients", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
  {
    id: "skin-care",
    name: "Skin Care",
    category: "Ayur / Nutri Cosmetics",
    overview: "Certified cosmetic formulations for skin, made with 100% natural ingredients.",
    intendedUse: "Daily skin care.",
    keyFeatures: ["100% natural ingredients", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
  {
    id: "nail-care",
    name: "Nail Care",
    category: "Ayur / Nutri Cosmetics",
    overview: "Certified cosmetic formulations for nails, made with 100% natural ingredients.",
    intendedUse: "Daily nail care.",
    keyFeatures: ["100% natural ingredients", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
  {
    id: "edible-cosmetics",
    name: "Edible Cosmetics",
    category: "Ayur / Nutri Cosmetics",
    overview: "Edible cosmetic products that bring beauty care from the inside out, made with natural ingredients.",
    intendedUse: "Consumed as directed on the product label.",
    keyFeatures: ["Edible format", "100% natural ingredients", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER],
  },
];

const DIVISIRI_PRODUCT_CATEGORIES = [
  "Medical Nutrition",
  "Ayur / Nutri Cosmetics",
];
