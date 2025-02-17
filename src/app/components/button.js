export default async function Button({ isIcon, name }) {
  return (
    <button className="project-btn">
      {name}{" "}
      {isIcon && (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_244_566)">
            <path
              d="M10.6667 3.83331C10.6667 4.32798 11.1553 5.06665 11.65 5.68665C12.286 6.48665 13.046 7.18465 13.9173 7.71731C14.5707 8.11665 15.3627 8.49998 16 8.49998M16 8.49998C15.3627 8.49998 14.57 8.88331 13.9173 9.28265C13.046 9.81598 12.286 10.514 11.65 11.3126C11.1553 11.9333 10.6667 12.6733 10.6667 13.1666M16 8.49998H0"
              stroke="white"
              stroke-width="0.666667"
            />
          </g>
          <defs>
            <clipPath id="clip0_244_566">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
}
