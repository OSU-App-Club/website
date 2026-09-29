type IconProps = React.HTMLAttributes<SVGElement>;

const AppLogo = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width="256" height="256" rx="48" fill="#1B222C" />
    <defs>
      <linearGradient id="phoneGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB057" />
        <stop offset="50%" stopColor="#FF7A63" />
        <stop offset="100%" stopColor="#FF5277" />
      </linearGradient>
    </defs>
    <rect
      x="74"
      y="30"
      width="108"
      height="196"
      rx="24"
      fill="none"
      stroke="url(#phoneGradientIcon)"
      strokeWidth="11"
    />
    <path
      d="M 64 60 C 46 60, 44 70, 44 84 L 44 108 C 44 120, 40 125, 32 128 C 40 131, 44 136, 44 148 L 44 172 C 44 186, 46 196, 64 196"
      fill="none"
      stroke="#6C86A1"
      strokeWidth="11"
      strokeLinejoin="round"
      strokeLinecap="butt"
    />
    <path
      d="M 192 60 C 210 60, 212 70, 212 84 L 212 108 C 212 120, 216 125, 224 128 C 216 131, 212 136, 212 148 L 212 172 C 212 186, 210 196, 192 196"
      fill="none"
      stroke="#6C86A1"
      strokeWidth="11"
      strokeLinejoin="round"
      strokeLinecap="butt"
    />
  </svg>
);

export const Icons = {
  logo: AppLogo,
  beaver: AppLogo,
  hamburger: (props: IconProps) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0px"
      ></path>
    </svg>
  ),
};
