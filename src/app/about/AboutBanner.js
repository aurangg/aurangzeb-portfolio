import Image from "next/image";
import LinkButton from "../components/link-button";
import { contact_page } from "@/constants/urls";
import VerticalLines from "../components/VerticalLines";
import BasicDot from "../components/BasicDot";

export default function AboutBanner({ about }) {
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
                <h1 className="banner-title">Hi, I'm Aurang!</h1>
                <div className="about-parent">
                  {about?.data?.about_text_block.map((i, index) => (
                    <p className="thumb-description about-text" key={index}>
                      {i.about_text[0].text}
                    </p>
                  ))}
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
