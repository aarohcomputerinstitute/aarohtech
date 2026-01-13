import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQAiautomation } from "components/blocks/faq";
import { HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import NextLink from "components/reuseable/links/NextLink";
import HeroAIatuomation from "components/blocks/hero/HeroAIatuomation";
import { AiautomationCourseCurriculaum } from "components/blocks/services";
import type { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'AI Automation Course | Learn ChatGPT, Midjourney & Prompt Engineering - Aaroh Computer Classes',
  description: 'Master AI tools like ChatGPT, Midjourney, DALL-E and workflow automation. Professional prompt engineering training with hands-on projects. Get certified in AI automation by Ram Sir and Abhishek Bhardwaj Sir.',
  keywords: [
    'AI automation course',
    'ChatGPT training',
    'prompt engineering course',
    'Midjourney course',
    'DALL-E training',
    'AI tools training',
    'workflow automation',
    'AI content creation',
    'Zapier automation',
    'AI productivity tools',
    'learn AI automation',
    'AI automation certification',
    'Ram Sir AI course',
    'Abhishek Bhardwaj AI training'
  ],
  authors: [
    { name: 'Ram Sir' },
    { name: 'Abhishek Bhardwaj' }
  ],
  creator: 'Aaroh Computer Classes',
  publisher: 'Aaroh Computer Classes',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aarohcomputerclasses.in/courses/ai-automation',
    title: 'AI Automation Course | Learn ChatGPT, Midjourney & Prompt Engineering',
    description: 'Master AI tools like ChatGPT, Midjourney, DALL-E and workflow automation. Professional prompt engineering training with hands-on projects taught by Ram Sir and Abhishek Bhardwaj Sir.',
    siteName: 'Aaroh Computer Classes',
    images: [
      {
        url: '/img/courses/ai-automation-course.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation Course - ChatGPT, Midjourney, DALL-E Training'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Course | Learn ChatGPT & Prompt Engineering',
    description: 'Master AI tools like ChatGPT, Midjourney, DALL-E and workflow automation. Get certified in AI automation.',
    images: ['/img/courses/ai-automation-course.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://aarohcomputerclasses.in/courses/ai-automation'
  },
  category: 'Education'
};

export default function AiAutomation() {
  // Structured Data for SEO (JSON-LD)
  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI Automation Course",
    "description": "Master AI tools like ChatGPT, Midjourney, DALL-E and workflow automation. Professional prompt engineering training with hands-on projects.",
    "provider": {
      "@type": "Organization",
      "name": "Aaroh Computer Classes",
      "sameAs": "https://aarohcomputerclasses.in"
    },
    "instructor": [
      {
        "@type": "Person",
        "name": "Ram Sir"
      },
      {
        "@type": "Person",
        "name": "Abhishek Bhardwaj"
      }
    ],
    "courseCode": "AI-AUTO-2024",
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "ChatGPT and AI text generation",
      "Midjourney and DALL-E for image creation",
      "Prompt engineering techniques",
      "Workflow automation with Zapier",
      "AI content creation strategies",
      "Building custom AI agents",
      "Video and audio AI tools",
      "AI ethics and professional usage"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Blended",
      "courseWorkload": "PT40H"
    },
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "availability": "https://schema.org/InStock"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Aaroh Computer Classes",
    "url": "https://aarohcomputerclasses.in",
    "logo": "https://aarohcomputerclasses.in/img/logo.png",
    "description": "Professional computer training institute offering courses in AI automation, web development, data analytics, and digital marketing.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  const breadcrumbStructuredData = {
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
        "name": "AI Automation",
        "item": "https://aarohcomputerclasses.in/courses/ai-automation"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What will I learn in this AI Automation course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will master AI tools like ChatGPT, Midjourney, DALL-E, prompt engineering techniques, workflow automation with Zapier, content creation, video/audio AI tools, and building custom AI agents for professional use."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need coding experience to learn AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No coding experience required! This course is designed for everyone—students, professionals, entrepreneurs, and career switchers. We focus on using AI tools and prompt engineering, not programming."
        }
      },
      {
        "@type": "Question",
        "name": "Which AI tools will I learn to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll learn ChatGPT, Jasper, Copy.ai for text; Midjourney, DALL-E, Stable Diffusion for images; ElevenLabs for voice; Runway and Synthesia for video; plus automation tools like Zapier and custom GPT creation."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive a certificate after completing the AI Automation course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you will receive a recognized AI Automation Certification from Aaroh Computer Classes after successful completion, valuable for your resume and career advancement."
        }
      },
      {
        "@type": "Question",
        "name": "What career opportunities are available after learning AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can work as an AI Automation Specialist, Prompt Engineer, AI Content Creator, Workflow Automation Consultant, or use AI to boost productivity in marketing, business analysis, content creation, and entrepreneurship."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the AI Automation course take to complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AI Automation course duration is typically 6-8 weeks with flexible batch timings. You'll get hands-on practice with real AI tools and complete practical projects to build your portfolio."
        }
      },
      {
        "@type": "Question",
        "name": "Who will teach this AI Automation course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This course is taught by experienced instructors Ram Sir and Abhishek Bhardwaj Sir, who have extensive expertise in AI tools, digital marketing, and automation technologies. They provide personalized guidance and industry insights."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get practical hands-on training with AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! The course includes extensive practical training where you'll work directly with ChatGPT, Midjourney, DALL-E, and other AI platforms. You'll create real content, automate workflows, and build AI-powered projects under expert guidance."
        }
      }
    ]
  };



  return (
    <Fragment>
      {/* SEO Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

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
        <HeroAIatuomation />

        {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <AiautomationCourseCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQAiautomation />
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
