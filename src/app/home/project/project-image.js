import Image from "next/image";

export default async function ProjectImage({ i }) {
  return (
    <div className="col-lg-6">
      <div
        className="project-image-container"
        style={{
          backgroundColor: `${i.data.image_background}`,
        }}
      >
        <Image
          className="thumb-img"
          style={{ boxShadow: `${i.data.image_shadow}` }}
          src={i.data.thumbnail.url}
          alt={i.data.thumbnail.alt}
          width={802}
          height={551}
        />
      </div>
    </div>
  );
}
