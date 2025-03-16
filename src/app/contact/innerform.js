"use client";

import SectionHeadingSM from "../components/section_heading_sm";
import Image from "next/image";
import FormCore from "./FormCore";

export default function InnerForm() {
  const reviewData = {
    review:
      "Aurangg is an exceptional UI/UX designer who consistently delivers top-quality work. He excels in creating intuitive, visually appealing designs that enhance user experience. Aurangg is skilled at turning complex ideas into beautiful, functional interfaces, and he always communicates clearly and works efficiently.",
    name: "Isaac Schwerd",
    post: "CoFounder & Executive Director @Merch",
  };
  return (
    <>
      <div className="row section-sm-padding">
        <SectionHeadingSM
          subheading="Active on Emails"
          heading="Let’s Shape Your Next Big Idea."
          subheadingAlign="align-center"
          headingAlign="align-center"
        />
      </div>
      <div className="row contact-row">
        <div className="col-lg-6 align-center flex-all">
          <div className="input-form review-box">
            <div className="review-header">
              <Image
                src="/review-image.png"
                alt="review-image"
                width={72}
                height={72}
              />
              <div className="review-profile">
                <h6 className="review-name">{reviewData.name}</h6>
                <p className="review-post">{reviewData.post}</p>
              </div>
            </div>
            <div className="review-body">
              <p className="review-text">{reviewData.review}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <FormCore
            formText="Got an inquiry?"
            completionText="Inquiry Received! 🚀"
            errorText=""
          />
        </div>
      </div>
    </>
  );
}
