import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQ1 } from "components/blocks/faq";
import { HeroWebDev, HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { Services20 } from "components/blocks/services";
import { TestimonialWebDev } from "components/blocks/testimonial";
import NextLink from "components/reuseable/links/NextLink";

// SEO Metadata
export const metadata: Metadata = {
  title: 'Full Stack Web Development Course in Jaipur | MERN Stack Training with Certification',
  description: 'Master Full Stack Web Development with our comprehensive MERN Stack course in Jaipur. Learn React, Node.js, MongoDB, Express.js with hands-on projects. Get certified and launch your web development career!',
  keywords: 'Full Stack Web Development Course, MERN Stack Training, React Course Jaipur, Node.js Training, Web Development Certification, Full Stack Developer Course, MongoDB Tutorial, Express.js Course, JavaScript Bootcamp, Web Development Institute Jaipur',
  authors: [{ name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'Full Stack Web Development Course in Jaipur | MERN Stack Training',
    description: 'Master the complete web development stack - React, Node.js, MongoDB, Express.js. Get certified and become a professional Full Stack Developer in Jaipur.',
    url: 'https://aarohcomputerclasses.in/courses/web-development',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/web-development-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Full Stack Web Development Course - MERN Stack Training in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Web Development Course in Jaipur | MERN Stack Training',
    description: 'Master React, Node.js, MongoDB & Express.js. Get certified as a Full Stack Developer. Hands-on training in Jaipur.',
    images: ['/img/courses/web-development-og.jpg'],
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
    canonical: 'https://aarohcomputerclasses.in/courses/web-development',
  },
};

// Schema.org Structured Data for SEO
function WebDevelopmentStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Full Stack Web Development Course - MERN Stack",
    "description": "Comprehensive Full Stack Web Development training covering React, Node.js, MongoDB, Express.js, HTML5, CSS3, JavaScript ES6+, RESTful APIs, and modern web development practices. Get certified and build real-world projects.",
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
        "jobTitle": "Senior Full Stack Web Development Trainer",
        "description": "Expert Web Development Professional with years of industry experience"
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
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful API Development",
      "Git & GitHub",
      "Responsive Web Design",
      "Full Stack Project Development"
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
    "description": "Leading computer training institute in Jaipur offering Full Stack Web Development, AI, Data Analytics, Digital Marketing and more.",
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
        "name": "Full Stack Web Development",
        "item": "https://aarohcomputerclasses.in/courses/web-development"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Full Stack Web Development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full Stack Web Development involves both front-end (client-side) and back-end (server-side) development. Our MERN stack course covers React for frontend, Node.js and Express.js for backend, and MongoDB for database management."
        }
      },
      {
        "@type": "Question",
        "name": "What will I learn in this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll learn HTML5, CSS3, JavaScript ES6+, React.js, Node.js, Express.js, MongoDB, RESTful APIs, Git, responsive design, and deploy real-world full stack applications."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior programming experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic computer knowledge is sufficient. Our course starts from fundamentals and gradually progresses to advanced topics with hands-on projects."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get a certificate after completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you'll receive an industry-recognized certification upon successful completion of the Full Stack Web Development course."
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

export default function WebDevelopment() {
  return (
    <Fragment>
      <WebDevelopmentStructuredData />
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
        <HeroWebDev />

        {/* ==========  course curriculum ========== */}
        <Services20 />
        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            {/* ========== company facts section ========== */}
            <Facts15 />
          </div>

          {/* ========== customer section ========== */}
          <TestimonialWebDev />
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            {/* ========== faq section ========== */}
            <FAQ1 />
          </div>
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            <div className="row">
              <div className="col-12 text-center mb-16">
                <h2 className="display-2 text-primary mb-0">Get Certified</h2>
              </div>
            </div>
            <HeroGetCertificate />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
