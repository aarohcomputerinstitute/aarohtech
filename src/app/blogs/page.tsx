"use client";

import { Fragment, useEffect, useState } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer13 } from "components/blocks/footer";
import Link from "next/link";
import NextLink from "components/reuseable/links/NextLink";
import Image from "next/image";

export default function BlogList() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    fetch("/api/admin/blogs?status=published")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
          setFilteredBlogs(data);
        }
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  useEffect(() => {
    // Reset to page 1 when filter changes
    setCurrentPage(1);
    if (selectedCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const categories = [
    "All",
    "Computer Courses & Training",
    "Web Development",
    "Software Development",
    "Artificial Intelligence (AI) & AI Tools",
    "Digital Marketing",
    "Graphic Design",
    "IT Career Guidance",
    "Programming Languages",
    "Student Projects & Case Studies",
    "Certifications & Course Syllabus",
    "Tech News & Trends",
    "Institute Updates & Announcements"
  ];

  return (
    <Fragment>
      <header className="wrapper bg-soft-primary">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <NextLink
              href="/contact-us"
              title="Contact"
              className="btn btn-sm btn-primary rounded-pill"
            />
          }
        />
      </header>

      <main className="content-wrapper">
        {/* Modern Hero Section */}
        <section className="wrapper bg-soft-primary position-relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="position-absolute top-0 start-0 translate-middle w-50 h-50 rounded-circle bg-white opacity-20 blur-50" style={{ filter: 'blur(80px)' }}></div>

          <div className="container py-14 py-md-16 text-center position-relative">
            <div className="row">
              <div className="col-lg-10 col-xl-8 mx-auto">
                <h2 className="display-3 mb-4 text-dark fw-bold ls-tight">Insights, Trends & <span className="text-primary">Career Guidance</span></h2>
                <p className="lead fs-20 mb-8 px-md-10 text-muted">
                  Stay ahead in the tech world with expert articles on AI, Coding, and Professional Development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-10">

            {/* Elegant Category Filter */}
            <div className="mb-10">
              <div className="d-flex flex-wrap justify-content-center gap-2 " style={{ paddingBottom: '10px' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn btn-sm rounded-pill transition-300 ${selectedCategory === cat
                        ? 'btn-primary shadow-sm px-4'
                        : 'btn-white text-dark border-0 shadow-sm hover-lift px-4'
                      }`}
                    style={{ fontWeight: 600, fontSize: '0.85rem' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Grid */}
            <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 isotope">
              {loading ? (
                <div className="col-12 py-20 text-center">
                  <div className="spinner-border text-primary" role="status"></div>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="col-12 py-20 text-center text-muted">No articles found in this category.</div>
              ) : (
                displayedBlogs.map((blog: any) => (
                  <div className="col-md-6 col-lg-4 mb-8" key={blog.id}>
                    <article className="card shadow-md lift h-100 border-0 rounded-4 overflow-hidden">
                      <figure className="card-img-top overlay overlay-1 hover-scale-group position-relative" style={{ height: '220px' }}>
                        <Link href={`/blogs/${blog.slug}`}>
                          {blog.image ? (
                            <img src={blog.image} alt={blog.title} className="img-fluid w-100 h-100 object-fit-cover transition-500" />
                          ) : (
                            <div className="bg-gradient-primary w-100 h-100 d-flex align-items-center justify-content-center">
                              <i className="uil uil-file-alt display-4 text-white"></i>
                            </div>
                          )}
                          <span className="bg"></span>
                        </Link>

                        {/* Floating Category Badge */}
                        <div className="position-absolute top-0 start-0 m-3">
                          <span className="badge bg-white text-primary rounded-pill shadow-sm py-1 px-3 text-uppercase fs-12 fw-bold tracking-wide">
                            {blog.category.split(" ")[0]}
                          </span>
                        </div>
                      </figure>

                      <div className="card-body p-5 d-flex flex-column">
                        <div className="post-header mb-3">
                          <div className="d-flex align-items-center mb-2 text-muted fs-14">
                            <span><i className="uil uil-calendar-alt me-1"></i> {new Date(blog.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            <span className="mx-2">•</span>
                            <span>5 min read</span>
                          </div>
                          <h2 className="post-title h4 mt-1 mb-0 leading-tight">
                            <Link className="link-dark hover-primary transition-300" href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                          </h2>
                        </div>

                        <div className="post-content mb-4 flex-grow-1">
                          <p className="mb-0 text-muted line-clamp-3 fs-15 lh-sm">
                            {blog.excerpt || "Click to read more about this professional tech insight from Aaroh Expert team."}
                          </p>
                        </div>

                        <div className="card-footer border-0 p-0 bg-transparent mt-auto">
                          <Link href={`/blogs/${blog.slug}`} className="link-primary fw-bold fs-15 hover-arrow">
                            Read Full Article <i className="uil uil-arrow-right fs-16 align-middle ms-1"></i>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                ))
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-8 gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="btn btn-sm btn-soft-primary rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="uil uil-arrow-left"></i>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`btn btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center ${currentPage === page ? 'btn-primary' : 'btn-soft-primary'
                      }`}
                    style={{ width: '40px', height: '40px' }}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="btn btn-sm btn-soft-primary rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="uil uil-arrow-right"></i>
                </button>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer13 />
    </Fragment>
  );
}
