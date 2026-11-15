import React from "react";

export default function JsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MarketingAgency", "LocalBusiness", "ProfessionalService"],
        "@id": "https://reachex.io/#organization",
        name: "ReachX",
        alternateName: [
          "ReachX SMMA",
          "ReachX Marketing",
          "ReachX Performance Agency",
          "ReachX Meta Ads Specialist Agency",
        ],
        url: "https://reachex.io",
        logo: "https://reachex.io/logo.svg",
        image: "https://reachex.io/og-image.jpg",
        description:
          "ReachX is a leading social media marketing agency (SMMA) and certified Meta ads specialist agency based in Nagpur, Maharashtra. We scale brands across India with high-ROAS Facebook & Instagram ads, Conversion API (CAPI) tracking, and performance marketing systems.",
        telephone: "+91 91724 64547",
        email: "hello@reachex.io",
        priceRange: "₹₹₹",
        currenciesAccepted: "INR, USD",
        paymentAccepted: "Bank Transfer, Credit Card, UPI",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ReachX HQ, Near Trimurti Nagar / Hingna Road",
          addressLocality: "Nagpur",
          addressRegion: "Maharashtra",
          postalCode: "440022",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 21.114011,
          longitude: 79.041712,
        },
        hasMap: "https://www.google.com/maps?cid=3306307394348583166",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Nagpur" },
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Bangalore" },
          { "@type": "City", name: "Delhi NCR" },
          { "@type": "AdministrativeArea", name: "Maharashtra" },
          { "@type": "Country", name: "India" },
        ],
        founder: [
          {
            "@type": "Person",
            name: "Shreyash Gadhwe",
            jobTitle: "Founder & Chief Executive Officer",
          },
          {
            "@type": "Person",
            name: "Kalash Chouria",
            jobTitle: "Co-Founder & Meta Ads Specialist / COO",
          },
          {
            "@type": "Person",
            name: "Jitendra Uikey",
            jobTitle: "Co-Founder & CMSO",
          },
          {
            "@type": "Person",
            name: "Chaitanya Yawale",
            jobTitle: "Co-Founder & COO",
          },
          {
            "@type": "Person",
            name: "Advait Khangar",
            jobTitle: "Chief Technology Officer",
          },
        ],
        knowsAbout: [
          "Social Media Marketing",
          "SMMA",
          "Meta Ads",
          "Facebook Advertising",
          "Instagram Advertising",
          "Performance Marketing",
          "Conversion API (CAPI)",
          "Lead Generation",
          "Franchise Expansion Systems",
          "Full Funnel Optimization",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "38",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://reachex.io/#website",
        url: "https://reachex.io",
        name: "ReachX — SMMA & Meta Ads Specialist",
        publisher: { "@id": "https://reachex.io/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://reachex.io/#service-smma",
        name: "Social Media Marketing & Meta Ads Specialist Agency",
        serviceType: "SMMA & Performance Marketing",
        provider: { "@id": "https://reachex.io/#organization" },
        description:
          "End-to-end social media marketing agency services, Meta ad campaign architecture, server-side Conversion API (CAPI) tracking, and conversion rate optimization.",
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://reachex.io/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Looking for the best social media marketing agency (SMMA) near me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ReachX is a top-rated social media marketing agency (SMMA) and performance marketing consultancy headquartered in Nagpur, Maharashtra, servicing brands locally and across India. ReachX deploys data-driven Meta ads, hyper-targeted campaigns, server-side CAPI tracking, and automated lead qualification systems.",
            },
          },
          {
            "@type": "Question",
            name: "Who is the leading Meta ads specialist near me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ReachX houses dedicated Meta ads specialists led by co-founder Kalash Chouria. ReachX designs high-ROAS creative angles, algorithmic bidding strategies, live CAPI synchronization, and full-funnel lead generation on Facebook and Instagram.",
            },
          },
          {
            "@type": "Question",
            name: "How does ReachX qualify leads before handing them to sales?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ReachX uses multi-step qualification funnels, behavioral tracking, verified lead parameters, and automated nurture sequences to ensure your team only speaks with genuine, high-intent prospects.",
            },
          },
          {
            "@type": "Question",
            name: "Can ReachX handle franchise expansion and multi-city marketing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. ReachX has enabled over 140+ franchise outlets across India for brands like MahaChai and Pyramid, handling hyper-local geo-targeted Meta ads and investor pipeline generation.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
