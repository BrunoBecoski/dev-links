import Image, { type ImageProps } from "next/image";

interface AvatarProps extends ImageProps {}

export function Avatar(props: AvatarProps) {
  return (
    <div className="bg-linear-90 to-[#00d3f8] from-[#B43AF8] rounded-full flex items-center justify-center relative overflow-hidden">
      <div className="border-2 border-stroke  absolute top-0 right-0 bottom-0 left-0 rounded-full " />
      <Image width={112} height={112} className="" {...props} />
    </div>
  );
}
