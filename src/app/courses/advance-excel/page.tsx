import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQAdvanceExcel } from "components/blocks/faq";
import { HeroAdvanceExcel, HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { AdvanceExcelCurriculaum } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";

// SEO Metadata
export const metadata: Metadata = {
  title: 'Advance Excel Course in Jaipur | Data Analytics & MIS Training with Certification',
  description: 'Master Advance Excel with our comprehensive course in Jaipur. Learn VLOOKUP, Pivot Tables, Macros, VBA, MIS Reporting, and Data Analytics. Hands-on training with live projects.',
  keywords: 'Advance Excel Course, Excel Training Jaipur, MIS Training, Data Analytics Course, VBA Course, Excel Macros, V-Lookup, Pivot Tables, Advanced Excel Certification, Excel Institute Jaipur, Microsoft Excel Training',
  authors: [{ name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'Advance Excel Course in Jaipur | Data Analytics & MIS Training',
    description: 'Master Advance Excel, Macros, VBA, and MIS Reporting. Get certified as an Excel Expert in Jaipur with hands-on training.',
    url: 'https://aarohcomputerclasses.in/courses/advance-excel',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/advance-excel-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Advance Excel Course - Data Analytics & MIS Training in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advance Excel Course in Jaipur | Data Analytics & MIS Training',
    description: 'Master Advance Excel, Macros, VBA, and MIS Reporting. Get certified as an Excel Expert in Jaipur.',
    images: ['/img/courses/advance-excel-og.jpg'],
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
    canonical: 'https://aarohcomputerclasses.in/courses/advance-excel',
  },
};

// Schema.org Structured Data for SEO
function AdvanceExcelStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Advance Excel Course - Complete Data Analytics & MIS Training",
    "description": "Comprehensive Advance Excel training covering VLOOKUP, HLOOKUP, Pivot Tables, Macros, VBA, Power Query, MIS Reporting, Data Visualization, and Dashboard creation. Get certified and master Excel strategies with real-world projects.",
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
      "courseWorkload": "PT2M",
      "instructor": {
        "@type": "Person",
        "name": "Ram Sir",
        "jobTitle": "Senior Data Analyst & Excel Trainer",
        "description": "Expert Data Analyst with years of industry experience in MIS and Reporting"
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
      "availability": "https://schema.org/InStock"
    },
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "Advanced Formulas & Functions",
      "VLOOKUP & HLOOKUP",
      "Pivot Tables & Slicers",
      "Data Validation",
      "Conditional Formatting",
      "Macros & VBA",
      "Power Query",
      "Dashboard Creation",
      "MIS Reporting",
      "Data Analysis",
      "Financial Modeling",
      "Chart & Graph Visualization"
    ],
    "coursePrerequisites": "Basic computer knowledge",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Aaroh Tech and AI Institute",
    "alternateName": "Aaroh Computer Classes",
    "url": "https://aarohcomputerclasses.in",
    "logo": "https://aarohcomputerclasses.in/logo.png",
    "description": "Leading computer training institute in Jaipur offering Digital Marketing, Full Stack Web Development, AI, Data Analytics and more with industry-recognized certifications.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalwar Road, Govindpura",
      "addressLocality": "Jhotwara, Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302012",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
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
        "name": "Advance Excel",
        "item": "https://aarohcomputerclasses.in/courses/advance-excel"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Advance Excel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Advance Excel refers to the use of sophisticated features in Microsoft Excel for data analysis, reporting, and automation. It involves complex formulas, Pivot Tables, Macros, VBA, and data visualization tools to handle large datasets efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "What topics are covered in this Advance Excel course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our course covers Advanced Formulas (VLOOKUP, INDEX-MATCH), Pivot Tables, Data Validation, Conditional Formatting, Macros & VBA automation, Power Query, MIS Reporting, Dashboard creation, and Financial Modeling."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior Excel knowledge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic knowledge of Excel (opening files, simple typing) is helpful but not mandatory. We start from the fundamentals and take you to the advanced level."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get a certificate after completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you will receive a professional Advance Excel Certification from Aaroh Tech and AI Institute upon successful completion of the course and projects."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career options after Advance Excel training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Career opportunities include MIS Executive, Data Analyst, Financial Analyst, Business Analyst, Operations Manager, and Reporting Specialist. Excel skills are highly valued across all industries."
        }
      },
      {
        "@type": "Question",
        "name": "How is the training conducted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both classroom (offline) training in Jaipur and online live sessions. The training is highly practical with hands-on exercises and real-world case studies."
        }
      }
    ]
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
    </>
  );
}

export default function AdvanceExcel() {
  return (
    <Fragment>
      <AdvanceExcelStructuredData />
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
        <HeroAdvanceExcel />

        {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <AdvanceExcelCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQAdvanceExcel />
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
