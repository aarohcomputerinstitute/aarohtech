import Accordion from "components/reuseable/accordion";

// CUSTOM DATA
const accordions = [
  {
    no: "One",
    expand: true,
    heading: "Professional Envirement",
    body: "Our classrooms and digital learning materials are designed with a professional approach — ensuring clarity, focus, and hands-on learning. Every course module is structured to help you gain confidence and apply your skills effectively."
  },
  {
    no: "Two",
    expand: false,
    heading: "Professional Guideance",
    body: "We provide complete student support throughout your learning journey. From technical doubts to project guidance, our trainers and support team are always available to help you succeed in MS Office, Full Stack Web Development, Coding, and Digital Marketing."
  },
  {
    no: "Three",
    expand: false,
    heading: "100% Practical Content",
    body: "Stay engaged with our interactive content, practical projects, and visual-based teaching tools. Our learning interface is flexible, easy to follow, and helps students quickly grasp real-world applications of their training."
  }
];

export default function AccordionList() {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <div key={item.no} className="accordion-item">
          <Accordion type="plain" key={item.no} {...item} className="text-primary" />
        </div>
      ))}
    </div>
  );
}
