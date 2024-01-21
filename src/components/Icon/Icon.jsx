import icons from "@assets/icons"

// We use this component for icons
export default function Icon({ className, name }) {
  const iconSrc = icons[name];
  return <img src={iconSrc} className={className}  alt="icon" />;
}

