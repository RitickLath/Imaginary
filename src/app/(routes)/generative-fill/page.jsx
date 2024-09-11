"use client";

import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import { FaFillDrip } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  formContainer:
    "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md border border-[var(--form-border)]",
  description: "text-[var(--text-muted)] mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-[var(--form-text)] mb-2",
  inputText:
    "px-3 py-2 w-full text-sm text-[var(--input-text)] border border-[var(--input-border)] rounded-lg bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  uploadArea:
    "border-dashed border-4 border-[var(--primary-purple)] flex items-center justify-center h-48 rounded-lg cursor-pointer hover:border-[var(--to)] transition-colors duration-300",
  uploadButton:
    "  px-4 py-2 rounded-lg shadow hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-[var(--primary-purple)]",
  select:
    "block w-full px-2 py-2 text-sm text-[var(--input-text)] border border-[var(--input-border)] rounded-lg bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  imagesContainer:
    "mt-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6",
  imageBox:
    "w-full sm:w-1/2 flex flex-col items-center justify-center border border-gray-300 h-64 rounded-lg bg-gray-100",
  img: "w-full h-auto max-h-64 object-cover rounded-lg",
  altText: "text-gray-500",
};

const GenerativeFill = () => {
  const [title, setTitle] = useState("");
  const [orientation, setOrientation] = useState("square");
  const [imageUpload, setImageUpload] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Orientation:", orientation);
    console.log("Uploaded Image URL:", imageUpload);
    alert("Generative fill applied! Check the console for logged values.");
  };

  const handleUpload = (result) => {
    if (result.event === "success") {
      const uploadedUrl = result.info.secure_url;
      setImageUpload(uploadedUrl);
      console.log("Uploaded image URL:", uploadedUrl);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaFillDrip />
          <span>GENERATIVE FILL</span>
        </h1>
      </div>

      {/* Form */}
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Generative Fill in Imaginary uses AI to expand images, aiding in
          orientation changes. It seamlessly integrates AI-generated backgrounds
          with existing content, facilitating creative solutions while reducing
          workflow time.
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

          {/* Orientation Options */}
          <div>
            <label htmlFor="orientation" className={styles.label}>
              Orientation
            </label>
            <select
              id="orientation"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
              className={styles.select}
              required
            >
              <option value="square">Square</option>
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.uploadButton}>
              Apply Fill
            </button>
          </div>
        </form>
      </div>

      {/* Uploaded Image Display */}
      {imageUpload && (
        <div className={styles.container}>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox}>
              <h2 className="text-lg font-medium mb-3">Original Image</h2>
              {imageUpload ? (
                <img src={imageUpload} alt="Uploaded" className={styles.img} />
              ) : (
                <p className={styles.altText}>Awaited...</p>
              )}
            </div>

            <div className={styles.imageBox}>
              <h2 className="text-lg font-medium mb-3">Filled Image</h2>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Processed Image Preview</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerativeFill;
