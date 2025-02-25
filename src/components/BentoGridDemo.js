import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature } from "@tabler/icons-react";

export function BentoGridDemo() {
    return (
      <BentoGrid title="Our Products" className="mx-auto mt-10 mb-28 max-w-[1200px]"> 
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            image={item.image}
          />
        ))}
      </BentoGrid>
    );
}

const items = [
  {
    title: "Mula Groups",
    description: "Join a chama, invite Mula,  and watch your financial power grow..",
    header: null,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "/soko.jpg",
  },
  {
    title: "Manna",
    description: "A monthly package that has common household items like sugar, cooking oil, salt, soap.",
    header: null,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "/bush.jpg"
  },
  {
    title: "Mula Plus+",
    description: "We will be there for you when the unfortunate event occurs to you or any of your beloved ones.",
    header: null,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "/masai.jpg"
  },
  {
    title: "Otonglo",
    description: "Get funding to expand your opportunities without the barriers of traditional banking.",
    header: null,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "/jump.jpg"
  }
];
