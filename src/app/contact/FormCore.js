"use client";
import Image from "next/image";
import { formURL } from "@/constants/urls";
import { useState } from "react";

export default function FormCore({ formText, completionText }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(formURL, {
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
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-form">
        <div className="contact-heading">
          {!success ? (
            <p className={`section-subheading align-center`}>{formText}</p>
          ) : (
            <p
              className={`section-subheading align-center opacity-1 inquiry-done`}
            >
              {completionText}
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
    </form>
  );
}
