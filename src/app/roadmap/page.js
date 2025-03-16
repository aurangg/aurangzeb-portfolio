"use client";
import { roadmap } from "@/data/roadmap";
import Footer from "../components/footer";
import FormCore from "../contact/FormCore";
import { useState } from "react";
import Suggestion from "./suggestion";

export default function Roadmap() {
  const roadmapData = roadmap;
  const upcoming = roadmapData.filter((item) => item.status === "upcoming");
  const inProgress = roadmapData.filter(
    (item) => item.status === "in-progress"
  );
  const completed = roadmapData.filter((item) => item.status === "completed");
  const [suggestion, setSuggestion] = useState(false);
  return (
    <>
      <main className="position-relative border-adjust">
        <div className="container border-lr section-sm-padding">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="banner-title">Roadmaps</h1>
            </div>
          </div>
          <div className="row" style={{ marginTop: "32px" }}>
            <div className="col-lg-4">
              <h2 className="role thumb-title" style={{ marginBottom: "16px" }}>
                Upcoming
              </h2>
              <div className="roadmap-column">
                {upcoming.map((item, index) => (
                  <div className="roadmap-item" key={index}>
                    <div className="role resume-text jetbrains text-uppercase font-weight-500">
                      {item.title}
                    </div>
                    <div className="thumb-description about-text contributions opacity-05">
                      {item.description}
                    </div>
                  </div>
                ))}
                {suggestion ? (
                  <FormCore
                    formText="Send your suggestion"
                    completionText="Request Received"
                  />
                ) : (
                  <div>
                    <Suggestion setSuggestion={setSuggestion} />
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <h2 className="role thumb-title" style={{ marginBottom: "16px" }}>
                In Progress
              </h2>
              <div className="roadmap-column">
                {inProgress.map((item, index) => (
                  <div className="roadmap-item" key={index}>
                    <div className="role resume-text jetbrains text-uppercase font-weight-500">
                      {item.title}
                    </div>
                    <div className="thumb-description about-text contributions opacity-05">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <h2 className="role thumb-title" style={{ marginBottom: "16px" }}>
                Live
              </h2>
              <div className="roadmap-column">
                {completed.map((item, index) => (
                  <div className="roadmap-item" key={index}>
                    <div className="role resume-text jetbrains text-uppercase font-weight-500">
                      {item.title}
                    </div>
                    <div className="thumb-description about-text contributions opacity-05">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
