import Edit from 'icons/solid-mono/Edit';
import Lamp from 'icons/solid-mono/Lamp';
import Team from 'icons/lineal/Team';
import Check from 'icons/lineal/Check';
import Medal from 'icons/lineal/Medal';
import Earth from 'icons/lineal/Earth';
import Shield from 'icons/lineal/Shield';
import Target from 'icons/lineal/Target';
import Search from 'icons/lineal/Search';
import ChatTwo from 'icons/lineal/ChatTwo';
import Script from 'icons/solid-duo/Script';
import Verify from 'icons/solid-mono/Verify';
import Server from 'icons/solid-duo/Server';
import Setting from 'icons/solid-duo/Setting';
import TeamTwo from 'icons/solid-mono/TeamTwo';
import ShopTwo from 'icons/lineal/ShopTwo';
import Browser from 'icons/lineal/Browser';
import Director from 'icons/solid-duo/Director';
import Settings from 'icons/lineal/Settings';
import Telephone from 'icons/lineal/Telephone';
import SearchTwo from 'icons/lineal/SearchTwo';
import Analytics from 'icons/lineal/Analytics';
import Megaphone from 'icons/lineal/Megaphone';
import ClockThree from 'icons/lineal/ClockThree';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
import CloudNetwork from 'icons/solid-duo/CloudNetwork';
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo';
import SettingsThree from 'icons/lineal/SettingsThree';
import CloudComputing from 'icons/lineal/CloudComputing';
import { LinkType } from 'types/demo-1';
import color from 'utils/color';

// used in the services-1 block
export const serviceList1 = [
  {
    id: 1,
    link: '#',
    icon: Search,
    title: 'Fundamentals of DM',
    linkType: LinkType.yellow,
    description: `Marketing fundamentals, online vs. offline, channels overview`
  },
  {
    id: 2,
    link: '#',
    icon: Browser,
    title: 'Website Creation & Optimization',
    linkType: LinkType.red,
    description: `WordPress basics, landing pages, UI/UX fundamentals`
  },
  {
    id: 3,
    link: '#',
    icon: ChatTwo,
    linkType: LinkType.green,
    title: 'Search Engine Optimization (SEO)',
    description: `On & Off-page SEO, Technical SEO, Keyword research, SEO tools`
  },
  {
    id: 4,
    link: '#',
    icon: Megaphone,
    linkType: LinkType.blue,
    title: 'SEM / Google Ads',
    description: `Search Ads, Display Ads, Shopping Ads, Video Ads (YouTube Ads), Campaign setup`
  },
  {
    id: 5,
    link: '#',
    icon: Megaphone,
    linkType: LinkType.blue,
    title: 'Social Media Marketing (SMM)',
    description: `Strategies for Facebook, Instagram, LinkedIn, YouTube, Twitter`
  },
  {
    id: 6,
    link: '#',
    icon: Edit,
    linkType: LinkType.yellow,
    title: 'Content Marketing',
    description: 'Content writing, Blogging, SEO content strategy, Canva designing basics to advance'
  },
  {
    id: 7,
    link: '#',
    icon: Settings,
    linkType: LinkType.red,
    title: 'Email Marketing & Automation',
    description: 'Lead magnet creation, Drip campaigns, Mailchimp / HubSpot automation'
  },
  {
    id: 8,
    link: '#',
    icon: Analytics,
    linkType: LinkType.green,
    title: 'Analytics & Reporting',
    description: 'Google Analytics 4 (GA4), Conversion tracking, Data-driven decisions'
  },
  {
    id: 9,
    link: '#',
    icon: ShopTwo,
    linkType: LinkType.blue,
    title: 'E-commerce Marketing',
    description: 'Ads for e-commerce, Product listing + catalog creation'
  },
  {
    id: 10,
    link: '#',
    icon: Target,
    linkType: LinkType.yellow,
    title: 'Affiliate Marketing',
    description: 'Affiliate networks & earning strategies'
  },
  {
    id: 11,
    link: '#',
    icon: Medal,
    linkType: LinkType.red,
    title: 'Online Reputation Management',
    description: 'Brand monitoring & reviews management'
  },
  {
    id: 12,
    link: '#',
    icon: Team,
    linkType: LinkType.green,
    title: 'Influencer & Community Marketing',
    description: 'Collaboration planning + outreach processes'
  }
];

// used in the services-3, services-8, services-13 block
export const serviceList2 = [
  {
    id: 1,
    linkUrl: '#',
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  }
];

// used in the services-4 block
export const serviceList3 = [
  {
    id: 1,
    linkUrl: '#',
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-5 block
export const serviceList4 = [
  {
    id: 1,
    Icon: Telephone,
    title: '24/7 Support',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Shield,
    title: 'Secure Payments',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: CloudComputing,
    title: 'Daily Updates',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Analytics,
    title: 'Market Research',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: Settings,
    title: 'System Integration',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Earth,
    title: 'SEO Services',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-6 block
export const serviceList5 = [
  ['Aenean quam ornare curabitur blandit consectetur.', 'Nullam quis risus eget urna mollis ornare aenean leo.'],
  ['Etiam porta euismod malesuada mollis nisl ornare.', 'Vivamus sagittis lacus augue rutrum maecenas odio.']
];

// used in the services-7 block
export const serviceList6 = [
  {
    id: 1,
    Icon: Target,
    color: color.aqua,
    title: 'Fitness Goal',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Medal,
    color: color.yellow,
    title: 'Activity Tracking',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: ClockThree,
    color: color.red,
    title: 'Sleep Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Check,
    color: color.pink,
    title: 'Workout Report',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: ShopTwo,
    color: color.green,
    title: 'Nutritional Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Team,
    color: color.purple,
    title: 'Activity Sharing',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-9 block
export const serviceList7 = [
  {
    id: 1,
    Icon: Telephone,
    color: color.yellow,
    title: '24/7 Support',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5 offset-md-1 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 2,
    Icon: Shield,
    color: color.red,
    title: 'Secure Payments',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-6 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 3,
    color: color.leaf,
    Icon: CloudComputing,
    title: 'Daily Updates',
    cardColor: 'bg-pale-leaf',
    columnClass: 'col-md-5',
    description: 'Nulla vitae elit libero, a pharetra augue.'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.primary,
    title: 'Market Research',
    cardColor: 'bg-pale-primary',
    columnClass: 'col-md-6 align-self-start',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.'
  }
];

// used in the services-18 block
export const serviceList8 = [
  {
    id: 1,
    Icon: Browser,
    title: 'Web Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 2,
    Icon: SmartphoneTwo,
    title: 'Mobile Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 3,
    Icon: SettingsThree,
    title: 'Development',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 4,
    title: 'SEO',
    Icon: SearchTwo,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  }
];

// used in the services-19 block
export const serviceList9 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.orange,
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-20 block
export const serviceList10 = [
  {
    id: 1,
    linkUrl: '#',
    Icon: Script,
    title: 'Frontend Development',
    description: `Design and build modern, responsive user interfaces using HTML, CSS, JavaScript, and React. Create fast and interactive web pages for all devices.`
  },
 
  {
    id: 2,
    linkUrl: '#',
    Icon: Setting,
    title: 'Backend Development',
    description: `Develop secure and scalable server-side apps using Node.js, Express, and MongoDB. Manage data and build powerful APIs.`
  },
  {
    id: 3,
    linkUrl: '#',
    Icon: Server,
    title: 'Live Projects',
    description: `Work on real MERN projects and deploy them online. Build a strong portfolio for job placements.`
  }
];

// used in the services-21 block
export const serviceList11 = [
  {
    id: 1,
    link: '#',
    Icon: Edit,
    title: 'Content Marketing',
    linkType: LinkType.fuchsia,
    iconClassName: 'icon-svg-sm solid-mono text-fuchsia mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    link: '#',
    Icon: TeamTwo,
    title: 'Social Engagement',
    linkType: LinkType.violet,
    iconClassName: 'icon-svg-sm solid-mono text-violet mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    link: '#',
    Icon: Lamp,
    linkType: LinkType.orange,
    title: 'Identity & Branding',
    iconClassName: 'icon-svg-sm solid-mono text-orange mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    link: '#',
    Icon: DeliveryBox,
    title: 'Product Design',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-sm solid-mono text-green mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

// used in the services-24 block
export const serviceList12 = [
  {
    id: 1,
    title: 'Web Development',
    image: { '1x': '/img/illustrations/i24.png', '2x': '/img/illustrations/i24@2x.png 2x' },
    description: `Learn full-stack website creation using HTML, CSS, JavaScript, React, and Node.js. Build fast, responsive, and user-friendly web applications.`,
    gotolink: '/courses/web-development',
  },
  {
    id: 2,
    title: 'Data Analyst',
    image: { '1x': '/img/illustrations/i19.png', '2x': '/img/illustrations/i19@2x.png 2x' },
    description: `Master Excel, SQL, and Python to analyze data and create dashboards. Build skills for high-demand data analytics careers.`,
    gotolink: '/courses/data-analyst'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Learn SEO, social media ads, and branding strategies to promote businesses online. Gain practical experience with real campaigns.`,
    gotolink: '/courses/digital-marketing'
  },
  {
    id: 4,
    title: 'AI Automation',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Learn AI tools, workflows, and automation systems to streamline business tasks and increase productivity efficiently.`,
    gotolink: '/courses/ai-automation'
  },
  {
    id: 5,
    title: 'Coding Language',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Learn popular programming languages with hands-on practice to build logic, real applications, and problem-solving skills.`,
    gotolink: '/courses/coding-language'
  },
  {
    id: 6,
    title: 'Video Editing',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Edit professional videos using advanced tools to create engaging content for brands, social media, and storytelling.`,
    gotolink: '/courses/video-editing'
  },
  {
    id: 7,
    title: 'Advance Excel',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Master formulas, dashboards, and data analysis tools to boost productivity and professional reporting skills.`,
    gotolink: '/courses/advance-excel'
  },
  {
    id: 8,
    title: 'Tally Prime',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Learn accounting, GST, billing, and inventory management using industry-standard Tally Prime software effectively.`,
    gotolink: '/courses/tally-prime'
  },
  {
    id: 9,
    title: 'RSCIT',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Basic computer course for beginners to learn digital skills, internet usage, typing, and essential applications and many more.`,
    gotolink: '/courses/rscit'
  }
];

// used in the services-25 block
export const serviceList13 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: 'Web Design',
    icon: 'uil-monitor',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Graphic Design',
    icon: 'uil-swatchbook',
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.pink,
    title: '3D Animation',
    icon: 'uil-presentation-play',
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

// used in the services-26 block
export const serviceList14 = [
  {
    id: 1,
    url: '#',
    title: 'Wedding',
    image: { '1x': '/img/photos/fs1.jpg', '2x': '/img/photos/fs1@2x.jpg 2x' }
  },
  {
    id: 2,
    url: '#',
    title: 'Couples',
    image: { '1x': '/img/photos/fs2.jpg', '2x': '/img/photos/fs2@2x.jpg 2x' }
  },
  {
    id: 3,
    url: '#',
    title: 'Engagement',
    image: { '1x': '/img/photos/fs3.jpg', '2x': '/img/photos/fs3@2x.jpg 2x' }
  }
];

export const dataAnalystCurriculaum = [
  {
    id: 1,
    link: '#',
    icon: Search,
    title: 'Fundamentals of Data Analytics',
    linkType: LinkType.blue,
    description: 'Data types, analytics lifecycle, understanding business problems, decision-making with data.'
  },
  {
    id: 2,
    link: '#',
    icon: Analytics,
    title: 'Excel for Data Analysis',
    linkType: LinkType.green,
    description: 'Advanced formulas, lookup functions, pivot tables, charts, and dashboard creation.'
  },
  {
    id: 3,
    link: '#',
    icon: Server,
    linkType: LinkType.red,
    title: 'SQL for Data Querying',
    description: 'Joins, subqueries, filters, aggregations, CTEs, and real-world database case studies.'
  },
  {
    id: 4,
    link: '#',
    icon: Script,
    linkType: LinkType.yellow,
    title: 'Python for Data Analysis',
    description: 'NumPy, Pandas, data cleaning, data manipulation, Exploratory Data Analysis (EDA).'
  },
  {
    id: 5,
    link: '#',
    icon: CloudComputing,
    title: 'Data Visualization (Power BI / Tableau)',
    linkType: LinkType.blue,
    description: 'Interactive dashboards, DAX basics, KPI tracking, storytelling with visual insights.'
  },
  {
    id: 6,
    link: '#',
    icon: Analytics,
    linkType: LinkType.green,
    title: 'Statistics & Analytics Fundamentals',
    description: 'Probability, distributions, correlation, regression, hypothesis testing, A/B testing.'
  },
  {
    id: 7,
    link: '#',
    icon: SettingsThree,
    linkType: LinkType.red,
    title: 'Data Cleaning & Preprocessing',
    description: 'Handling missing data, outliers, duplicates, encoding, normalization, feature preparation.'
  },
  {
    id: 8,
    link: '#',
    icon: Analytics,
    linkType: LinkType.yellow,
    title: 'Business Analytics & Insights',
    description: 'Building KPIs, interpreting trends, generating insights, presenting reports effectively.'
  }
];
