/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ensures "out" folder is generated when running `next export`
  images: {
    unoptimized: true, // disables server-based optimization, keeps <Image /> working in static export
  },
};

export default nextConfig;
