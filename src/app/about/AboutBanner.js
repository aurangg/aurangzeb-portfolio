"use client";
import Image from "next/image";
import LinkButton from "../components/link-button";
import { contact_page } from "@/constants/urls";
import VerticalLines from "../components/VerticalLines";
import BasicDot from "../components/BasicDot";
import { spotifyLinks } from "@/data/spotify";
import { useEffect, useState } from "react";

export default function AboutBanner({ about }) {
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
      <VerticalLines topLine={true} bottomLine={true} />
      <div className="container banner-position-relative border-lr section-sm-padding">
        <BasicDot
          topLeft={true}
          topRight={true}
          bottomRight={true}
          bottomLeft={true}
        />
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-box">
              <div className="banner-header">
                <h1 className="banner-title">{`Hi, I'm Aurang!`}</h1>
                <div className="about-parent">
                  {about?.data?.about_text_block.map((i, index) => (
                    <p className="thumb-description about-text" key={index}>
                      {i.about_text[0].text}
                    </p>
                  ))}
                </div>
                <div className="spotify-link">
                  <p
                    className="banner-description"
                    style={{ marginBottom: "8px" }}
                  >
                    Listening Today:
                  </p>
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
              <Image
                className="about-picture"
                src={about.data.about_image.url}
                width={454}
                height={354}
                alt={about.data.about_image.url}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
