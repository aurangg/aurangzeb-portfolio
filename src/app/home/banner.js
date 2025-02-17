import Image from "next/image";
import { createClient } from "@/prismicio";
import Link from "next/link";
import LinkButton from "../components/link-button";
import { contact_page } from "@/constants/urls";

export default async function Banner() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  console.log(page);
  return (
    <div style={{ paddingTop: "200px" }}>
      <div className="container banner-position-relative">
        <div className="banner-top-line"></div>
        <div className="banner-left-line"></div>
        <div className="banner-right-line"></div>
        <div className="banner-bottom-line"></div>
        <div className="dot-top-left"></div>
        <div className="dot-top-right"></div>
        <div className="dot-bottom-left"></div>
        <div className="dot-bottom-right"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-box">
              <div className="banner-header">
                <div className="banner-chip">
                  Great Design 🤝 Greater Impact
                </div>
                <h1 className="banner-title">{page.data.title}</h1>
                <p className="banner-description">
                  {page.data.description[0]?.text}
                </p>
                <LinkButton
                  isIcon={true}
                  name="Contact Me"
                  url={contact_page}
                />
              </div>
              <div className="display-container">
                <Image
                  className="display-picture"
                  src={page.data.display.url}
                  width={454}
                  height={454}
                  alt={page.data.display.alt}
                />
                <div className="experience-tag">6 years experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
    </div>
  );
}
