"use client";

import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer13 } from "components/blocks/footer";
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";

export default function ThankYou() {
    return (
        <Fragment>
            <header className="wrapper bg-light">
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
                <section className="wrapper bg-light">
                    <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
                        <div className="row">
                            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                                <i className="uil uil-check-circle text-success display-1 mb-4"></i>
                                <h1 className="display-1 fs-56 mb-4">Thank You!</h1>
                                <p className="lead fs-24 mb-8">
                                    Your message has been sent successfully. One of our team members will be in touch with you shortly.
                                </p>

                                <div className="card shadow-lg mb-8">
                                    <div className="card-body">
                                        <h3 className="mb-4">Stay Connected & Get Support</h3>
                                        <div className="row gy-6 align-items-center">
                                            <div className="col-12">
                                                <p className="mb-2">Need immediate assistance? Call us now:</p>
                                                <a href="tel:+916350200620" className="btn btn-primary rounded-pill mb-2 text-white">
                                                    <i className="uil uil-phone-alt me-2"></i> +91 9828658887
                                                </a>
                                            </div>

                                            <div className="col-12">
                                                <p className="mb-2">Follow us for updates:</p>
                                                <SocialLinks className="nav social social-muted justify-content-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <NextLink
                                    href="/"
                                    title="Back to Home"
                                    className="btn btn-soft-primary rounded-pill mt-4"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer13 />
        </Fragment>
    );
}
