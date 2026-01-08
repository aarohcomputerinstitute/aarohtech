import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQDataAnalyst } from "components/blocks/faq";
import { HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import DaCourseCurriculaum from "components/blocks/services/DaCourseCurriculaum";
import NextLink from "components/reuseable/links/NextLink";
import HeroDA from "components/blocks/hero/HeroDA";

// Expert SEO Metadata for Top Google Rankings
export const metadata: Metadata = {
  title: 'Data Analyst Course in Jaipur | Python, SQL, Power BI & Tableau Training with Certification',
  description: 'Become a certified Data Analyst with our comprehensive course in Jaipur. Master Python, SQL, Excel, Power BI, Tableau & Statistics. Get job-ready with hands-on projects and industry certification!',
  keywords: 'Data Analyst Course, Data Analytics Training, Python for Data Analysis, SQL Training Course, Power BI Certification, Tableau Training Jaipur, Excel for Data Analysis, Business Analytics Course, Data Science Course, Data Analyst Certification Jaipur, Learn Data Analytics, Advanced Excel Training, Python Pandas Course, Data Visualization Course, Statistics for Data Analysis, Best Data Analytics Institute Jaipur',
  authors: [{ name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'Data Analyst Course in Jaipur | Python, SQL, Power BI & Tableau Training',
    description: 'Master Data Analytics with Python, SQL, Excel, Power BI & Tableau. Get certified and launch your data analyst career with hands-on training and real projects in Jaipur.',
    url: 'https://aarohcomputerclasses.in/courses/data-analyst',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/data-analyst-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Data Analyst Course - Python, SQL, Power BI & Tableau Training in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Analyst Course in Jaipur | Python, SQL & Power BI Training',
    description: 'Master Python, SQL, Power BI, Tableau & Excel for Data Analysis. Get certified and job-ready. Hands-on data analytics training in Jaipur.',
    images: ['/img/courses/data-analyst-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aarohcomputerclasses.in/courses/data-analyst',
  },
};

// Advanced Schema.org Structured Data for Rich Search Results
function DataAnalystStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Data Analyst Course - Complete Python, SQL, Power BI & Tableau Training",
    "description": "Comprehensive Data Analytics training covering Python programming for data analysis, SQL database queries, Microsoft Excel for data manipulation, Power BI & Tableau for data visualization, Statistics, and Business Analytics. Learn data cleaning, analysis, visualization, and reporting with real-world projects. Get industry-recognized certification and become job-ready as a Data Analyst.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Aaroh Tech and AI Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalwar Road, Govindpura",
        "addressLocality": "Jhotwara, Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302012",
        "addressCountry": "IN"
      },
      "url": "https://aarohcomputerclasses.in",
      "telephone": "+91-9828658887",
      "sameAs": [
        "https://www.facebook.com/aarohtech",
        "https://www.instagram.com/aarohtech"
      ]
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["Online", "Onsite"],
      "courseWorkload": "PT3M",
      "instructor": {
        "@type": "Person",
        "name": "Ram Sir",
        "jobTitle": "Senior Data Analytics Trainer",
        "description": "Expert Data Analytics Professional with years of industry experience"
      },
      "location": {
        "@type": "Place",
        "name": "Aaroh Tech and AI Institute",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kalwar Road, Govindpura",
          "addressLocality": "Jhotwara, Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302012",
          "addressCountry": "IN"
        }
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Development",
      "availability": "https://schema.org/InStock",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    },
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "Python Programming for Data Analysis",
      "SQL Database Queries & Management",
      "Microsoft Excel for Data Analytics",
      "Power BI Data Visualization",
      "Tableau Desktop & Analytics",
      "Statistics & Probability",
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization Techniques",
      "Business Intelligence & Reporting",
      "Python Pandas & NumPy",
      "Data Mining & Analysis",
      "Dashboard Creation",
      "Statistical Analysis"
    ],
    "coursePrerequisites": "Basic computer knowledge. No prior programming experience required.",
    "occupationalCredentialAwarded": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "Data Analyst Certification"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "180",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasCourseSection": [
      {
        "@type": "CourseSection",
        "name": "Python for Data Analysis",
        "description": "Master Python programming including Pandas, NumPy for data manipulation and analysis"
      },
      {
        "@type": "CourseSection",
        "name": "SQL & Database Management",
        "description": "Learn SQL queries, joins, subqueries, and database operations for data extraction"
      },
      {
        "@type": "CourseSection",
        "name": "Power BI & Tableau",
        "description": "Create interactive dashboards and visualizations using industry-leading tools"
      },
      {
        "@type": "CourseSection",
        "name": "Excel for Data Analytics",
        "description": "Master advanced Excel functions, pivot tables, and data analysis tools"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Aaroh Tech and AI Institute",
    "alternateName": "Aaroh Computer Classes",
    "url": "https://aarohcomputerclasses.in",
    "logo": "https://aarohcomputerclasses.in/logo.png",
    "description": "Premier computer training institute in Jaipur offering Data Analytics, Full Stack Web Development, AI, Digital Marketing courses with industry certifications and job placement assistance.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalwar Road, Govindpura",
      "addressLocality": "Jhotwara, Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302012",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "telephone": "+91-9828658887",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aarohcomputerclasses.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://aarohcomputerclasses.in/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Data Analyst",
        "item": "https://aarohcomputerclasses.in/courses/data-analyst"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Data Analytics and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Data Analytics is the process of examining, cleaning, transforming, and modeling data to discover useful information and support decision-making. It's crucial in today's digital economy as businesses rely on data-driven insights to improve operations, understand customers, and gain competitive advantages. Our comprehensive course teaches Python, SQL, Excel, Power BI, and Tableau for professional data analysis."
        }
      },
      {
        "@type": "Question",
        "name": "What will I learn in this Data Analyst course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll master Python programming for data analysis (Pandas, NumPy), SQL for database queries, Advanced Excel for data manipulation, Power BI and Tableau for data visualization, Statistics and probability, data cleaning and preprocessing, exploratory data analysis (EDA), business intelligence, dashboard creation, and real-world data analytics projects. The course covers everything from beginner to advanced level."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need programming experience to join this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No prior programming experience is required. Our Data Analyst course starts with fundamentals and progressively builds your skills. Basic computer knowledge and analytical thinking are sufficient to begin. We teach Python from scratch, making it perfect for beginners transitioning into data analytics careers."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive a certification after completing the course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, upon successful completion of the Data Analyst course, you'll receive an industry-recognized certification that validates your skills in Python, SQL, Power BI, Tableau, and data analytics. This certification enhances your resume and demonstrates your proficiency to potential employers."
        }
      },
      {
        "@type": "Question",
        "name": "What career opportunities are available after this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After completing our Data Analyst course, you can pursue careers as Data Analyst, Business Analyst, Business Intelligence Analyst, Data Visualization Specialist, SQL Developer, Excel Data Analyst, Power BI Developer, Tableau Consultant, or Market Research Analyst. The demand for data analysts is growing rapidly across all industries with excellent salary packages."
        }
      },
      {
        "@type": "Question",
        "name": "Is the course available online and offline in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both online and classroom training options for the Data Analyst course. You can attend live online classes from anywhere or join our physical classroom in Jhotwara, Jaipur at Kalwar Road, Govindpura. Both modes provide the same comprehensive curriculum, hands-on projects, and expert instruction."
        }
      },
      {
        "@type": "Question",
        "name": "What tools and software will I learn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll gain expertise in industry-standard tools including Python (with Pandas, NumPy, Matplotlib libraries), SQL and database management systems, Microsoft Excel (Advanced functions, Pivot Tables, Macros), Power BI Desktop for interactive dashboards, Tableau for advanced visualizations, and statistical analysis tools. All software training is included in the course."
        }
      }
    ]
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Data Analyst Career Training Program",
    "description": "Complete Data Analyst training program preparing students for careers in data analytics, business intelligence, and data science",
    "occupationalCategory": {
      "@type": "CategoryCode",
      "inCodeSet": {
        "@type": "CategoryCodeSet",
        "name": "O*NET-SOC",
        "url": "https://www.onetonline.org/"
      },
      "codeValue": "15-2051.00",
      "name": "Data Scientists"
    },
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Aaroh Tech and AI Institute"
    },
    "timeToComplete": "PT3M",
    "occupationalCredentialAwarded": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
    </>
  );
}

export default function DataAnalyst() {
  return (
    <Fragment>
      <DataAnalystStructuredData />
      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <NextLink
              href="/contact-us"
              title="Contact"
              className="btn btn-sm btn-primary rounded-pill "
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <HeroDA />

        {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <DaCourseCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQDataAnalyst />
        </section>

        <div className="container pt-lg-8">
          <div className="row">
            <div className="col-12 text-center mb-16">
              <h2 className="display-2 text-primary mb-0">Get Certified</h2>
            </div>
          </div>
          <HeroGetCertificate />
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
