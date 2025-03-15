"use client";
import { DownloadIcon } from "@/constants/icons";
import supabase from "@/lib/supabase";
import Image from "next/image";

export default function PhotosGallery({ imagesData }) {
  const handleDownload = async (url, altText) => {
    // 🔹 Step 1: Clean the image URL (remove query params)
    const cleanUrl = url.split("?")[0];

    // 🔹 Step 2: Extract file extension (.jpg, .png, etc.)
    const extension = cleanUrl.split(".").pop();

    // 🔹 Step 3: Sanitize the alt text (remove special characters, spaces → dashes)
    const sanitizedAlt = altText
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    try {
      // 🔹 Step 4: Check if the image is already tracked in Supabase
      const { data, error } = await supabase
        .from("downloads")
        .select("id, download_count")
        .eq("image_url", cleanUrl)
        .single();

      if (error && error.code !== "PGRST116") {
        // Ignore "not found" errors
        console.error("Supabase Error:", error);
        return;
      }

      if (data) {
        // 🔹 Step 5: If image exists, update the download count
        await supabase
          .from("downloads")
          .update({
            download_count: data.download_count + 1,
            updated_at: new Date().toISOString(),
          })
          .eq("id", data.id);
      } else {
        // 🔹 Step 6: If it's a new image, add it to the database
        await supabase.from("downloads").insert([
          {
            image_url: cleanUrl,
            alt_text: sanitizedAlt,
            download_count: 1,
          },
        ]);
      }

      // 🔹 Step 7: Download the image as a blob
      fetch(cleanUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `${sanitizedAlt}.${extension}`; // 🔹 Use alt text as filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => console.error("Download error:", error));
    } catch (error) {
      console.error("Error tracking download:", error);
    }
  };

  return (
    <div className="container border-lr section-sm-padding">
      <div className="row">
        {imagesData.map((i, index) => (
          <div className="col-lg-12" key={index}>
            <div className="photo-gallery-box">
              <div className="row">
                <h2 className="album-heading">{i.data.album_heading}</h2>
                {i.data.photos_gallery.map((j, index2) => (
                  <div className="col-lg-2" key={index2}>
                    <div className="image-box">
                      <div className="gallery-container">
                        <div
                          onClick={() => handleDownload(j.pic.url, j.pic.alt)}
                          className="download-btn"
                        >
                          <DownloadIcon />
                        </div>
                        <Image
                          src={j.pic.url}
                          width={j.pic.dimensions.width}
                          height={j.pic.dimensions.height}
                          alt={j.pic.alt}
                          className="gallery-image"
                          placeholder="blur"
                          blurDataURL="/blur.svg"
                        />
                      </div>
                      <p className="picture-caption">{j.pic.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
