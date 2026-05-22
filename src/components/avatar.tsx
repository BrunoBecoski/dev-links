import Image, { type ImageProps } from "next/image";

interface AvatarProps extends ImageProps {}

export function Avatar(props: AvatarProps) {
  return (
    <div className=" rounded-full flex items-center justify-center relative overflow-hidden">
      <div className="border-2 border-stroke absolute z-20 top-0 right-0 bottom-0 left-0 rounded-full " />
      <Image width={112} height={112} className="z-10" {...props} />
      <div className="bg-linear-90 to-[#00d3f8] from-[#B43AF8] absolute -top-1 -right-1 -bottom-1 -left-1  animate-rotate "></div>
    </div>
  );
}
