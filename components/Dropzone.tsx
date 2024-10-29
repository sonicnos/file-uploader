"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import { pinata } from "@/lib/pinata";

export function Dropzone() {
  const [files, setFiles] = useState<Array<{ file: File }>>([]);

  const uploadFile = async (file: File) => {
    try {
      const keyRequest = await fetch("/api/key");
      const keyData = await keyRequest.json();
      const upload = await pinata.upload.file(file).key(keyData.JWT);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(files);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    if (acceptedFiles.length) {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) => ({ file })),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: "pt-6 mt-10 border-dashed rounded-lg border-2 w-[500px]",
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-center">Drop the files here ...</p>
      ) : (
        <div className="flex flex-col items-center gap-y-3">
          <p>Drag and drop some files here, or click to select files</p>
          <Button>Select Files</Button>
        </div>
      )}
    </div>
  );
}
