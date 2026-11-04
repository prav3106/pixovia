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
  { id: "meta-ads", title: "Meta ads",
    intro: "Facebook and Instagram campaigns that bring in sales, WhatsApp enquiries and leads. Figures come from each client’s Meta Ads Manager." },
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

  // ---------- Meta ads ----------
  {
    group: "meta-ads",
    client: "DK Toyz",
    platform: "Meta Ads",
    period: "Jun – Sep 2026",
    figure: { value: 738 },
    label: "online toy orders from Facebook and Instagram sale campaigns",
    stats: [["Ad spend", "₹1,42,542"], ["Cost per order", "₹193"], ["Instagram profile visits", "2,418"]],
    chart: {
      title: "Website purchases by campaign",
      rows: [["June sale", 366], ["January sale", 115], ["Catalogue scale-up", 87], ["April sale", 70], ["October campaign", 53], ["May sales", 47]],
    },
    shots: [
      { src: "dktoyz-meta-top.png", w: 1818, h: 566, mark: [33.6, 24.6, 8.2, 17.4],
        caption: "The June sale alone brought 366 website purchases; the catalogue campaign added 87 more." },
      { src: "dktoyz-meta-sales.png", w: 1815, h: 560, mark: [33.9, 23.8, 8.2, 74],
        caption: "Earlier sale campaigns in the same account: January, April and May each turned spend into orders." },
    ],
  },
  {
    group: "meta-ads",
    client: "Make up Physics",
    platform: "Meta Ads",
    period: "Jan – Jul 2026",
    figure: { value: 807 },
    label: "bridal and workshop enquiries on WhatsApp and lead forms",
    stats: [["People reached", "20.9 lakh"], ["Per 1,000 reached", "₹5.17"], ["Lowest cost per chat", "₹25.06"]],
    chart: {
      title: "Enquiries by campaign",
      rows: [["Bridal, March", 312], ["Self-made workshop", 198], ["Bridal, January", 87], ["Crash courses", 78], ["Bridal lead form", 75], ["Workshop test", 29], ["Bridal, Naz", 28]],
    },
    shots: [
      { src: "makeupphysics-meta-bridal.png", w: 1833, h: 507, mark: [8, 48.6, 35, 9],
        caption: "March bridal campaign: 312 WhatsApp conversations at ₹56.58 each." },
      { src: "makeupphysics-meta-awareness.png", w: 1818, h: 500, mark: [7.7, 44.4, 43.8, 9],
        caption: "The awareness campaign reached 20,96,888 people for ₹10,833, about ₹5 per thousand." },
    ],
  },
  {
    group: "meta-ads",
    client: "Life in Frame",
    platform: "Meta Ads",
    period: "Mar – Sep 2026",
    figure: { value: 355 },
    label: "bridal leads from instant forms and WhatsApp",
    stats: [["Video views", "1,03,047"], ["Cost per view", "₹0.06"], ["Cost per WhatsApp chat", "₹27.76"]],
    chart: {
      title: "Leads by campaign",
      rows: [["Bridal lead form, April", 231], ["WhatsApp leads, April", 118], ["Bridal lead form, July", 6]],
    },
    shots: [
      { src: "lifeinframe-meta-leads.jpg", w: 1599, h: 375, mark: [8.7, 43, 51.4, 20.4],
        caption: "231 bridal leads from one instant form, plus 118 WhatsApp chats at ₹27.76 each." },
      { src: "lifeinframe-meta-recent.png", w: 1820, h: 499, mark: [8.6, 74.6, 37.8, 9.2],
        caption: "May to September view: the same lead form keeps delivering, with an engagement campaign at ₹0.49 per profile visit." },
    ],
  },
  {
    group: "meta-ads",
    client: "Dap Fitness",
    platform: "Meta Ads",
    period: "Jun – Sep 2026",
    figure: { value: 142 },
    label: "membership enquiries by call and WhatsApp for ₹5,265 in spend",
    stats: [["Cost per enquiry", "₹37"], ["Lowest cost per chat", "₹26.70"], ["Impressions", "1,38,450"]],
    chart: {
      title: "Enquiries by campaign",
      rows: [["Anniversary offer", 62], ["New leads campaigns", 44], ["Trainer leads", 24], ["Call campaign", 12]],
    },
    shots: [
      { src: "dapfitness-meta.png", w: 1811, h: 382, mark: [47.1, 36.6, 8.1, 60],
        caption: "Results column: calls and WhatsApp conversations from five small-budget campaigns." },
    ],
  },
  {
    group: "meta-ads",
    client: "Annai Appan Foundation",
    platform: "Meta Ads",
    period: "Jun – Jul 2026",
    figure: { value: 154 },
    label: "home-buyer enquiries for 2 and 3 BHK flats on ₹200 a day",
    stats: [["Cost per enquiry", "₹30.16"], ["Total spend", "₹5,253"], ["Impressions", "56,482"]],
    chart: {
      title: "Enquiries by campaign",
      rows: [["2 & 3 BHK, main", 143], ["2 & 3 BHK, second ad", 11]],
    },
    shots: [
      { src: "annaiappan-meta.jpg", w: 1599, h: 314, mark: [9.3, 59.8, 62.4, 15.2],
        caption: "143 WhatsApp enquiries at ₹30.16 each from the main property campaign." },
      { src: "annaiappan-meta-daily.jpg", w: 1599, h: 538, mark: [6.2, 49.8, 77.2, 5.2],
        caption: "Day by day: enquiries keep arriving steadily on a ₹200 daily budget." },
    ],
  },
  {
    group: "meta-ads",
    client: "Neithal Shipping",
    platform: "Meta Ads",
    period: "May – Jul 2026",
    figure: { value: 120 },
    label: "shipping leads from lead forms and WhatsApp",
    stats: [["Cost per WhatsApp lead", "₹44.60"], ["Total spend", "₹6,780"], ["From Instagram", "88%"]],
    chart: {
      title: "Leads by platform",
      rows: [["Instagram", 106], ["Facebook", 14]],
    },
    shots: [
      { src: "neithal-meta.jpg", w: 1599, h: 262, mark: [46.8, 45, 31.2, 32.5],
        caption: "Two campaigns: 95 WhatsApp leads at ₹44.60 and 25 form leads at ₹101.69." },
      { src: "neithal-meta-platforms.jpg", w: 1599, h: 368, mark: [7.9, 81.6, 70.2, 9.4],
        caption: "Split by platform: Instagram brought almost all of the WhatsApp leads." },
    ],
  },
  {
    group: "meta-ads",
    client: "Rainbow Overseas",
    platform: "Meta Ads",
    period: "Jul 2026",
    figure: { value: 112 },
    label: "WhatsApp enquiries for a paper manufacturer, from ₹18.53 each",
    stats: [["People reached", "4.9 lakh"], ["Per 1,000 reached", "₹2.08"], ["Total spend", "₹3,153"]],
    chart: {
      title: "Results by campaign",
      rows: [["Lead ad", 91], ["Lead ad, second", 21]],
    },
    shots: [
      { src: "rainbow-meta.jpg", w: 1599, h: 288, mark: [8.7, 65.2, 49, 15.8],
        caption: "91 WhatsApp enquiries at ₹18.53 each, and an awareness run that reached 4,87,555 people." },
    ],
  },
];
