import Image from "next/image";
import VerticalLines from "../components/VerticalLines";
import BasicDot from "../components/BasicDot";

export default function PageTitle() {
  return (
    <section className="position-relative">
      <VerticalLines topLine={true} bottomLine={true} />
      <div className="container section-sm-padding border-lr position-relative">
        <BasicDot
          topLeft={true}
          topRight={true}
          bottomRight={true}
          bottomLeft={true}
        />

        <div className="row">
          <div className="col-12">
            <div className="banner-box photos-banner flex-all position-relative">
              <h1 className="photos-banner-heading">My Photos</h1>
              <Image
                src="/avatar-with-glow.svg"
                alt="avatar-with-glow"
                width={256}
                height={282}
                className="photos-banner-avatar-glow"
              />
              <p className="photos-banner-text">{`[ Shot on iphone ]`}</p>
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
