"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  
  const accordionItems = [
    {
      title: "This template is Free?",
      content: "Yes, this template is free. You can use it for personal or commercial purposes.",
    },
    {
      title: "What's special about this template?",
      content: "It includes a authentication system using NextAuth.js, supporting both sign-in and sign-up flows.",
    },
    {
      title: "How can I use this template?",
      content: "You can use this template by cloning it from GitHub",
    },
    {
      title: "How can I contribute to this template?",
      content: "You can contribute to this template by forking it on GitHub and submitting a pull request. You can also report any issues or bugs you encounter while using the template.",
    },
    {
      title: "Can I customize the design?",
      content: "Definitely! The template uses Tailwind CSS, so you can easily adjust the styles to fit your brand.",
    },
  ];

  return (
    <motion.section id="faq" className="relative w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-5xl">
        <Accordion
          fullWidth
          selectionMode="multiple"
          variant="splitted"
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              className="text-muted-foreground "
            >
              <div className="text-muted-foreground pb-2">{item.content}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
