import { createClient } from "@/prismicio";

const COMMON_METADATA = {
  robots: "index, follow",
  alternates: {
    canonical: "https://aurangg.com",
  },
  author: "Aurangg",
};

const projectKeywords = {
  "doh-dubai":
    "healthcare CRM UI/UX, medical software dashboard, patient management system UX, healthcare SaaS design, hospital workflow optimization, Dubai health tech, healthcare analytics dashboard, digital transformation in hospitals, government health software UI, clinical data management design, improving hospital efficiency, healthcare UX specialist Dubai, UX design for healthcare startups, patient engagement platform UI, SaaS dashboard for hospitals, medical data visualization UI, hospital admin dashboard UX, telemedicine interface design, user-friendly health tech design, doctor-patient communication UI, senior UI/UX designer healthcare, digital health solutions UX, best healthcare CRM design Dubai, enterprise healthcare software UI, Dubai medical SaaS UX",
  merch:
    "asset management UI/UX, inventory tracking mobile app, digital asset tracking Dubai, enterprise asset management UX, SaaS asset management platform, finance dashboard UI, optimizing asset utilization UX, Dubai fintech UI designer, mobile app for asset tracking, improving business asset workflows, UI/UX expert Dubai, reducing manual tracking errors, asset reporting dashboard design, corporate asset tracking software UI, investment portfolio management UX, digital transformation in asset tracking, fintech app design UAE, user-friendly financial software UX, senior UI/UX designer Dubai",
  myne: "asset management UI/UX, inventory tracking mobile app, digital asset tracking Pakistan, enterprise asset management UX, SaaS asset management platform, finance dashboard UI, optimizing asset utilization UX, Lahore fintech UI designer, mobile app for asset tracking, improving business asset workflows, UI/UX expert Lahore, reducing manual tracking errors, asset reporting dashboard design, corporate asset tracking software UI, investment portfolio management UX, digital transformation in asset tracking, fintech app design Pakistan, user-friendly financial software UX, senior UI/UX designer Lahore",
  wizbizla:
    "business management SaaS UAE, enterprise workflow automation, CRM UI/UX Dubai, business operations platform UX, startup growth SaaS UI, client management system UAE, task automation UI design, B2B business software UX, workflow optimization UI/UX, CRM and invoicing UX Dubai, business intelligence dashboard UAE, digital transformation for businesses, project management SaaS UI, financial tracking software UX, ERP UI/UX design, business operations SaaS UAE, cloud-based CRM platform UX, user-friendly business tools UI, digital product designer UAE, best UI/UX for business SaaS, enterprise software UX design",
  "ink-software-house":
    "software company website UX, IT services website redesign, Poland software house UI/UX, increasing client leads for IT firms, enterprise software website UI, showcasing IT solutions online, digital agency website design, SaaS company landing page UX, optimizing IT service inquiries, developer-friendly UI design, best UI/UX designer Poland, website design for software startups, interactive portfolio design, senior UX designer for software firms, web solutions for IT companies, B2B technology website UI, tech startup web design UX, case study-focused website UX, converting visitors to IT clients, lead generation-focused IT website",
  "fork-to-fit-kitchen":
    "food delivery UI/UX, mobile app for food ordering, restaurant ordering platform UX, USA food tech design, increasing user retention for food apps, intuitive food ordering interface, improving restaurant discovery UX, location-based food delivery UI, user-friendly food app USA, optimizing checkout for food services, delivery tracking UX, customer engagement for food delivery, restaurant marketplace UI, meal subscription platform design, e-commerce for food businesses, UI/UX expert for food startups, best UI/UX designer USA, Figma food delivery app design, senior UX consultant food industry, restaurant management dashboard UI",
  xemaildomain:
    "email hosting UI/UX US, secure business email platform, professional email service UX, enterprise email solutions UI, custom domain email hosting UX, business email security dashboard, B2B email SaaS UX, cloud-based email management, improving email deliverability UI, corporate email solution UI/UX, spam protection SaaS design, email privacy and encryption UX, startup email provider UX US, best UI/UX for email platforms, user-friendly email hosting, senior UI/UX designer US, webmail client UI/UX, optimized email user experience, SaaS email provider UX, modern email dashboard UI, UX for secure email systems",
  kruzee:
    "driving school website design, online driving course UX, education website redesign, e-learning platform UI, Canada driving school website, user-friendly course enrollment, boosting sign-ups for online courses, interactive learning UI/UX, mobile-friendly driving course website, automotive education platform, increasing student engagement UX, digital transformation in driving education, website UX for driving instructors, SEO-optimized education website, learning management system UI, student-friendly UI design, course booking system UX, modern website design for schools, Canada education UI/UX expert, responsive school website design, UX designer for e-learning platforms",
};

export const staticMetadata = {
  contact: {
    title: `Let’s Build Something Exceptional | Hire a Senior UI/UX Designer`,
    description: `Great design isn’t just about aesthetics—it’s about results. Whether you need a high-converting landing page, a seamless SaaS dashboard, or a full-scale digital experience, let’s make it happen.`,
    keywords:
      "contact, support, customer service, get in touch, inquiries, hire a UI/UX designer, freelance UI/UX expert, work with a designer, consultation request, design project inquiry, UI/UX collaboration, design consultation, business inquiries, job opportunities, professional networking, portfolio review, project estimate, quote request, client support, partnership opportunities, UI/UX designer on Upwork, top-rated UI/UX freelancer, best UI/UX designer Pakistan, UI/UX expert Dubai, remote UI/UX freelancer, UI/UX consultant Dubai, UI/UX design services USA, European UI/UX designer, Upwork design specialist, SaaS UI/UX designer, fintech UI/UX consultant, high-rated UI/UX freelancer, hire UI/UX expert near me",
    robots: "index, follow", // Ensures the page is indexed by search engines
    ...COMMON_METADATA,
    openGraph: {
      title: `Let’s Build Something Exceptional | Hire a Senior UI/UX Designer`,
      description: `Great design isn’t just about aesthetics—it’s about results. Whether you need a high-converting landing page, a seamless SaaS dashboard, or a full-scale digital experience, let’s make it happen.`,
      url: "https://aurangg.com/contact",
      type: "website",
      images: [
        {
          url: "/basic-meta-image.png",
          width: 438,
          height: 230,
          alt: "Contact us page preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Let’s Build Something Exceptional | Hire a Senior UI/UX Designer`,
      description: `Great design isn’t just about aesthetics—it’s about results. Whether you need a high-converting landing page, a seamless SaaS dashboard, or a full-scale digital experience, let’s make it happen.`,
      images: ["/basic-meta-image.png"],
    },
  },
  resume: {
    title: `Designing Impactful Experiences | Explore Aurangg’s Resume`,
    description:
      "Beyond aesthetics—designing for results. With 6+ years of experience in SaaS, fintech, and B2B UX, explore how I craft intuitive and high-performing digital products.",
    keywords:
      "UI/UX resume, UI/UX designer CV, product designer resume, web design CV, mobile app UX resume, creative strategist CV, UX case studies, UI/UX work experience, professional UI/UX portfolio, best UI/UX resumes 2025, Freelance UI/UX, hire a UI/UX designer, Upwork freelancer, top UI/UX designer Upwork, best UI/UX freelancer portfolio, Upwork UI/UX profile, remote UI/UX freelancer, UX consultant experience, hire a UX strategist, SaaS UX expert, fintech UI/UX resume, B2B UX, dashboard UI designer, digital product designer, fintech UX strategist, UI/UX consultant Dubai, UI/UX expert Lahore, UI/UX designer Pakistan, best UI/UX designer Pakistan, UI/UX freelancer USA, European UI/UX designer, Next.js portfolio, user experience specialist, digital product design",
    ...COMMON_METADATA,
    openGraph: {
      title: `Designing Impactful Experiences | Explore Aurangg’s Resume`,
      description:
        "Beyond aesthetics—designing for results. With 6+ years of experience in SaaS, fintech, and B2B UX, explore how I craft intuitive and high-performing digital products.",
      url: "https://aurangg.com/resume",
      type: "website",
      images: [
        {
          url: "/basic-meta-image.png",
          width: 438,
          height: 230,
          alt: "Aurangg - UI/UX Resume Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Designing Impactful Experiences | Explore Aurangg’s Resume`,
      description:
        "Beyond aesthetics—designing for results. With 6+ years of experience in SaaS, fintech, and B2B UX, explore how I craft intuitive and high-performing digital products.",
      images: ["/basic-meta-image.png"],
    },
  },
  photos: {
    title: `Photos & Visual Storytelling | A Designer’s Perspective`,
    description: `A designer’s perspective isn’t limited to screens—it’s everywhere. Explore my photography: From the breathtaking landscapes of Skardu and Bali to the vibrant streets of Bangkok and Jakarta. Capturing moments of stillness, movement, and meaning—whether it’s sunsets over the ocean, portraits with raw emotions, or the symmetry of bikes and cars. Shot on iPhone, because great photography isn’t about the gear, it’s about the vision. 🎨`,

    keywords:
      "photography portfolio, designer photography, visual storytelling, Skardu photography, Hunza photography, Thailand photography, Bangkok photography, Koh Samui photography, Bali photography, Ubud photography, Indonesia travel photography, car photography, bike photography, motorcycle photography, sunset photography, ocean photography, creative portraits, artistic photography, deep meaning photography, minimalist photography, UI/UX designer photography, aesthetic photography, iPhone photography, Shot on iPhone, urban photography, nature photography, landscape photography, color theory in photography, light and shadow play, black and white photography, storytelling through photos, photography for designers, composition in photography, travel photography, professional mobile photography, photography inspiration, best mobile photography, cinematic photography, high-quality travel shots, best travel photographer",

    ...COMMON_METADATA,

    openGraph: {
      title: `Photos & Visual Storytelling | A Designer’s Perspective`,
      description: `Explore my photography: Skardu, Bali, Bangkok, Ubud, and beyond. From landscapes to cityscapes, from vehicles to portraits—capturing stories through visuals. Shot on iPhone, because great photography is about the vision, not the gear.`,
      url: "https://aurangg.com/photos",
      type: "website",
      images: [
        {
          url: "/meta-photos.png",
          width: 438,
          height: 230,
          alt: "A collection of travel, portrait, and artistic photography by a UI/UX designer",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Photos & Visual Storytelling | A Designer’s Perspective`,
      description: `A designer’s perspective isn’t just limited to screens—explore my photography collection from Skardu to Bali, capturing landscapes, vehicles, and moments with deeper meaning. Shot on iPhone.`,
      images: ["/meta-photos.png"],
    },
  },
  work: {
    title: `Work | UI/UX Designs That Convert – Dashboards, SaaS, Web & Mobile`,
    description: `Real Impact, Real Results – A portfolio of UI/UX designs that drive conversions, enhance user engagement, and scale businesses. From enterprise SaaS to mobile apps, explore case studies and high-performance designs.`,

    keywords:
      "UI/UX projects portfolio, senior UI/UX designer work, freelance UI/UX case studies, SaaS product designer, B2B UX expert, fintech UI/UX case studies, mobile app UX portfolio, dashboard UI projects, enterprise software UX, e-commerce UI/UX consultant, digital experience design, Upwork UI/UX work samples, scalable UI/UX solutions, Fintech UI/UX, banking platform UX, healthcare SaaS dashboard, logistics platform UI, AI & ML product design, SaaS UI/UX consultant, B2B web application design, enterprise software UX, mobile-first product UX, digital banking UI/UX, food delivery platform UI, government & corporate UX, e-commerce & marketplace UI/UX, startup UX consultant, high-growth SaaS UX solutions, User interface design, interactive UI/UX prototypes, wireframing & UX flows, usability testing & research, conversion-optimized UI, UX case studies with impact, high-converting digital experiences, product design from concept to launch, scalable design systems, accessibility-focused UI, customer-centric UX design, responsive web applications, mobile app UI/UX portfolio, AI-powered UX strategies, business-driven UX solutions, frictionless user journeys, increasing conversions by 35%, improving engagement rates, reducing churn through UX, data-driven UI solutions, optimizing SaaS retention, simplifying complex user flows, enterprise UX strategies, UX design that boosts revenue, reducing workflow inefficiencies by 40%, UI/UX solutions for business growth, data-backed UX improvements, Lahore-based UI/UX expert, best UI/UX designer in Pakistan, top UI/UX consultant for SaaS, hire a UI/UX designer in Lahore, Pakistan-based product designer, digital product strategist in Lahore, global UI/UX expert from Pakistan, Upwork UI/UX portfolio, best UI/UX designer for hire, top-rated UI/UX freelancer, SaaS UI/UX consultant for hire, hire an expert UI/UX strategist, digital product design consultant, UI/UX expert for startups, UI/UX consultant for enterprise projects, hire a remote UI/UX freelancer",
    ...COMMON_METADATA,
    openGraph: {
      title: `Work - UI/UX Designs That Convert – Dashboards, SaaS, Web & Mobile`,
      description: `Real Impact, Real Results – A portfolio of UI/UX designs that drive conversions, enhance user engagement, and scale businesses. From enterprise SaaS to mobile apps, explore case studies and high-performance designs.`,
      url: "https://aurangg.com/work",
      type: "website",
      images: [
        {
          url: "/basic-meta-image.png",
          width: 438,
          height: 230,
          alt: "Aurangg's portfolio",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Work | UI/UX Designs That Convert – Dashboards, SaaS, Web & Mobile`,
      description: `Real Impact, Real Results – A portfolio of UI/UX designs that drive conversions, enhance user engagement, and scale businesses. From enterprise SaaS to mobile apps, explore case studies and high-performance designs.`,
      images: ["/basic-meta-image.png"],
    },
  },
};

// FUNCTION TO FETCH DYNAMIC METADATA FROM PRISMIC
async function getDynamicMetadata(page, params = {}) {
  const client = createClient();
  let keywords = [];
  try {
    let document;
    switch (page) {
      case "homepage":
        document = await client.getSingle("homepage");
        keywords = [
          "UI/UX designer",
          "senior UI/UX designer",
          "freelance UI/UX designer",
          "user experience designer",
          "web designer",
          "mobile app designer",
          "SaaS UI/UX designer",
          "dashboard UI/UX expert",
          "landing page designer",
          "product designer",
          "Figma designer",
          "Adobe XD expert",
          "Next.js designer",
          "digital product designer",
          "UX strategist",
          "UI/UX consultant",
          "UI/UX developer",
          "UX case studies",
          "UI/UX portfolio",
          "design systems expert",
          "wireframing specialist",
          "user research expert",
          "user-centered design",
          "high-converting UI",
          "seamless UX design",
          "UI/UX best practices",
          "UX audit expert",
          "accessibility in UI/UX",
          "interactive prototypes",
          "mobile-first design",
          "responsive UI/UX",
          "UI/UX freelancer Upwork",
          "top-rated UI/UX freelancer",
          "UI/UX expert Dubai",
          "UI/UX consultant Lahore",
          "UI/UX designer Pakistan",
          "best UI/UX designer Pakistan",
          "UI/UX freelancer USA",
          "European UI/UX designer",
          "remote UI/UX freelancer",
          "hire a UX strategist",
          "fintech UI/UX expert",
          "healthcare UI/UX consultant",
          "SaaS UX specialist",
          "dashboard UI expert",
          "AI UX designer",
          "conversion-focused design",
          "UI/UX mentor",
          "design thinking expert",
          "usability expert",
          "UX testing",
          "professional UI/UX design services",
          "UI/UX freelancer website",
          "best UI/UX resumes 2025",
          "hire UI/UX specialist",
          "UX trends 2025",
          "UI/UX success stories",
        ];
        break;
      case "about":
        document = await client.getSingle("about");
        keywords = [
          "UI/UX designer in Lahore, Pakistan",
          "freelance UI/UX expert",
          "senior UI/UX designer portfolio",
          "product designer with 6+ years of experience",
          "high-converting UX design",
          "B2B & SaaS UI/UX",
          "fintech UI/UX expert",
          "enterprise software design",
          "digital product strategist",
          "Upwork top-rated UI/UX freelancer",
          "creative UX strategist",
          "remote UI/UX consultant",
          "Fintech UI/UX",
          "banking UX design",
          "healthcare SaaS UI",
          "e-commerce UX expert",
          "AI product design",
          "SaaS dashboard UX",
          "B2B web design",
          "startup product designer",
          "software UX consultant",
          "enterprise UX solutions",
          "mobile app UI/UX",
          "government & corporate UI/UX",
          "high-growth SaaS UX",
          "logistics platform UI",
          "crypto & blockchain UX",
          "digital banking experience design",
          "Boosting user engagement by 35%",
          "reducing workflow bottlenecks by 40%",
          "increasing conversions through optimized UX",
          "data-driven UI/UX decisions",
          "improving retention rates with intuitive UI",
          "streamlining user flows for better efficiency",
          "reducing cognitive load in digital experiences",
          "UX strategies for high-growth businesses",
          "Figma expert",
          "UI prototyping",
          "UX wireframing",
          "interactive design systems",
          "design tokens implementation",
          "accessibility-first UI",
          "usability testing & research",
          "conversion-optimized UI",
          "scalable design systems",
          "responsive web UI",
          "mobile-first UX design",
          "developer-friendly UI handoff",
          "iterative product design",
          "frictionless UX journeys",
          "customer-centric UX solutions",
          "Lahore-based UX consultant",
          "UI/UX expert serving global clients",
          "Pakistan’s top UI/UX designer",
          "hire a UI/UX freelancer from Pakistan",
          "digital product designer in Lahore",
          "best UI/UX designer for startups & enterprises",
          "hire a remote UI/UX designer from Pakistan",
          "Upwork UI/UX designer for hire",
          "hire a freelance UI/UX expert",
          "top-rated UI/UX freelancer",
          "best UI/UX designer for SaaS platforms",
          "B2B UI/UX consultant",
          "product designer for hire",
          "hire an expert UX strategist",
          "UI/UX expert for enterprise software",
        ];
        break;
      case "projects":
        document = await client.getAllByType("projects");
        keywords = [
          "UI/UX designer Lahore",
          "top UI/UX freelancer Pakistan",
          "senior UI/UX expert",
          "web and mobile UX specialist",
          "SaaS UI/UX design",
          "fintech dashboard UX",
          "e-commerce platform UI",
          "digital product design expert",
          "high-converting landing pages",
          "mobile banking UI/UX",
          "healthcare SaaS CRM design",
          "transportation platform UX",
          "enterprise UX solutions",
          "B2B SaaS UX designer",
          "AI-driven UI/UX",
          "e-commerce checkout UX",
          "intuitive user experience design",
          "dashboard UI expert",
          "startup UI/UX consultant",
          "fintech UX specialist",
          "government UX projects",
          "Upwork top-rated UI/UX freelancer",
          "best UI/UX portfolio",
          "SaaS onboarding experience design",
          "UI/UX case studies",
          "product design process",
          "high-performance UI/UX",
          "mobile app interface design",
          "UX audit and optimization",
          "UI/UX for enterprise software",
          "conversion-driven UX design",
          "user retention optimization",
          "accessibility-focused UI/UX",
          "data visualization dashboards",
          "UI/UX design for AI platforms",
          "best UI/UX practices 2025",
          "scalable UI/UX systems",
          "customer-centric product design",
          "UI/UX for banking and finance",
          "UX design for logistics",
          "cloud-based SaaS platform UI",
          "intuitive web app interfaces",
          "B2B software UI/UX",
          "customer engagement UI design",
          "visual storytelling in UX",
          "mobile-friendly UI best practices",
          "UX for high-growth startups",
          "seamless user journey mapping",
          "strategic UX research",
          "Figma UI/UX design expert",
          "cutting-edge UI trends",
          "UI/UX prototyping expert",
          "UX case study portfolio",
        ];
        break;
      case "workDetail":
        if (!params.slug) throw new Error("Missing slug for work detail page.");
        document = await client.getByUID("projects", params.slug);
        keywords =
          projectKeywords[params.slug] || "project, case study, portfolio"; // Use predefined static keywords
        break;
      default:
        return null;
    }

    return {
      title:
        document?.data.meta_title ||
        "Sr. UI/UX Designer - Landing Pages | Dashboards | SaaS | Websites | Mobile",
      description:
        document?.data.meta_description ||
        `🚀 Your UI/UX Secret Weapon: Turning Clicks into Conversions. You have seconds to capture attention. If your UI/UX isn't intuitive, users leave. That’s where I come in. I design high-converting, user-friendly interfaces that make navigation effortless and engagement seamless. With 6+ years of experience & $40K+ in Upwork earnings, I’ve helped businesses like Government of Dubai, Kruzee, Merch, and others create digital experiences that drive results.`,
      keywords,
      ...COMMON_METADATA,
      openGraph: {
        title:
          document?.data.meta_title ||
          `Sr. UI/UX Designer - Landing Pages | Dashboards | SaaS | Websites | Mobile`,
        description:
          document?.data.meta_description ||
          `🚀 Your UI/UX Secret Weapon: Turning Clicks into Conversions. You have seconds to capture attention. If your UI/UX isn't intuitive, users leave. That’s where I come in. I design high-converting, user-friendly interfaces that make navigation effortless and engagement seamless. With 6+ years of experience & $40K+ in Upwork earnings, I’ve helped businesses like Government of Dubai, Kruzee, Merch, and others create digital experiences that drive results.`,
        url: "https://aurangg.com/",
        type: "website",
        images: [
          {
            url: document?.data.meta_image?.url || "/basic-meta-image.png",
            width: 438,
            height: 230,
            alt: "Aurangg - UI/UX Designer Portfolio",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: document?.data.meta_title,
        description: document?.data.meta_description,
        images: [document?.data.meta_image?.url || "/basic-meta-image.png"],
      },
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${page}:`, error);
    return null;
  }
}

// MAIN FUNCTION TO GET METADATA (STATIC OR DYNAMIC)
export async function getMetadata(page, params = {}) {
  if (staticMetadata[page]) {
    return staticMetadata[page]; // Return static metadata directly
  }
  return await getDynamicMetadata(page, params); // Fetch dynamic metadata
}
