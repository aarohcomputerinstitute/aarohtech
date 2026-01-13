import { accordionListVideoEditing } from "data/faq";
import Accordion from "components/reuseable/accordion";

export default function FAQVideoEditing() {
    return (
        <div className="container py-8 py-md-10">
            <div className="row text-center">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h2 className="fs-20 text-uppercase b-3 text-primary">FAQ</h2>
                    <h3 className="display-4 mb-2 px-xl-10">Video Editing Course - Frequent Questions</h3>
                    <p className="mb-10 w-lg-75 mx-auto">
                        Find answers to common questions about our Video Editing training, software tools, career opportunities, and certification.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="accordion-wrapper" id="accordion">
                        {accordionListVideoEditing.map((item) => (
                            <Accordion key={item.no} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
