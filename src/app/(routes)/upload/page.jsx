"use client";

import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const Upload = () => {
  // State to hold the uploaded image URL
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = (error, result) => {
    if (!error && result.event === "success") {
      // Set the uploaded image URL
      const uploadedUrl = result.info.secure_url;
      setImageUrl(uploadedUrl);
      console.log("Uploaded image URL:", uploadedUrl);
    }
    console.log(error);
  };

  return (
    <div className="ml-6 bg-white text-black w-[200px] h-[200px]">
      <CldUploadWidget
        className="text-black"
        uploadPreset="Imaginary"
        options={{ cloudName: "drgztn5ek" }}
        onSuccess={handleUpload}
      >
        {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
      </CldUploadWidget>

      {imageUrl && (
        <div className="mt-4">
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" className="mt-2" />
          <p>Image URL: {imageUrl}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
