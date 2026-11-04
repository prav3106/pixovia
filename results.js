// Client results shown on the Works page, grouped by service.
//
// To add a result: drop the cropped screenshot in assets/results/ and add an
// entry to RESULTS with the matching `group`. A group only appears on the page
// once it has at least one result, so empty groups can stay listed here.
//
// shots[].mark is the box drawn over the key figure, in percent of the image:
// [left, top, width, height].

const RESULT_GROUPS = [
  { id: "websites", title: "Websites & online stores",
    intro: "Shopify stores we built and keep growing. Every figure is read straight off the store’s own attribution report." },
  { id: "google-ads", title: "Google Ads",
    intro: "Search, Shopping and Performance Max campaigns we manage. Figures come from Google Ads and Google Analytics." },
  { id: "digital-marketing", title: "Digital marketing", intro: "" },
  { id: "scratch-marketing", title: "Digital marketing from scratch", intro: "" },
  { id: "meta-ads", title: "Meta ads", intro: "" },
  { id: "personal-branding", title: "Personal branding", intro: "" },
];

const RESULTS = [
  // ---------- Websites ----------
  {
    group: "websites",
    client: "The FootyMan",
    platform: "Shopify",
    period: "Store attribution",
    figure: { value: 231411, prefix: "$" },
    label: "in store sales from Google Ads traffic",
    stats: [["Orders", "3,043"], ["Conversion rate", "5.81%"], ["Average order", "$76.05"]],
    chart: {
      title: "Sales by channel",
      rows: [["Google Ads", 231412], ["Direct", 23431], ["Google organic", 23053], ["Google, other", 17401], ["Facebook Ads", 10354], ["Bing", 3196]],
      format: "money",
    },
    shots: [
      { src: "footyman-shopify-channels.png", w: 1080, h: 575, mark: [0.4, 14.6, 56.5, 6.2],
        caption: "Paid Google traffic: 52,370 sessions turned into 3,043 orders and $231,411 in sales." },
      { src: "footyman-shopify-channels-2.png", w: 1080, h: 559, mark: [0.4, 14.4, 53.6, 6.2],
        caption: "A shorter window, same story: Google Ads converts at 6.95%, against 1.06% for direct visits." },
      { src: "footyman-shopify-campaigns.png", w: 1080, h: 530, mark: [0.4, 31.4, 64.8, 6.6],
        caption: "May 2026 by campaign: the lead Google campaign alone brought 384 orders and $27,485." },
    ],
  },
  {
    group: "websites",
    client: "A2Z Fitness",
    platform: "Shopify",
    period: "Store attribution",
    figure: { value: 104251, prefix: "$" },
    label: "in sales from Google, paid and organic together",
    stats: [["Google Ads sales", "$59,818"], ["Organic search", "$44,433"], ["Average order", "$507"]],
    chart: {
      title: "Sales by channel",
      rows: [["Google Ads", 59818], ["Google organic", 44433], ["Direct", 16237], ["Google, other", 6334], ["Unattributed", 5571], ["Facebook", 4129]],
      format: "money",
    },
    shots: [
      { src: "a2z-shopify-channels.png", w: 1080, h: 503, mark: [0.5, 23.6, 53.8, 13.4],
        caption: "Big-ticket orders averaging $507: Google Ads and organic search together brought 172 orders worth $104,251." },
    ],
  },

  // ---------- Google Ads ----------
  {
    group: "google-ads",
    client: "The FootyMan",
    platform: "Google Ads",
    period: "Jan – Jun 2026",
    figure: { value: 10.4, suffix: "×", decimals: 1 },
    label: "return on ad spend: A$334,961 in conversion value from A$32,047",
    stats: [["Impressions", "2.84M"], ["Conversions", "4,602"], ["Cost per conversion", "A$6.96"]],
    chart: {
      title: "Conversion value by campaign",
      rows: [["Best players", 111043], ["Best sellers", 79190], ["Other products", 77728], ["Brand search", 35797], ["Jackets & hoodies", 31202]],
      format: "money", currency: "A$",
    },
    shots: [
      { src: "footyman-ads-overview.png", w: 808, h: 458, mark: [0.2, 2.4, 66.6, 17.6],
        caption: "Six months across five campaigns: 2.84 million impressions and 4,602 conversions." },
      { src: "footyman-ads-campaigns.png", w: 1103, h: 525, mark: [67.9, 13.4, 5.4, 86],
        caption: "Every campaign pays for itself. Conversion value per campaign ranges from A$31,202 to A$111,043." },
    ],
  },
  {
    group: "google-ads",
    client: "Sheds and Carports Online",
    platform: "Google Analytics",
    period: "Jan – Jul 2026",
    figure: { value: 288234, prefix: "$" },
    label: "in revenue from two Performance Max campaigns",
    stats: [["Key events", "171,682"], ["Engagement rate", "95.96%"], ["Events per session", "14.52"]],
    chart: {
      title: "Revenue by campaign",
      rows: [["Performance Max, main", 247929], ["Performance Max, budget", 40305]],
      format: "money",
    },
    shots: [
      { src: "sheds-ga4.png", w: 1295, h: 465, mark: [80.6, 69.4, 13.4, 30],
        caption: "Total revenue column: $288,234, with 86% coming from the main Performance Max campaign." },
    ],
  },
  {
    group: "google-ads",
    client: "Fred Auto Parts",
    platform: "Google Analytics",
    period: "Jan – Jun 2026",
    figure: { value: 194020, prefix: "$" },
    label: "in revenue from Performance Max and Shopping",
    stats: [["Key events", "18,516"], ["Engagement rate", "59.18%"], ["Events per session", "9.13"]],
    chart: {
      title: "Revenue by campaign",
      rows: [["Performance Max", 143156], ["Shopping", 50864]],
      format: "money",
    },
    shots: [
      { src: "fredauto-ga4.png", w: 1250, h: 492, mark: [82.8, 64.8, 14.6, 35],
        caption: "Total revenue column: $194,020 in six months, three quarters of it from Performance Max." },
    ],
  },
  {
    group: "google-ads",
    client: "Streeting Automotive",
    platform: "Google Ads",
    period: "Jan – Jun 2026",
    figure: { value: 326 },
    label: "conversions from a single search campaign on A$20 a day",
    stats: [["Click-through rate", "11.10%"], ["Cost per conversion", "A$11.11"], ["Average click", "A$3.10"]],
    chart: {
      title: "From search to customer",
      type: "funnel",
      rows: [["Impressions", 10528], ["Clicks", 1169], ["Conversions", 326]],
    },
    shots: [
      { src: "streeting-ads.png", w: 1122, h: 496, mark: [0.6, 14.6, 35.6, 15.2],
        caption: "A$3,623 spent over six months for 326 conversions, with 11.1% of searchers clicking through." },
    ],
  },
];
