"use client";

import { formURL } from "@/constants/urls";
import { useState } from "react";
import SectionHeadingSM from "../components/section_heading_sm";
import Image from "next/image";

export default function InnerForm() {
  // const contactAPI = process.env.NEXT_PUBLIC_CONTACT_API;
  const contactAPI = "100573f2-0285-41f5-bf33-ccadd0d701c6";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, contactAPI });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_CONTACT_API,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setLoading(true);
      setSuccess("Success");
      console.log(result);
    }
  };

  const reviewData = {
    review:
      "Aurangg is an exceptional UI/UX designer who consistently delivers top-quality work. He excels in creating intuitive, visually appealing designs that enhance user experience. Aurangg is skilled at turning complex ideas into beautiful, functional interfaces, and he always communicates clearly and works efficiently.",
    name: "Isaac Schwerd",
    post: "CoFounder & Executive Director @Merch",
  };
  return (
    <form onSubmit={handleSubmit}>
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
          <div className="input-form">
            <div className="contact-heading">
              {!success ? (
                <p className={`section-subheading align-center`}>
                  Got an inquiry?
                </p>
              ) : (
                <p
                  className={`section-subheading align-center opacity-1 inquiry-done`}
                >
                  Inquiry Received! 🚀
                </p>
              )}
            </div>
            <div className="row">
              {success && (
                <div className="flex-all">
                  <Image
                    src="/avatar-with-glow.svg"
                    alt="received"
                    width={256}
                    height={282}
                  />
                </div>
              )}
              {!success && (
                <>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`input-field ${loading ? "input-form-disabled" : ""}`}
                      disabled={loading}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`input-field ${loading ? "input-form-disabled" : ""}`}
                      disabled={loading}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`input-field ${loading ? "input-form-disabled" : ""}`}
                      disabled={loading}
                    />
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="project-btn send-btn">
                      {loading ? "Sending..." : "Send"}
                      {loading && <div className="spinner"></div>}
                    </button>
                  </div>
                </>
              )}
              {success && (
                <div
                  className="create-new-inquiry"
                  onClick={() => {
                    setLoading(false);
                    setSuccess(null);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                >
                  Left something? Send another one
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
