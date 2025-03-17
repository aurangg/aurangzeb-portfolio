"use client";
import { pastelColors } from "@/constants/colors";
import { spotifyLinks } from "@/data/spotify";
import { useEffect, useState } from "react";

export default function AboutHobbies({ about }) {
  const getRandomPastelColors = (length) => {
    return Array.from({ length }, () => {
      const randomIndex = Math.floor(Math.random() * pastelColors.length);
      return pastelColors[randomIndex];
    });
  };
  const [currentSong, setCurrentSong] = useState(null);
  useEffect(() => {
    const getSongOfTheDay = () => {
      const pakistanTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Karachi",
      });

      const today = new Date(pakistanTime);
      const dayIndex = today.getDate() % spotifyLinks.length; // Loop over array
      setCurrentSong(spotifyLinks[dayIndex]);
    };

    getSongOfTheDay(); // Get the song initially

    // Recalculate at midnight Pakistan time (12 AM UTC+5)
    const now = new Date();
    const pakistanMidnight = new Date(now);
    pakistanMidnight.setUTCHours(19, 0, 0, 0); // 12 AM Pakistan Time (UTC+5 → UTC is -5 hrs)

    const timeUntilMidnight = pakistanMidnight - now;
    const interval = setTimeout(getSongOfTheDay, timeUntilMidnight);

    return () => clearTimeout(interval); // Cleanup timeout
  }, []);

  if (!currentSong) return <p>Loading...</p>;
  return (
    <section className="position-relative">
      <div className="container position-relative border-lr section-sm-padding">
        <div className="row" style={{ rowGap: "16px" }}>
          {about?.data?.hobbies.map((i, index) => (
            <div className="col-lg-6" key={index}>
              <div className="hobbies-box">
                <h6 className="thumb-title about-hobbies-title">
                  {i?.hobbies_title}
                </h6>
                <div className="chip-flex">
                  {i?.hobbies_text?.map((j, index2) => {
                    const { background, text } = getRandomPastelColors(1)[0];
                    return (
                      <div
                        className="hobbies-chip"
                        style={{ background: background }}
                        key={index2}
                      >
                        <p className="hobbies-text" style={{ color: text }}>
                          {j.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row flex-all" style={{ marginTop: "16px" }}>
          <div className="col-lg-8">
            <div className="hobbies-box">
              <h6 className="thumb-title about-hobbies-title">
                Listening Today
              </h6>
              <div className="spotify-link">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={currentSong.url}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
