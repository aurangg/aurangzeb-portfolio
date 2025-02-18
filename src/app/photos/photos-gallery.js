import Image from "next/image";
import { createClient } from "@/prismicio";

export default async function PhotosGallery() {
  const client = createClient();
  const imagesData = await client.getSingle("photos");

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="photo-gallery-box">
              <div className="row">
                <h2 className="album-heading">
                  {imagesData.data.album_heading}
                </h2>
                {imagesData.data.photos_gallery.map((j, index2) => (
                  <div className="col-lg-2" key={index2}>
                    <div className="image-box">
                      <div className="gallery-container">
                        <Image
                          src={j.pic.url}
                          width={j.pic.dimensions.width}
                          height={j.pic.dimensions.height}
                          alt={j.pic.alt}
                          className="gallery-image"
                        />
                      </div>
                      <p className="picture-caption">{j.pic.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
