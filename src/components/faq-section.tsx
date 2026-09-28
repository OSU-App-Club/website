import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What exactly does the club do?",
    answer:
      "The App Development Club provides resources, funding, and mentorship to students interested in App Development. We host workshops, hackathons, and networking events throughout the year to help our members learn and grow their skillset.",
  },
  {
    id: "item-5",
    question: "Do I need to have experience to join?",
    answer:
      "No, you do not need to have any experience in App Development to join the club. We welcome students of all skill levels, from beginners learning to code to seasoned experts in App Development. Our club is a great place to find out what App Development is all about.",
  },
  {
    id: "item-2",
    question: "When are the club meetings?",
    answer:
      "We meet once a week on Wednesdays at 6:00 PM. The location of the meeting is both on Zoom, and in person at OSU's very own Bexell Hall Room 207.",
  },
  {
    id: "item-3",
    question: "How do I join the App Development Club?",
    answer:
      "All you need to do is come to our meetings! We welcome all students to join us at our meetings, and we encourage you to bring a friend. To help us get more funding, we ask that you sign up for our club on IdealLogic, and join our Discord server. We're the most active on Discord, and it's the best way to stay up to date with our events.",
  },
  {
    id: "item-4",
    question: "When was the club founded?",
    answer:
      "The club was founded in 2015 by a small group (8) of students who wanted to form a community for students interested in mobile software development. Since then, the club has grown to over 500+ members, and has expanded to include web development, and other software development technologies.",
  },
];

export default function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((faqItem) => (
        <AccordionItem key={faqItem.id} value={faqItem.id}>
          <AccordionTrigger>{faqItem.question}</AccordionTrigger>
          <AccordionContent>{faqItem.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
