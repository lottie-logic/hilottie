import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex min-h-full items-center justify-center mt-auto mb-auto bg-cream">
      <div className="flex items-center mt-auto mb-auto justify-center">
        <Image
          src="https://64.media.tumblr.com/a1d49016eb1f74c367f58370b8ac3702/tumblr_nyzx6vkn121s2me2co1_1280.gifv"
          width={400}
          height={400}
          alt="greyhound running"
          className="object-center" // This class won't directly apply but is shown for clarity
        />
      </div>
    </div>
  );
}
