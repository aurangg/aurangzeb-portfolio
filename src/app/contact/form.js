"use client";

import { apikey, formURL } from "@/constants/urls";
import { useState } from "react";
import SectionHeadingSM from "../components/section_heading_sm";
import Image from "next/image";
import Padding from "../components/Padding";
import BasicDot from "../components/BasicDot";
import VerticalLines from "../components/VerticalLines";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, apikey });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch(formURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setSuccess(`Error: ${result.error}`);
      }
    } catch (error) {
      setSuccess("Something went wrong!");
    }

    setLoading(false);
  };

  const reviewData = {
    review:
      "Aurangg is an exceptional UI/UX designer who consistently delivers top-quality work. He excels in creating intuitive, visually appealing designs that enhance user experience. Aurangg is skilled at turning complex ideas into beautiful, functional interfaces, and he always communicates clearly and works efficiently.",
    name: "Isaac Schwerd",
    post: "CoFounder & Executive Director @Merch",
  };

  return (
    <section className="position-relative">
      <Padding spacing={60} border={true} />

      <div>
        <div className="container border-lr position-relative section-sm-padding">
          <VerticalLines topLine={true} bottomLine={false} />
          <BasicDot
            topLeft={true}
            topRight={true}
            bottomRight={true}
            bottomLeft={true}
          />
          <form onSubmit={handleSubmit}>
            <div className="row section-sm-padding">
              <SectionHeadingSM
                subheading="Active on Emails"
                heading="Let’s Shape Your Next Big Idea."
                subheadingAlign="align-center"
                headingAlign="align-center"
              />
            </div>
            <div className="row">
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
                          <button
                            type="submit"
                            className="project-btn send-btn"
                          >
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
        </div>
        <div className="container border-lr position-relative section-sm-padding form-height">
          <VerticalLines topLine={true} bottomLine={false} />
        </div>
      </div>
    </section>
  );
}
