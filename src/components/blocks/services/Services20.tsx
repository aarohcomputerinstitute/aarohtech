"use client";

import { useState } from "react";
// CUSTOM DATA
import { serviceList10 } from "data/service";

// ICONS
import { FiCode, FiServer, FiDatabase, FiGitBranch, FiMonitor, FiSmartphone, FiGlobe, FiAward } from 'react-icons/fi';

export default function Services20() {
  // Track active tab for hover effect
  const [activeTab, setActiveTab] = useState(0);

  const curriculumSections = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <FiMonitor className="text-primary" size={24} />,
      description: 'Master the art of creating beautiful, responsive user interfaces',
      modules: [
        'HTML5 & CSS3 Fundamentals',
        'JavaScript ES6+ & Modern JS',
        'React.js & Next.js',
        'State Management (Redux/Context)',
        'Responsive & Mobile-First Design',
        'UI/UX Principles'
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: <FiServer className="text-primary" size={24} />,
      description: 'Build robust and scalable server-side applications',
      modules: [
        'Node.js & Express.js',
        'RESTful API Development',
        'Authentication & Authorization',
        'Web Sockets & Real-time Communication',
        'API Security Best Practices',
        'Performance Optimization'
      ]
    },
    {
      id: 3,
      title: 'Database & Deployment',
      icon: <FiDatabase className="text-primary" size={24} />,
      description: 'Manage data effectively and deploy applications with confidence',
      modules: [
        'MongoDB & Mongoose',
        'SQL & NoSQL Concepts',
        'Data Modeling',
        'Cloud Deployment (AWS/Vercel)',
        'CI/CD Pipelines',
        'Docker & Containerization'
      ]
    }
  ];

  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto text-center">
            <span className="text-uppercase text-primary fw-bold mb-3 d-block">Course Curriculum</span>
            <h2 className="display-4 mb-10 px-lg-12">Master Full Stack Development with Our Comprehensive MERN Stack Program</h2>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10">
          {curriculumSections.map((section, index) => (
            <div className="col-md-6 col-lg-4" key={section.id}>
              <div 
                className={`card shadow-lg h-100 ${activeTab === index ? 'border-primary' : ''}`}
                style={{
                  borderLeft: activeTab === index ? '4px solid #2F5BEA' : '4px solid transparent',
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setActiveTab(index)}
              >
                <div className="card-body p-6">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-svg-md text-primary rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '60px', height: '60px', backgroundColor: 'rgba(47, 91, 234, 0.1)' }}>
                      {section.icon}
                    </div>
                    <h3 className="h4 ms-4 mb-0">{section.title}</h3>
                  </div>
                  <p className="mb-4">{section.description}</p>
                  
                  <div className="mt-4">
                    <ul className="list-unstyled">
                      {section.modules.map((module, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center">
                          <div className="icon-svg-xs text-primary me-2">
                            <FiAward className="text-primary" />
                          </div>
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-10">
          <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto text-center">
            <div className="card bg-soft-primary p-6 p-md-8 rounded-4">
              <h3 className="h2 mb-3">What You'll Build</h3>
              <p className="lead mb-5">Real-world projects to showcase in your portfolio</p>
              
              <div className="row gx-3 gy-6">
                {[
                  { icon: <FiCode size={32} className="text-primary" />, text: 'E-commerce Platform' },
                  { icon: <FiGlobe size={32} className="text-primary" />, text: 'Social Media App' },
                  { icon: <FiSmartphone size={32} className="text-primary" />, text: 'Mobile-Responsive Sites' },
                  { icon: <FiGitBranch size={32} className="text-primary" />, text: 'RESTful APIs' }
                ].map((item, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <div className="d-flex flex-column align-items-center">
                      <div className="mb-3">{item.icon}</div>
                      <p className="mb-0 fw-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
