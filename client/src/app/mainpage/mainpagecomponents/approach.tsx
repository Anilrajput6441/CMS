"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Initial Consultation",
    description:
      "We begin by understanding your goals, ideas, and requirements. This helps us shape the perfect solution for your project, ensuring alignment from the start.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white">
        <Image
          src="https://i.pinimg.com/736x/13/0d/da/130dda80037a2879522e17651ea2dd67.jpg"
          width={320}
          height={300}
          alt="Consultation Process"
        />
      </div>
    ),
  },
  {
    title: "Planning & Strategy",
    description:
      "Our team creates a comprehensive roadmap for your project. We define timelines, milestones, and deliverables to ensure transparency and success.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        <Image
          src="https://i.pinimg.com/736x/24/6d/a4/246da4cdeb69fb8a91c0dc0c97093ef8.jpg"
          width={320}
          height={300}
          alt="Planning & Strategy"
        />
      </div>
    ),
  },
  {
    title: "Design & Prototyping",
    description:
      "Our designers bring your vision to life with intuitive UI/UX designs and interactive prototypes. We ensure your product is visually appealing and user-friendly.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="https://i.pinimg.com/474x/10/64/42/10644296bc71b4cbe6e554e8ae23b0b7.jpg"
          width={320}
          height={300}
          alt="Design & Prototyping"
        />
      </div>
    ),
  },
  {
    title: "Development",
    description:
      "Our developers turn designs into reality using modern frameworks and best coding practices. We ensure scalability, performance, and security in every project.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <Image
          src="http://i.pinimg.com/474x/cb/3c/ef/cb3cefbcba842dc7a34c0dfafcf38858.jpg"
          width={400}
          height={300}
          alt="Development Process"
        />
      </div>
    ),
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We conduct rigorous testing to ensure everything functions as intended. From performance checks to security validation, our QA process is thorough.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white">
        <Image
          src="https://i.pinimg.com/474x/6a/7a/15/6a7a150b675aeb0ed2b1995aa74ceb25.jpg"
          width={330}
          height={330}
          alt="Testing Process"
        />
      </div>
    ),
  },
  {
    title: "Deployment & Delivery",
    description:
      "Once everything is finalized, we deploy your solution on your preferred platform with full support to ensure a seamless launch.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] text-white">
        <Image
          src="https://i.pinimg.com/474x/3e/28/97/3e2897cd9215be43f51c912e8cf902a8.jpg"
          width={350}
          height={350}
          alt="Deployment Process"
        />
      </div>
    ),
  },
  {
    title: "Post-Launch Support",
    description:
      "Our journey doesn't end at deployment. We provide ongoing support, maintenance, and updates to ensure your project continues to thrive.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--black-500))] text-white">
        <Image
          src="https://i.pinimg.com/474x/3e/28/97/3e2897cd9215be43f51c912e8cf902a8.jpg"
          width={390}
          height={390}
          alt="Post-Launch Support"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-5 ">
      <div className="text-3xl lg:text-4xl mb-10 roboto-mono flex justify-center lg:ml-0 font-extrabold ">
        Our Approach
      </div>

      <StickyScroll content={content} />
    </div>
  );
}
