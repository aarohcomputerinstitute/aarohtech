import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { HeroDigitalMarketing, HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import {TallyCourseCurriculaum } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";
import FAQTally from "components/blocks/faq/FAQTally";
import HeroTallyPrime from "components/blocks/hero/HeroTallyPrime";

export const metadata: Metadata = {
  title: 'Tally Prime Course in Jaipur | Learn Tally with Certification',
  description: 'Join the best Tally Prime course in Jaipur. Learn from industry experts, get hands-on training, and earn a certification. Start your career in accounting today!',
  keywords: 'Tally Prime course, Tally in Jaipur, Tally certification, accounting software course, Tally training',
  openGraph: {
    title: 'Tally Prime Course in Jaipur | Learn Tally with Certification',
    description: 'Master Tally Prime with our comprehensive course. Get certified and boost your accounting career in Jaipur.',
    url: 'https://aarohcomputerclasses.in/courses/tally-prime',
    siteName: 'arroh tech and ai institute',
    images: [{
      url: '/img/courses/tally-prime-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Tally Prime Course in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tally Prime Course in Jaipur | Learn Tally with Certification',
    description: 'Master Tally Prime with our comprehensive course. Get certified and boost your accounting career in Jaipur.',
    images: ['/img/courses/tally-prime-og.jpg'],
  },
};

function TallyStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Tally Prime Professional Course",
    "description": "Comprehensive Tally Prime training with certification in Jaipur. Learn accounting, inventory, GST, and more.",
    "provider": {
      "@type": "Organization",
      "name": "Your Institute Name",
      "sameAs": "https://yourdomain.com"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "name": "Tally Prime Professional Course",
      "courseMode": ["Online", "Offline"],
      "location": {
        "@type": "Place",
        "name": "Your Institute Name",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302001",
          "addressCountry": "IN"
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
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
                      <HeroGetCertificate/>
          </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
