import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer13 } from "components/blocks/footer";
import NextLink from "components/reuseable/links/NextLink";
import { supabase } from "lib/db";
import Link from "next/link";
import { Metadata } from "next";

// Define the Blog type locally or import it if you have a models file
interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  image: string;
  excerpt: string;
  meta_title: string;
  meta_description: string;
  keywords: string;
  author: string;
  created_at: string;
}

// Generate Dynamic Metadata for SEO
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { data: blog } = await supabase
    .from('blogs')
    .select('title, meta_title, meta_description, keywords, image, excerpt')
    .eq('slug', params.slug)
    .single();

  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt || "",
    keywords: blog.keywords || "",
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt || "",
      images: blog.image ? [blog.image] : [],
      type: 'article',
    }
  };
}

async function getBlog(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return null;
  return data;
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
                    <li className="post-author"><i className="uil uil-user me-1"></i><span>{blog.author || "Aaroh Expert"}</span></li>
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
                      {/* CSS logic for styling HTML content from Rich Editor */}
                      <style dangerouslySetInnerHTML={{ __html: `
                        .blog-content-html h1, .blog-content-html h2, .blog-content-html h3 { margin-top: 2rem; margin-bottom: 1rem; color: #343f52; font-weight: 700; }
                        .blog-content-html p { margin-bottom: 1.5rem; line-height: 1.8; }
                        .blog-content-html ul, .blog-content-html ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
                        .blog-content-html li { margin-bottom: 0.5rem; }
                        .blog-content-html img { border-radius: 12px; margin: 2rem 0; max-width: 100%; height: auto; }
                        .blog-content-html blockquote { border-left: 4px solid #3f78e0; padding: 1.5rem; background: #f0f7ff; font-style: italic; border-radius: 0 12px 12px 0; margin: 2rem 0; }
                        .blog-content-html pre { background: #1e293b; color: #f8fafc; padding: 1.5rem; border-radius: 12px; margin: 2rem 0; overflow-x: auto; font-family: 'Consolas', 'Monaco', monospace; }
                      `}} />
                      <div className="blog-content-html lead fs-16 fs-md-18 text-dark" dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </article>

                    {/* Share / Tags Section */}
                    <div className="mt-10 pt-6 border-top d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-dark">Share:</span>
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter"></i></a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=aarhtech.com/blogs/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-facebook"><i className="uil uil-facebook-f"></i></a>
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
