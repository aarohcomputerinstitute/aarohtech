import { notFound } from 'next/navigation';
import { blogList } from 'data/demo-11';
import Navbar from 'components/blocks/navbar/navbar-1';
import { Footer13 } from 'components/blocks/footer';
import RichTextContent from 'components/common/RichTextContent';
import { BlogPost } from 'types/blog';
import NextLink from 'components/reuseable/links/NextLink';

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Find the blog post with the matching slug
  const blog = blogList.find(blog =>
    blog.title.toLowerCase().replace(/\s+/g, '-') === slug
  ) as BlogPost;

  // Return 404 if blog post not found
  if (!blog) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <header className="wrapper bg-light">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <NextLink
              href="/contact"
              title="Contact"
              className="btn btn-sm btn-primary rounded-pill"
            />
          }
        />
      </header>

      {/* Main Content */}
      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single">
                  <div className="card">
                    <figure className="card-img-top">
                      <img src={blog.image} alt={blog.title} className="img-fluid" />
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line mb-3">
                          <a href="#" className="hover" rel="category">{blog.category}</a>
                        </div>
                        <h1 className="display-5 mb-3">{blog.title}</h1>
                        <ul className="post-meta mb-5">
                          <li className="post-date">
                            <i className="uil uil-calendar-alt"></i>
                            <span>{blog.date}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="post-content mt-5">
                        <RichTextContent content={blog.description} />
                      </div>

                      {/* Blog Content */}
                      {blog.content && (
                        <div className="mt-8">
                          <RichTextContent content={blog.content} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer13 />
    </>
  );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogList.map((blog) => ({
    slug: blog.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}
