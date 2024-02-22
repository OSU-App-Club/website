import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What does the club do?",
    answer:
      "Our club organizes various events and activities for its members, including workshops, social gatherings, and practical projects to learn and practice App Development.",
  },
  {
    id: "item-5",
    question: "Do I need to have experience in App Development to join?",
    answer:
      "No, you do not need to have any experience in App Development to join the club. We welcome students of all skill levels, from beginners to experts.",
  },
  {
    id: "item-2",
    question: "When are the club meetings?",
    answer:
      "We meet once a week on Wednesdays at 6:00 PM. The location of the meeting is both on Zoom, and in person at the Learning Innovation Center (LINC) Room 303 on campus.",
  },
  {
    id: "item-3",
    question: "How do I join the club?",
    answer:
      "You can join the club by signing up on our Ideallogic. Membership is free and open to all students. After signing up, come join us at our next meeting!",
  },
  {
    id: "item-4",
    question: "When was the club founded?",
    answer:
      "The club was founded in 2015 by a small group of students who wanted to create a community for students interested in App Development. Since then, the club has grown to over 500+ members.",
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
