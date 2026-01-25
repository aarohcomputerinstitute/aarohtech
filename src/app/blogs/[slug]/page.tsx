import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer13 } from "components/blocks/footer";
import path from "path";
import NextLink from "components/reuseable/links/NextLink";
import { promises as fs } from "fs";
import Link from "next/link";

// Server Component for fetching data
async function getBlog(slug: string) {
  const BLOG_FILE = path.join(process.cwd(), 'src/data/blogs.json');
  try {
    const data = await fs.readFile(BLOG_FILE, 'utf8');
    const blogs = JSON.parse(data);
    return blogs.find((b: any) => b.slug === slug);
  } catch {
    return null;
  }
}

export default async function BlogDetails(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = await getBlog(params.slug);

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

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
        <section className="wrapper bg-light pb-14">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-14 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <span className="text-primary text-uppercase fs-13 fw-bold tracking-wide mb-2 d-block">{blog.category}</span>
                  </div>
                  <h1 className="display-6 display-md-4 mb-4 fw-bold">{blog.title}</h1>
                  <ul className="post-meta mb-5 d-flex justify-content-center align-items-center gap-4 text-muted fs-15">
                    <li className="post-date"><i className="uil uil-calendar-alt me-1"></i><span>{new Date(blog.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span></li>
                    <li className="post-author"><i className="uil uil-user me-1"></i><span>Aaroh Expert</span></li>
                    <li className="post-read"><i className="uil uil-clock me-1"></i><span>5 min read</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                {blog.image && (
                  <div className="position-relative mb-12 rounded-4 overflow-hidden shadow-lg">
                    <img src={blog.image} alt={blog.title} className="img-fluid w-100" style={{ maxHeight: '550px', objectFit: 'cover' }} />
                  </div>
                )}

                <div className="row">
                  <div className="col-lg-10 col-xl-9 mx-auto">
                    <article className="blog-content-classic">
                      <div className="blog-content-html lead fs-16 fs-md-18 text-dark lh-lg" dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </article>

                    {/* Share / Tags Section */}
                    <div className="mt-10 pt-6 border-top d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-dark">Share:</span>
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter"></i></a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=aaroh.ai`} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-facebook"><i className="uil uil-facebook-f"></i></a>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=aaroh.ai&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-linkedin"><i className="uil uil-linkedin"></i></a>
                      </div>
                      <div>
                        <Link href="/blogs" className="btn btn-soft-primary rounded-pill btn-sm">
                          <i className="uil uil-arrow-left me-1"></i> Back to Blog
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer13 />
    </Fragment>
  );
}
