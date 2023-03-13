import Link from "next/link";

const Error = () => {
  return (
    <div className="text-white text-2xl flex justify-center items-center text-center h-[100vh]">
      <div>
        404 | This page could not be found. Go back to{" "}
        <Link href="/" className="text-[#e750c1] underline decoration-[#e750c1]">Homepage</Link>
      </div>
    </div>
  );
};

export default Error;
