import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/img/VALT_BG.png"
        alt="valt_background"
      />
    </div>
  );
}
