import { Dropzone } from "@/components/Dropzone";

const page = () => {
  return (
    <div className=" mx-auto min-h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        File <span className="text-primary">Uploader</span>
      </h1>

      <Dropzone />
    </div>
  );
};

export default page;
