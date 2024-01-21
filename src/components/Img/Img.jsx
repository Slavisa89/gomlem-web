import imgs from "@assets/imgs";

export default function Img({ className, src, byte = false }) {
  if (byte)
    return <img src={`data:image/gif;base64,${src}`} className={className} />;
  
    const imgSrc = imgs[src];
  return <img src={imgSrc} className={className} />;
}
