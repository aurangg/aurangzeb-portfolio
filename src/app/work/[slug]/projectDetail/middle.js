"use client";
import TextBlock from "@/app/components/textBlock";
import ProjectDetailImage from "./project_detail_image";
import VerticalLines from "@/app/components/VerticalLines";
import BasicDot from "@/app/components/BasicDot";
import Image from "next/image";
import { delay, motion, transform } from "framer-motion";
import Padding from "@/app/components/Padding";

export default function Middle({ project, slug }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delays each child animation for smooth effect
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="position-relative">
      <div className="container position-relative border-lr section-sm-padding">
        {/* <ProjectDetailImage
          backgroundColor={project.data.image_background}
          shadow={project.data.image_shadow}
          url={project.data.thumbnail.url}
          alt={project.data.thumbnail.alt}
          key={1}
        /> */}
        {slug.includes("xemail") && (
          <div
            style={{
              backgroundColor: `${project.data.image_background}`,
            }}
            className="project-image-container detail-img-container show-on-desktop"
          >
            <motion.div
              className="thumb-img thumb-detail dis-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                boxShadow: `${project.data.image_shadow}`,
                height: "890px",
              }}
            >
              <div className="dis-sidebar">
                <div className="dis-sidebar-top">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                  >
                    <Image
                      src="/xemail/Logo.svg"
                      alt="logo"
                      width="208"
                      height="56"
                    />
                  </motion.div>
                  <motion.div
                    className="dis-sidebar-link"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                  >
                    <Image
                      src="/xemail/Sidebar Items.svg"
                      alt="sidebar items"
                      width="208"
                      height="336"
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="dis-sidebar-bottom"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 10 }}
                >
                  <Image
                    src="/xemail/Sidebar Footer.svg"
                    alt="footer"
                    width="208"
                    height="134"
                  />
                </motion.div>
              </div>
              <div className="dis-flex">
                <motion.div
                  className="dis-nav"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 }}
                >
                  <Image
                    src="/xemail/Navbar Heading.svg"
                    alt="navbar-heading"
                    width="40"
                    height="24"
                    className="dis-nav-heading"
                  />
                  <Image
                    src="/xemail/Navbar Settings.svg"
                    alt="navbar-settings"
                    width="228"
                    height="40"
                    className="dis-nav-settings"
                  />
                </motion.div>
                <motion.div
                  className="dis-body"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.9 }}
                >
                  <Image
                    src="/xemail/Body.svg"
                    alt="Body"
                    width="1232"
                    height="846"
                    className="dis-body-img"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div className="middle-bg position-relative">
        <VerticalLines topLine={true} bottomLine={false} />
        <div className="container border-lr position-relative">
          <Padding spacing={40} border={false} />
          <BasicDot
            topLeft={true}
            topRight={true}
            bottomRight={true}
            bottomLeft={true}
          />
          {project.data.project_images.map((i, index) => (
            <div key={index}>
              <ProjectDetailImage
                backgroundColor={project.data.image_background}
                shadow={project.data.image_shadow}
                url={i.project_gallery.url}
                alt={i.project_gallery.alt}
                slug={slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
