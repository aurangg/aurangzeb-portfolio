import Image from "next/image";
export default async function ProjectLogo({ i }) {
  return (
    <Image
      src={i.data.project_logo.url}
      alt={i.data.project_logo.alt}
      width={i.data.project_logo.dimensions.width}
      height={i.data.project_logo.dimensions.height}
    />
  );
}
