import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQdm } from "components/blocks/faq";
import { HeroDigitalMarketing, HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { DigitalMarketingCourseCurriculaum } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";

// SEO Metadata
export const metadata: Metadata = {
  title: 'Digital Marketing Course in Jaipur | SEO, Social Media & Google Ads Training with Certification',
  description: 'Master Digital Marketing with our comprehensive course in Jaipur. Learn SEO, SEM, Social Media Marketing, Google Ads, Content Marketing, and Analytics. Get certified and boost your career in digital marketing!',
  keywords: 'Digital Marketing Course, Digital Marketing Training Jaipur, SEO Course Jaipur, Social Media Marketing Course, Google Ads Certification, Content Marketing Training, Email Marketing Course, Digital Marketing Institute Jaipur, PPC Training, Facebook Ads Course, Instagram Marketing, Best Digital Marketing Course Jaipur',
  authors: [{ name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'Digital Marketing Course in Jaipur | SEO, Social Media & Google Ads Training',
    description: 'Master SEO, Social Media Marketing, Google Ads, Content Marketing, and Analytics. Get certified as a Digital Marketing Expert in Jaipur with hands-on training.',
    url: 'https://aarohcomputerclasses.in/courses/digital-marketing',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/digital-marketing-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Digital Marketing Course - SEO, Social Media & Google Ads Training in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Course in Jaipur | SEO & Social Media Training',
    description: 'Master SEO, Google Ads, Social Media Marketing & Analytics. Get certified as a Digital Marketing Expert. Hands-on training in Jaipur.',
    images: ['/img/courses/digital-marketing-og.jpg'],
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
    canonical: 'https://aarohcomputerclasses.in/courses/digital-marketing',
  },
};

// Schema.org Structured Data for SEO
function DigitalMarketingStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Digital Marketing Course - Complete SEO, Social Media & Google Ads Training",
    "description": "Comprehensive Digital Marketing training covering SEO (Search Engine Optimization), SEM (Search Engine Marketing), Social Media Marketing, Google Ads, Facebook Ads, Instagram Marketing, Content Marketing, Email Marketing, Analytics, and conversion optimization. Get certified and master digital marketing strategies with real-world projects.",
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
        "jobTitle": "Senior Digital Marketing Trainer",
        "description": "Expert Digital Marketing Professional with years of industry experience"
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
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Google Ads & PPC",
      "Social Media Marketing",
      "Facebook Ads",
      "Instagram Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google Analytics",
      "Conversion Rate Optimization",
      "Digital Marketing Strategy",
      "Social Media Analytics"
    ],
    "coursePrerequisites": "Basic computer and internet knowledge",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200"
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
        "name": "Digital Marketing",
        "item": "https://aarohcomputerclasses.in/courses/digital-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Digital Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital Marketing is the practice of promoting products, services, or brands through digital channels like search engines, social media, email, and websites. Our comprehensive course covers SEO, SEM, social media marketing, content marketing, email marketing, and analytics to help you master online marketing strategies."
        }
      },
      {
        "@type": "Question",
        "name": "What will I learn in this Digital Marketing course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll learn Search Engine Optimization (SEO), Google Ads & PPC, Social Media Marketing (Facebook, Instagram, LinkedIn), Content Marketing, Email Marketing, Google Analytics, conversion optimization, and complete digital marketing strategy development with hands-on projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior experience to join this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No prior experience required. Basic computer and internet knowledge is sufficient. Our course starts from fundamentals and progressively covers advanced digital marketing strategies with practical implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get a certificate after course completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you'll receive an industry-recognized Digital Marketing certification upon successful completion of the course, which will help boost your career prospects in the digital marketing field."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career opportunities after completing this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After completing our Digital Marketing course, you can pursue careers as Digital Marketing Manager, SEO Specialist, Social Media Manager, PPC Expert, Content Marketing Strategist, Email Marketing Specialist, or start your own digital marketing agency."
        }
      },
      {
        "@type": "Question",
        "name": "Is this course available online or offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both online and offline (classroom) training options for the Digital Marketing course at our Jaipur location. Choose the mode that best fits your schedule and learning preferences."
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

export default function DigitalMarketing() {
  return (
    <Fragment>
      <DigitalMarketingStructuredData />
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
        <HeroDigitalMarketing />

        {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <DigitalMarketingCourseCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQdm />
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
