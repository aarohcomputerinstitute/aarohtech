

// courses links
const courses = [
  { id: 1, url: "/courses/web-development", title: "Web Development Course", thumnail: "web" },
  { id: 2, url: "/courses/digital-marketing", title: "Digital Marketing Course", thumnail: "mi2" },
  { id: 3, url: "/courses/data-analyst", title: "Data Analyst Course", thumnail: "mi3" },
  { id: 4, url: "/courses/ai-automation", title: "AI Automation Course", thumnail: "mi6" },
  { id: 5, url: "/courses/coding-language", title: "Coding Language Course", thumnail: "mi7" },
  { id: 6, url: "/courses/video-editing", title: "Video Editing Course", thumnail: "mi8" },
  { id: 7, url: "/courses/rscit", title: "RSCIT Course", thumnail: "mi9" },
  { id: 8, url: "/courses/advance-excel", title: "Advance Excel Course", thumnail: "mi4" },
  { id: 9, url: "/courses/tally-prime", title: "Tally Prime Course", thumnail: "mi5" },

];

// projects pages link
const projectsNavigation = [
  {
    title: "PROJECT PAGES",
    children: [
      { id: 1, title: "Project I", url: "/projects-1" },
      { id: 2, title: "Project II", url: "/projects-2" },
      { id: 3, title: "Project III", url: "/projects-3" },
      { id: 4, title: "Project VI", url: "/projects-4" },
    ],
  },
  {
    title: "SINGLE PROJECTS",
    children: [
      { id: 1, title: "Single Project I", url: "/single-project-1" },
      { id: 2, title: "Single Project II", url: "/single-project-2" },
      { id: 3, title: "Single Project III", url: "/single-project-3" },
      { id: 4, title: "Single Project VI", url: "/single-project-4" },
    ],
  },
];

// about pages links
const aboutNavigation = [
  { id: 1, url: "/about-aaroh", title: "about aaroh" },
];

// online academy links
const onlineAcademyNavigation = [
  { id: 1, url: "https://www.youtube.com/@aarohtechacademy", title: "Free Courses", target: "_blank" },
  { id: 2, url: "#", title: "Paid Courses", target: "_blank" },
];
// blocks pages links
const blocksNavigation = [
  {
    id: 1,
    url: "/docs/blocks/about",
    title: "About",
    thumnail: "/img/thumbnails/block1.svg",
  },
  {
    id: 2,
    url: "/docs/blocks/blog",
    title: "Blog",
    thumnail: "/img/thumbnails/block2.svg",
  },
  {
    id: 3,
    url: "/docs/blocks/call-to-action",
    title: "Call to Action",
    thumnail: "/img/thumbnails/block3.svg",
  },
  {
    id: 4,
    url: "/docs/blocks/clients",
    title: "Clients",
    thumnail: "/img/thumbnails/block4.svg",
  },
  {
    id: 5,
    url: "/docs/blocks/contact",
    title: "Contact",
    thumnail: "/img/thumbnails/block5.svg",
  },
  {
    id: 6,
    url: "/docs/blocks/facts",
    title: "Facts",
    thumnail: "/img/thumbnails/block6.svg",
  },
  {
    id: 7,
    url: "/docs/blocks/faq",
    title: "FAQ",
    thumnail: "/img/thumbnails/block7.svg",
  },
  {
    id: 8,
    url: "/docs/blocks/features",
    title: "Features",
    thumnail: "/img/thumbnails/block8.svg",
  },
  {
    id: 9,
    url: "/docs/blocks/footer",
    title: "Footer",
    thumnail: "/img/thumbnails/block9.svg",
  },
  {
    id: 10,
    url: "/docs/blocks/hero",
    title: "Hero",
    thumnail: "/img/thumbnails/block10.svg",
  },
  {
    id: 11,
    url: "/docs/blocks/navbar",
    title: "Navbar",
    thumnail: "/img/thumbnails/block11.svg",
  },
  {
    id: 12,
    url: "/docs/blocks/portfolio",
    title: "Portfolio",
    thumnail: "/img/thumbnails/block12.svg",
  },
  {
    id: 13,
    url: "/docs/blocks/pricing",
    title: "Pricing",
    thumnail: "/img/thumbnails/block13.svg",
  },
  {
    id: 14,
    url: "/docs/blocks/process",
    title: "Process",
    thumnail: "/img/thumbnails/block14.svg",
  },
  {
    id: 15,
    url: "/docs/blocks/team",
    title: "Team",
    thumnail: "/img/thumbnails/block15.svg",
  },
  {
    id: 16,
    url: "/docs/blocks/testimonials",
    title: "Testimonials",
    thumnail: "/img/thumbnails/block16.svg",
  },
];

export {
  aboutNavigation,
  courses,
  blocksNavigation,
  projectsNavigation,
  onlineAcademyNavigation,
};
