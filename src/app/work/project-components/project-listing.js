"use client";
import ProjectImage from "./project-image";
import ProjectBody from "./project-body";
import { motion } from "framer-motion";
import Link from "next/link";
import { work_page } from "@/constants/urls";
import ProjectDot from "@/app/components/ProjectDot";

export default function ProjectListing({ data }) {
  const variants = {
    hidden: { opacity: 0, y: 80 }, // Start fully hidden & lower down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Smooth slow transition
        ease: [0.25, 1, 0.5, 1], // Custom cubic bezier for a soft, gentle feel
      },
    },
  };
  return (
    <>
      {data.map((i, index) => (
        <motion.div
          className="col-lg-12 position-relative"
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% in view
          variants={variants}
        >
          {/* <ProjectDot /> */}
          <Link href={`/${work_page}/${i.uid}`}>
            <div className="project-box">
              <div className={`${index % 2 === 0 ? "row" : "row row-reverse"}`}>
                <ProjectImage i={i} />
                <ProjectBody i={i} />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </>
  );
}
