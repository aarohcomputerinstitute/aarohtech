import { Fragment } from "react";
import { Metadata } from "next";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQCodingLanguage } from "components/blocks/faq";
import { HeroCodingCourses, HeroGetCertificate } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { CodingLanguageCurriculaum } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";

// Expert SEO Metadata for Top Google Rankings
export const metadata: Metadata = {
  title: 'Programming Languages Course in Jaipur | Learn Python, Java, C++, JavaScript with Ram Sir | Coding Classes',
  description: 'Master multiple programming languages with expert Ram Sir in Jaipur. Learn Python, Java, C++, JavaScript, C# from beginner to advanced. Get certified and become a professional software developer with hands-on coding projects!',
  keywords: 'Programming Languages Course, Learn to Code, Python Programming Course Jaipur, Java Training, C++ Programming, JavaScript Course, C# .NET, Coding Classes Jaipur, Software Development Course, Programming Certification, Learn Python with Ram Sir, Core Java Training, Object-Oriented Programming, Frontend JavaScript, Coding Bootcamp Jaipur, Programming Institute Jaipur, Learn Coding from Scratch, Software Developer Training, Computer Programming Course',
  authors: [{ name: 'Aaroh Tech and AI Institute' }],
  openGraph: {
    title: 'Programming Languages Course in Jaipur | Learn Python, Java, C++, JavaScript with Ram Sir',
    description: 'Master Python, Java, C++, JavaScript & C# with expert instructor Ram Sir. Get certified as a professional programmer with comprehensive hands-on training in Jaipur.',
    url: 'https://aarohcomputerclasses.in/courses/coding-language',
    siteName: 'Aaroh Tech and AI Institute',
    images: [{
      url: '/img/courses/programming-languages-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Programming Languages Course - Learn Python, Java, C++, JavaScript with Ram Sir in Jaipur'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programming Languages Course | Learn Python, Java, C++ with Ram Sir',
    description: 'Master Python, Java, C++, JavaScript & C# with expert Ram Sir. Get certified as a programmer. Comprehensive coding training in Jaipur.',
    images: ['/img/courses/programming-languages-og.jpg'],
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
    canonical: 'https://aarohcomputerclasses.in/courses/coding-language',
  },
};

// Advanced Schema.org Structured Data for Rich Search Results
function ProgrammingLanguagesStructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Complete Programming Languages Course - Python, Java, C++, JavaScript & C#",
    "description": "Comprehensive programming course covering multiple languages including Python programming, Core Java, C++ object-oriented programming, JavaScript for web development, and C# .NET development. Learn from expert instructor Ram Sir with hands-on projects, real-world applications, and industry-recognized certification. Perfect for beginners and advanced learners.",
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
      "courseWorkload": "PT6M",
      "instructor": {
        "@type": "Person",
        "name": "Ram Sir",
        "jobTitle": "Senior Programming Instructor & Software Development Expert",
        "description": "Expert programming instructor with 10+ years of experience teaching Python, Java, C++, JavaScript, and C#. Specialized in making complex programming concepts easy to understand for beginners and advanced students."
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
      "Python Programming (Basics to Advanced)",
      "Core Java Programming",
      "C++ Object-Oriented Programming",
      "JavaScript for Web Development",
      "C# and .NET Framework",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Problem Solving & Logic Building",
      "Software Development Best Practices",
      "Real-World Project Development"
    ],
    "coursePrerequisites": "Basic computer knowledge. No prior programming experience required.",
    "occupationalCredentialAwarded": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificate",
      "name": "Programming Languages Certification"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasCourseSection": [
      {
        "@type": "CourseSection",
        "name": "Python Programming",
        "description": "Learn Python from basics to advanced including variables, data types, control structures, functions, OOP, file handling, and popular libraries. Build real Python projects.",
        "teaches": [
          "Python Syntax and Fundamentals",
          "Python Data Structures (Lists, Tuples, Dictionaries)",
          "Object-Oriented Programming in Python",
          "Python Libraries and Modules",
          "File Handling and Exception Handling"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "Java Programming",
        "description": "Master Core Java including syntax, OOP concepts, inheritance, polymorphism, interfaces, exception handling, collections framework, and multithreading.",
        "teaches": [
          "Java Fundamentals and Syntax",
          "Object-Oriented Programming Concepts",
          "Java Collections Framework",
          "Exception Handling in Java",
          "Multithreading and Concurrency"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "C++ Programming",
        "description": "Complete C++ course covering basic syntax, pointers, memory management, object-oriented programming, STL, templates, and advanced C++ features.",
        "teaches": [
          "C++ Syntax and Fundamentals",
          "Pointers and Memory Management",
          "Object-Oriented Programming in C++",
          "Standard Template Library (STL)",
          "Templates and Advanced C++"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "JavaScript Programming",
        "description": "Learn JavaScript for web development including ES6+ features, DOM manipulation, asynchronous programming, and modern JavaScript frameworks.",
        "teaches": [
          "JavaScript Fundamentals and ES6+",
          "DOM Manipulation and Events",
          "Asynchronous JavaScript (Promises, Async/Await)",
          "JavaScript for Frontend Development",
          "Modern JavaScript Best Practices"
        ]
      },
      {
        "@type": "CourseSection",
        "name": "C# Programming",
        "description": "Comprehensive C# and .NET development course covering language fundamentals, OOP, LINQ, ASP.NET basics, and Windows application development.",
        "teaches": [
          "C# Language Fundamentals",
          "Object-Oriented Programming in C#",
          "LINQ and Collections",
          ".NET Framework Basics",
          "Application Development with C#"
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
    "description": "Leading programming and technology training institute in Jaipur offering comprehensive courses in Python, Java, C++, JavaScript, C#, Data Analytics, Web Development, and AI with expert instructors like Ram Sir.",
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
        "name": "Programming Languages",
        "item": "https://aarohcomputerclasses.in/courses/coding-language"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which programming languages are covered in this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our comprehensive programming course covers 5 major languages: Python (for data science, automation, web development), Java (for enterprise applications, Android development), C++ (for system programming, game development), JavaScript (for web development, frontend), and C# (for Windows applications, .NET development). You'll learn each language from fundamentals to advanced concepts with hands-on projects."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I learn programming with Ram Sir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ram Sir is an expert programming instructor with 10+ years of teaching experience. He specializes in making complex programming concepts easy to understand through practical examples and real-world projects. His teaching methodology focuses on building strong fundamentals, problem-solving skills, and industry-ready coding practices. Students consistently rate his classes highly for clarity and engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Which programming language should beginners start with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend beginners start with Python due to its simple, readable syntax and versatility. Python is excellent for learning programming fundamentals and is widely used in data science, web development, automation, and AI. After mastering Python basics, you can easily transition to other languages like Java, C++, JavaScript, or C# covered in our course."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior coding experience to join this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No prior programming experience is required. Our course starts from absolute basics with fundamental programming concepts. Ram Sir teaches each language from scratch, ensuring beginners can follow along easily. Basic computer knowledge is sufficient to start your programming journey with us."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of projects will I build in this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll build real-world projects in each programming language including: Python projects (automation scripts, data analysis tools), Java applications (object-oriented programs, console applications), C++ programs (algorithms, data structures implementations), JavaScript projects (interactive web applications), and C# applications (Windows desktop apps). Each project reinforces concepts learned in class."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive a certification after course completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, upon successful completion of the Programming Languages course, you'll receive an industry-recognized certification from Aaroh Tech and AI Institute. The certificate validates your proficiency in Python, Java, C++, JavaScript, and C#, enhancing your resume and demonstrating your multi-language programming skills to employers."
        }
      },
      {
        "@type": "Question",
        "name": "What career opportunities are available after learning these programming languages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After mastering these programming languages, you can pursue careers as Software Developer, Python Developer, Java Developer, Full Stack Developer, Frontend Developer (JavaScript), C++ Programmer, C# .NET Developer, Game Developer, Mobile App Developer, or Software Engineer. These languages open doors to opportunities in IT companies, startups, product companies, and freelancing with excellent salary packages."
        }
      },
      {
        "@type": "Question",
        "name": "Is this course available online and in classroom in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both online and classroom training for the Programming Languages course. You can attend live interactive sessions online from anywhere or join our physical classes at our Jhotwara, Jaipur campus (Kalwar Road, Govindpura). Both modes feature the same expert instruction from Ram Sir, hands-on coding practice, and comprehensive curriculum."
        }
      }
    ]
  };

  const educationalProgramSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Professional Programming Languages Training Program",
    "description": "Complete programming training covering Python, Java, C++, JavaScript, and C# to prepare students for software development careers",
    "occupationalCategory": {
      "@type": "CategoryCode",
      "inCodeSet": {
        "@type": "CategoryCodeSet",
        "name": "O*NET-SOC",
        "url": "https://www.onetonline.org/"
      },
      "codeValue": "15-1252.00",
      "name": "Software Developers"
    },
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Aaroh Tech and AI Institute"
    },
    "timeToComplete": "PT6M",
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

export default function CodingCourse() {
  return (
    <Fragment>
      <ProgrammingLanguagesStructuredData />
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
        <HeroCodingCourses />

        {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
          <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <CodingLanguageCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQCodingLanguage />
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
