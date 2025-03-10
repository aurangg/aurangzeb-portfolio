import { ButtonIcon } from "@/constants/icons";

export default function Button({ isIcon, name }) {
  return (
    <button className="project-btn">
      {name} {isIcon && <ButtonIcon />}
    </button>
  );
}
