// working
"use client";

import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import { FaMagic } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  formContainer:
    "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md border border-[var(--form-border)]",
  description: "text-[var(--description-text)] mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-[var(--form-text)] mb-2",
  inputText:
    "px-3 py-2 w-full text-sm text-[var(--form-text)] border border-[var(--form-border)] rounded-lg bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  uploadArea:
    "border-dashed border-4 border-[var(--primary-purple)] flex items-center justify-center h-48 rounded-lg cursor-pointer hover:border-[var(--to)] transition-colors duration-300",
  uploadButton:
    "  px-4 py-2 rounded-lg shadow hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-[var(--primary-purple)]",
  imagesContainer:
    "mt-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6",
  imageBox: "w-full sm:w-1/2 flex flex-col items-center",
  img: "w-[300px] h-auto max-h-64 object-cover rounded-lg",
  altText: "text-gray-500",
};

const AIImageEnhancer = () => {
  const [title, setTitle] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [EnhancedImageUrl, setEnhancedImageUrl] = useState("");
  const [imageFormat, setImageFormat] = useState("");
  const [publicId, setPublicId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Uploaded Image URL:", imageUpload);
    const transformaedUrl = `https://res.cloudinary.com/drgztn5ek/image/upload/e_enhance/${publicId}.${imageFormat}`;
    setEnhancedImageUrl(transformaedUrl);
    // alert("Image enhancement requested! Check the console for logged values.");
  };

  const handleUpload = (result) => {
    if (result.event === "success") {
      const uploadedUrl = result.info.secure_url;
      const uploadedPublicId = result.info.public_id;
      const format = uploadedUrl.split(".").pop();
      setImageUpload(uploadedUrl);
      setImageFormat(format);
      setPublicId(uploadedPublicId);
      console.log("Uploaded image URL:", uploadedUrl);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaMagic />
          <span>AI IMAGE ENHANCER</span>
        </h1>
      </div>

      {/* Form */}
      <div className={styles.formContainer}>
        <p className={styles.description}>
          AI Image Enhancement in Imaginary uses AI to automatically improve
          image quality by correcting exposure, enhancing colors, and adjusting
          temperature. It provides a natural, vibrant look, perfect for
          enhancing images across various applications.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Title */}
          <div>
            <label htmlFor="title" className={styles.label}>
              Image Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputText}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className={styles.label}>
              Choose the Image
            </label>
            <div className={styles.uploadArea}>
              <CldUploadWidget
                uploadPreset="Imaginary"
                options={{ cloudName: "drgztn5ek" }}
                onSuccess={handleUpload}
              >
                {({ open }) => (
                  <button
                    type="button"
                    onClick={() => open()}
                    className={styles.uploadButton}
                  >
                    Upload an Image
                  </button>
                )}
              </CldUploadWidget>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.uploadButton}>
              Transform
            </button>
          </div>
        </form>
      </div>

      {/* Uploaded Image Display */}
      {imageUpload && (
        <div className={styles.imagesContainer}>
          <div className={styles.container}>
            <div className={styles.imagesContainer}>
              <div className={styles.imageBox}>
                <h2 className="text-lg font-medium mb-3">Original Image</h2>
                {imageUpload ? (
                  <img
                    src={imageUpload}
                    alt="Uploaded"
                    className={styles.img}
                  />
                ) : (
                  <p className={styles.altText}>Awaited...</p>
                )}
              </div>

              {/* Filled Image Display */}
              {EnhancedImageUrl && (
                <div className={styles.imageBox}>
                  <h2 className="text-lg font-medium mb-3">Filled Image</h2>
                  <img
                    src={EnhancedImageUrl}
                    alt="Filled Image"
                    className="w-[300px]"
                  />
                  <a
                    href={EnhancedImageUrl}
                    download
                    className="text-blue-500 hover:underline mt-3"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIImageEnhancer;
