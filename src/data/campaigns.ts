export interface CampaignItem {
  id: string;
  title: string;
  category: string;
  platform: string;
  metric: string;
  metricLabel: string;
  src: string;
  alt: string;
}

export const campaignAssets: CampaignItem[] = [
  {
    id: "campaign-1",
    title: "Omnichannel Acquisition Scaling",
    category: "Lead Generation · Real Estate",
    platform: "Meta Ads (FB & IG)",
    metric: "4.6x",
    metricLabel: "Blended ROAS",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.08.29 PM.jpeg",
    alt: "Meta Ads campaign dashboard showing 4.6x ROAS and scaled lead generation"
  },
  {
    id: "campaign-2",
    title: "High-Intent B2B Prospecting",
    category: "B2B Manufacturing · Ground Screws",
    platform: "Meta CAPI & Custom Audiences",
    metric: "-42%",
    metricLabel: "Cost Per Acquisition",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.08.29 PM (1).jpeg",
    alt: "B2B manufacturing Meta ad campaign metrics showing 42% CPA reduction"
  },
  {
    id: "campaign-3",
    title: "Pan-India Franchise Expansion",
    category: "F&B · Franchise Growth",
    platform: "Meta Instant Forms & Advantage+",
    metric: "140+",
    metricLabel: "Franchise Units Opened",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.08.29 PM (2).jpeg",
    alt: "Franchise growth campaign analytics with 140+ verified conversions"
  },
  {
    id: "campaign-4",
    title: "D2C Organic Product Scaler",
    category: "E-Commerce · Organic FMCG",
    platform: "Dynamic Product Ads (DPA)",
    metric: "5.2x",
    metricLabel: "Purchase ROAS",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.08.30 PM.jpeg",
    alt: "D2C Meta ad campaign report showing 5.2x purchase ROAS"
  },
  {
    id: "campaign-5",
    title: "Premium Luxury Estate Visits",
    category: "Infrastructure · Luxury Living",
    platform: "Lead Gen & Offline Conversions",
    metric: "~40%",
    metricLabel: "Site Visit Ratio",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.08.30 PM (1).jpeg",
    alt: "Real estate campaign report showing 40% site visit conversion rate"
  },
  {
    id: "campaign-6",
    title: "Creative Fatigue Breaker Testing",
    category: "Retail Commerce & Direct Order",
    platform: "Advantage+ Creative Suite",
    metric: "3.8M",
    metricLabel: "High-Intent Impressions",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.08.30 PM (2).jpeg",
    alt: "Creative fatigue testing dashboard showing 3.8M impressions"
  },
  {
    id: "campaign-7",
    title: "Hyper-Local Delivery Funnel",
    category: "Dairy & Quick Commerce",
    platform: "WhatsApp Direct & Meta Ads",
    metric: "+68%",
    metricLabel: "Direct Repeat Orders",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.13.41 PM.jpeg",
    alt: "Hyper-local Meta campaign metrics showing 68% repeat order surge"
  },
  {
    id: "campaign-8",
    title: "Adventure & Camp Advance Bookings",
    category: "Education & Outdoor Tourism",
    platform: "Retargeting & Lookalikes",
    metric: "91%",
    metricLabel: "High-Intent Closures",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.14.14 PM (1).jpeg",
    alt: "Adventure tourism advance booking campaign analytics"
  },
  {
    id: "campaign-9",
    title: "Enterprise Coworking Occupancy",
    category: "Commercial Real Estate",
    platform: "Lead Generation & Retargeting",
    metric: "88%",
    metricLabel: "Occupancy Rate Hit",
    src: "/campaigns/WhatsApp Image 2026-11-04 at 7.14.14 PM.jpeg",
    alt: "Commercial workspace Meta ad campaign metrics"
  }
];
