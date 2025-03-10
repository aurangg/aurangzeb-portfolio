"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ProjectDetailImage({
  backgroundColor,
  shadow,
  url,
  alt,
}) {
  let formatAlt = alt?.replace(/\s+/g, "_");
  // \s+: This regular expression matches one or more spaces.
  // .replace(/\s+/g, '_'): It replaces all spaces with an underscore (_).
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="project-gallery">
          <div
            style={{
              backgroundColor: `${backgroundColor}`,
            }}
            className="project-image-container detail-img-container"
          >
            <Image
              className="thumb-img thumb-detail"
              style={{ boxShadow: `${shadow}` }}
              src={url}
              alt={alt}
              width={802}
              height={551}
            />
          </div>
          <p className="project-img-caption">{formatAlt}.jpg</p>
        </div>
      </div>
    </div>
  );
}
