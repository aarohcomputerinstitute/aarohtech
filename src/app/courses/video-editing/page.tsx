import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQVideoEditing } from "components/blocks/faq";
import { HeroVideoEditingCourse, HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { VideoEditingCurriculaum } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";

// Expert SEO Metadata for Top Google Rankings  
export const metadata: Metadata = {
  title: 'Best Video Editing Course in Jaipur | Learn Premiere Pro & VFX with Ram Sir',
  description: 'Looking for a professional Video Editing Course in Jaipur? Learn video editing, color grading (DaVinci), and motion graphics (After Effects) from expert Ram Sir. 100% practical training with job assistance. Join Aaroh Computer Classes today!',
  keywords: [
    'Video Editing Course Jaipur',
    'Best Video Editing Institute in Jaipur',
    'Learn Video Editing with Ram Sir',
    'Premiere Pro Training Jaipur',
    'After Effects Classes in Jaipur',
    'Video Editing Certification',
    'YouTube Video Editing Course',
    'Video Editing Institute Jhotwara',
    'Professional Video Editing Course',
    'Video Editing Classes Near Me'
  ],
  authors: [{ name: 'Ram Sir' }, { name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'Best Video Editing Course in Jaipur | Learn Premiere Pro & VFX with Ram Sir',
    description: 'Looking for a professional Video Editing Course in Jaipur? Learn video editing, color grading (DaVinci), and motion graphics (After Effects) from expert Ram Sir. 100% practical training with job assistance.',
    url: 'https://aarohcomputerclasses.in/courses/video-editing',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/video-editing-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Video Editing Course - Learn Video Editing with Ram Sir in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Video Editing Course in Jaipur | Learn Premiere Pro & VFX with Ram Sir',
    description: 'Looking for a professional Video Editing Course in Jaipur? Learn video editing, color grading (DaVinci), and motion graphics (After Effects) from expert Ram Sir. 100% practical training with job assistance.',
    images: ['/img/courses/video-editing-og.jpg'],
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
    canonical: 'https://aarohcomputerclasses.in/courses/video-editing',
  },
};

// Advanced Schema.org Structured Data for Rich Search Results
function VideoEditingStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Professional Video Editing Course in Jaipur",
    "description": "A comprehensive practical video editing training program in Jaipur covering Adobe Premiere Pro, After Effects, DaVinci Resolve, and Audio Editing. Learn directly from industry expert Ram Sir through live projects, portfolio building, and cinematic storytelling techniques. Perfect for beginners, YouTubers, and aspiring film editors.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Aaroh Tech and AI Institute",
      "sameAs": "https://aarohcomputerclasses.in"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["Online", "Onsite"],
      "courseWorkload": "PT3M",
      "instructor": {
        "@type": "Person",
        "name": "Ram Sir",
        "description": "Top-rated Video Editing Mentor in Jaipur with over 10 years of experience in film post-production and digital content creation."
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
      "category": "Vocational Training",
      "priceCurrency": "INR",
      "price": "Contact for Pricing",
      "availability": "https://schema.org/InStock",
      "url": "https://aarohcomputerclasses.in/contact-us"
    },
    "educationalLevel": "Beginner to Professional",
    "teaches": [
      "Professional Video Editing (Premiere Pro)",
      "Motion Graphics & VFX (After Effects)",
      "Color Grading & Color Correction (DaVinci Resolve)",
      "Audio Mixing & Sound Design (Audition)",
      "YouTube Content Creation & viral edits",
      "Social Media Reels & Shorts Editing",
      "Green Screen (Chroma Key) Techniques",
      "Freelancing & Client Management for Editors"
    ],
    "occupationalCredentialAwarded": "Certified Professional Video Editor",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Aaroh Tech and AI Institute",
    "alternateName": "Aaroh Computer Classes",
    "url": "https://aarohcomputerclasses.in",
    "logo": "https://aarohcomputerclasses.in/logo.png",
    "description": "Leading technology training institute in Jaipur offering comprehensive courses in Video Editing, Coding, Data Analytics, and AI with expert instructors like Ram Sir.",
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
        "name": "Video Editing",
        "item": "https://aarohcomputerclasses.in/courses/video-editing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which software will I learn in this Video Editing course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will master industry-standard software including Adobe Premiere Pro for editing, Adobe After Effects for visual effects/motion graphics, and DaVinci Resolve for advanced color grading. We also cover audio editing tools like Adobe Audition."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a high-end PC to join this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide fully equipped computer labs. For home practice, a decent laptop with 8GB-16GB RAM and a basic dedicated GPU is recommended to run editing software smoothly."
        }
      },
      {
        "@type": "Question",
        "name": "Is this course suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this course is designed for absolute beginners. We start from the basics of formats and interface navigation before moving to advanced techniques. No prior experience is required."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career opportunities after this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can work as a Video Editor, Motion Graphics Artist, Colorist, YouTuber, or Freelancer. Opportunities exist in production houses, news channels, marketing agencies, and corporate teams."
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

export default function VideoEditingCourse() {
  return (
    <Fragment>
      <VideoEditingStructuredData />
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

      <main className="content-wrapper">
        <HeroVideoEditingCourse />

        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        <VideoEditingCurriculaum />

        <About22 />

        <section className="wrapper bg-light">
          <FAQVideoEditing />
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

      <Footer13 />
    </Fragment>
  );
}
