import { Dropzone } from "@/components/Dropzone";

const page = () => {
  return (
    <div className="max-w-2xl mx-auto min-h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        File<span className="text-primary uppercase"> Uploader</span>
      </h1>

      <Dropzone />
    </div>
  );
};

export default page;
