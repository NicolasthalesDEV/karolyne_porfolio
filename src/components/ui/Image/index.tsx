import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function CustomImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: CustomImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={75}
      sizes="100vw"
      className={className}
      style={{ objectFit: 'cover' }}
    />
  );
}
