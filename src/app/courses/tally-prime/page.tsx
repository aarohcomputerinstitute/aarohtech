import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { HeroDigitalMarketing, HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { TallyCourseCurriculaum } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";
import FAQTally from "components/blocks/faq/FAQTally";
import HeroTallyPrime from "components/blocks/hero/HeroTallyPrime";

// Expert SEO Metadata for Top Google Rankings
export const metadata: Metadata = {
  title: 'Tally Prime Course in Jaipur | GST, Accounting & Inventory Training with Abhishek Bhardwaj | Tally Certification',
  description: 'Master Tally Prime with expert Abhishek Bhardwaj in Jaipur. Learn accounting, GST filing, inventory management, payroll & banking. Get certified and launch your accounting career with hands-on training!',
  keywords: 'Tally Prime Course, Tally Training Jaipur, GST in Tally, Accounting Software Course, Tally Certification, Learn Tally Prime, Tally for Accountants, GST Filing Training, Inventory Management Tally, Computerized Accounting, Tally ERP Course, Business Accounting Course, Payroll in Tally, Tally Course with Abhishek Bhardwaj, Best Tally Institute Jaipur, Financial Accounting Software, Tally for Business, Certified Tally Professional',
  authors: [{ name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'Tally Prime Course in Jaipur | GST, Accounting & Inventory with Abhishek Bhardwaj',
    description: 'Master Tally Prime with expert trainer Abhishek Bhardwaj. Learn GST, accounting, inventory, payroll & get certified. Comprehensive hands-on training in Jaipur.',
    url: 'https://aarohcomputerclasses.in/courses/tally-prime',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/tally-prime-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Tally Prime Course - GST, Accounting & Inventory Training with Abhishek Bhardwaj in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tally Prime Course | GST & Accounting with Abhishek Bhardwaj',
    description: 'Master Tally Prime, GST, accounting & inventory with expert Abhishek Bhardwaj. Get certified. Hands-on training in Jaipur.',
    images: ['/img/courses/tally-prime-og.jpg'],
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
    canonical: 'https://aarohcomputerclasses.in/courses/tally-prime',
  },
};

// Advanced Schema.org Structured Data for Rich Search Results
function TallyStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Tally Prime Professional Course - GST, Accounting & Inventory Management",
    "description": "Comprehensive Tally Prime training covering accounting fundamentals, GST filing and returns, inventory management, payroll processing, banking, voucher entries, and financial reporting. Learn from expert trainer Abhishek Bhardwaj with hands-on practice and real-world business scenarios. Get industry-recognized certification and become a professional accountant.",
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
        "name": "Abhishek Bhardwaj",
        "jobTitle": "Senior Tally & Accounting Trainer",
        "description": "Expert Tally Prime trainer with extensive experience in accounting, GST compliance, and business financial management. Specializes in making complex accounting concepts easy to understand for students pursuing careers in accounting and finance."
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
      "Tally Prime Fundamentals",
      "Accounting Principles & Voucher Entries",
      "GST Implementation in Tally",
      "GST Return Filing (GSTR-1, GSTR-3B)",
      "Inventory Management & Stock Control",
      "Purchase & Sales Management",
      "Payroll Processing & Salary Calculation",
      "Banking & Reconciliation",
      "Financial Statements & Reports",
      "TDS, TCS & Tax Calculations",
      "Bill-wise Details & Outstanding Management",
      "Company Data Management"
    ],
    "coursePrerequisites": "Basic computer knowledge. No prior accounting experience required.",
    "occupationalCredentialAwarded": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "Tally Prime Professional Certification"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "220",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasCourseSection": [
      {
        "@type": "CourseSection",
        "name": "Tally Fundamentals & Company Setup",
        "description": "Learn Tally Prime interface, company creation, ledger masters, groups, and basic voucher entries.",
        "teaches": [
          "Tally Prime Interface Navigation",
          "Company Creation & Configuration",
          "Creating Masters (Ledgers, Groups, Stock Items)",
          "Basic Voucher Entry (Payment, Receipt, Journal)"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "Accounting & Voucher Entries",
        "description": "Master complete accounting cycle including purchase, sales, contra, and journal entries with GST.",
        "teaches": [
          "Purchase & Sales Vouchers",
          "Credit & Debit Notes",
          "Contra Entries & Journal Vouchers",
          "Bill-wise Entry Management"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "GST in Tally Prime",
        "description": "Comprehensive GST training including setup, calculation, and filing returns in Tally Prime.",
        "teaches": [
          "GST Setup & Configuration",
          "GST Tax Calculation & Invoicing",
          "GSTR-1, GSTR-3B Return Filing",
          "Input Credit Management"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "Inventory & Stock Management",
        "description": "Learn complete inventory management including stock items, godowns, and stock reports.",
        "teaches": [
          "Stock Item Creation & Management",
          "Godown & Batch Management",
          "Stock Transfer & Adjustment",
          "Inventory Reports & Analysis"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "Banking & Payroll",
        "description": "Master banking features and payroll processing in Tally Prime.",
        "teaches": [
          "Bank Reconciliation",
          "Cheque Printing & Management",
          "Payroll Setup & Salary Processing",
          "Employee Masters & Attendance"
        ]
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
    "description": "Leading accounting and technology training institute in Jaipur offering Tally Prime, Data Analytics, Web Development, and Digital Marketing courses with expert instructors.",
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
        "name": "Tally Prime",
        "item": "https://aarohcomputerclasses.in/courses/tally-prime"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Tally Prime and why should I learn it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tally Prime is India's leading accounting software used by millions of businesses for managing accounts, inventory, GST compliance, and financial reporting. Learning Tally Prime opens excellent career opportunities in accounting, finance, taxation, and business management. It's essential for accountants, business owners, and finance professionals to efficiently manage business finances, comply with GST regulations, and generate accurate financial reports."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I learn Tally Prime with Abhishek Bhardwaj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Abhishek Bhardwaj is an expert Tally trainer with extensive experience in accounting, GST compliance, and business financial management. His teaching approach focuses on practical, real-world scenarios that prepare students for actual accounting jobs. He specializes in making complex accounting and GST concepts easy to understand, ensuring students gain both theoretical knowledge and hands-on skills needed in the industry."
        }
      },
      {
        "@type": "Question",
        "name": "What will I learn in this Tally Prime course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll master complete Tally Prime including accounting fundamentals, voucher entries (payment, receipt, journal, sales, purchase), GST setup and filing (GSTR-1, GSTR-3B), inventory and stock management, payroll processing, banking and reconciliation, TDS/TCS calculations, financial statements, balance sheet, profit & loss reports, and complete business accounting cycle with hands-on practice."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need accounting knowledge to join this Tally course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No prior accounting knowledge is required. Our course starts from accounting basics and progressively covers Tally Prime. Abhishek Bhardwaj teaches fundamental accounting principles alongside Tally software operations, making it perfect for complete beginners. Basic computer knowledge is sufficient to start learning Tally Prime."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get a Tally Prime certification after the course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, upon successful completion of the Tally Prime course, you'll receive an industry-recognized certification from Aaroh Tech and AI Institute. This certificate validates your proficiency in Tally Prime, accounting, GST, and inventory management, significantly enhancing your employability in accounting and finance positions."
        }
      },
      {
        "@type": "Question",
        "name": "What career opportunities are available after learning Tally Prime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After completing Tally Prime course, you can pursue careers as Accountant, Tally Operator, Accounts Executive, GST Practitioner, Finance Assistant, Inventory Manager, Accounts Manager, Tax Consultant, or start your own accounting services business. Tally professionals are in high demand across all industries with excellent salary packages ranging from entry-level to senior positions."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Tally Prime course available online and in classroom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both online and classroom training for Tally Prime. You can attend live interactive online sessions from anywhere or join our physical classes at our Jhotwara, Jaipur campus (Kalwar Road, Govindpura). Both modes feature the same expert instruction from Abhishek Bhardwaj, hands-on Tally practice, and comprehensive curriculum."
        }
      }
    ]
  };

  const educationalProgramSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Tally Prime Professional Accounting Training Program",
    "description": "Complete Tally Prime and accounting training program preparing students for careers in accounting, finance, and GST compliance",
    "occupationalCategory": {
      "@type": "CategoryCode",
      "inCodeSet": {
        "@type": "CategoryCodeSet",
        "name": "O*NET-SOC",
        "url": "https://www.onetonline.org/"
      },
      "codeValue": "43-3031.00",
      "name": "Bookkeeping, Accounting, and Auditing Clerks"
    },
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Aaroh Tech and AI Institute"
    },
    "timeToComplete": "PT2M",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalProgramSchema) }}
      />
    </>
  );
}

export default function TallyPrime() {
  return (
    <Fragment>
      <TallyStructuredData />
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
        <HeroTallyPrime />

        {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <TallyCourseCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQTally />
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
