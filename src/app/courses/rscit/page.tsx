import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQRscit } from "components/blocks/faq";
import { HeroGetCertificate, HeroRscit } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { RscitCourseCurriculaum } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";

// Expert SEO Metadata for RSCIT Course
export const metadata: Metadata = {
  title: 'RSCIT Course in Jaipur | Rajasthan State Certificate in Information Technology | Computer Basics Training',
  description: 'Master computer fundamentals with RSCIT course in Jaipur. Learn MS Office (Word, Excel, PowerPoint), Internet, Email, Digital Payments & E-Governance. Get government-recognized RSCIT certification!',
  keywords: 'RSCIT Course, RSCIT Jaipur, Rajasthan State Certificate in Information Technology, Computer Course Jaipur, Basic Computer Course, MS Office Training, MS Word Course, MS Excel Course, MS PowerPoint, Internet Training, Email Course, Digital Payments Course, Computer Fundamentals, RSCIT Certification Jaipur, Government Computer Course',
  authors: [{ name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'RSCIT Course in Jaipur | Computer Basics & MS Office Training',
    description: 'Master computer fundamentals, MS Office, Internet, and Digital Payments with government-recognized RSCIT certification in Jaipur.',
    url: 'https://aarohcomputerclasses.in/courses/rscit',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/rscit-og.jpg',
      width: 1200,
      height: 630,
      alt: 'RSCIT Course - Computer Fundamentals & MS Office Training in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RSCIT Course in Jaipur | Computer Basics Training',
    description: 'Learn computer fundamentals, MS Office & digital skills. Get RSCIT certified. Government-recognized course in Jaipur.',
    images: ['/img/courses/rscit-og.jpg'],
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
    canonical: 'https://aarohcomputerclasses.in/courses/rscit',
  },
};

// Schema.org Structured Data for SEO
function RscitStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "RSCIT - Rajasthan State Certificate in Information Technology",
    "description": "Government-recognized computer literacy course covering computer fundamentals, MS Windows, MS Office (Word, Excel, PowerPoint), Internet, Email, Computer Security, and Digital Payments. Perfect for beginners to gain essential computer skills and RSCIT certification.",
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
      "category": "Basic Computer Literacy",
      "availability": "https://schema.org/InStock"
    },
    "educationalLevel": "Beginner",
    "teaches": [
      "Computer Fundamentals & Hardware Basics",
      "Microsoft Windows Operating System",
      "MS Word - Word Processing",
      "MS Excel - Spreadsheet",
      "MS PowerPoint - Presentations",
      "Internet Browsing & Email",
      "Computer Security & Cyber Safety",
      "Digital Payments & E-Governance"
    ],
    "coursePrerequisites": "No prerequisites - suitable for complete beginners",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
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
    "description": "Leading computer training institute in Jaipur offering RSCIT, Tally, Data Analytics, Web Development, and Digital Marketing courses.",
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
        "name": "RSCIT",
        "item": "https://aarohcomputerclasses.in/courses/rscit"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is RSCIT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RSCIT (Rajasthan State Certificate in Information Technology) is a government-recognized basic computer literacy program designed to provide essential computer skills. The course covers computer fundamentals, MS Office (Word, Excel, PowerPoint), Internet, Email, and Digital Payments."
        }
      },
      {
        "@type": "Question",
        "name": "Is RSCIT certificate recognized by the government?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RSCIT is a government-recognized certificate issued by the Rajasthan Knowledge Corporation Limited (RKCL). It's widely accepted for government jobs and educational purposes in Rajasthan."
        }
      },
      {
        "@type": "Question",
        "name": "What will I learn in RSCIT course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll learn Computer Fundamentals, MS Windows, MS Word, MS Excel, MS PowerPoint, Internet browsing, Email operations, Computer Security basics, and Digital Payments including UPI and e-governance services."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior computer knowledge for RSCIT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No prior computer knowledge is required. RSCIT is designed for complete beginners and starts from absolute basics, making it perfect for anyone who wants to learn computers from scratch."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the RSCIT course duration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The RSCIT course typically runs for 3 months with regular classes. We offer both online and classroom training options at our Jaipur center to suit your schedule."
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

export default function RscitCourse() {
  return (
    <Fragment>
      <RscitStructuredData />
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
        <HeroRscit />

        {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <RscitCourseCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQRscit />
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
