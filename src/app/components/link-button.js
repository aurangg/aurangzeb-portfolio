import { ButtonIcon } from "@/constants/icons";
import Link from "next/link";

export default function LinkButton({ isIcon, name, url }) {
  return (
    <Link className="project-btn" href={`/${url}`}>
      {name} {isIcon && <ButtonIcon />}
    </Link>
  );
}
