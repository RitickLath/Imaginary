"use client";

import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import { FaRuler } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  formContainer:
    "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md border border-[var(--form-border)]",
  description: "text-[var(--description-text)] mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-[var(--form-text)] mb-2",
  inputFile:
    "block w-full py-2 text-sm text-[var(--input-placeholder)] border border-[var(--form-border)] rounded-lg cursor-pointer bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  select:
    "block w-full px-2 py-2 text-sm text-[var(--form-text)] border border-[var(--form-border)] rounded-lg bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  slider:
    "w-full border border-[var(--form-border)] py-2 bg-[var(--form-background)] rounded-lg cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  uploadArea:
    "border-dashed border-4 border-[var(--primary-purple)] flex items-center justify-center h-48 rounded-lg cursor-pointer hover:border-[var(--to)] transition-colors duration-300",
  submitButton:
    "bg-gradient-to-r from-[var(--from)] to-[var(--to)] px-6 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--button-focus-ring)]",
};

const Sharpen = () => {
  const [mode, setMode] = useState("sharp");
  const [strength, setStrength] = useState(1000);
  const [imageUpload, setImageUpload] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mode:", mode);
    console.log("Strength:", strength);
    console.log("Uploaded Image URL:", imageUpload);
    alert("Sharpen transformation applied! Check the console for details.");
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
          <FaRuler />
          <span>SHARPEN TRANSFORMATION</span>
        </h1>
      </div>

      {/* Form */}
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Sharpen Transformation in Imaginary enhances image clarity by applying
          a sharpening filter. This feature allows precise control over image
          sharpness, making details more defined and crisp. Perfect for refining
          image textures and edges, it improves visual quality and focus across
          various applications.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className={styles.label} htmlFor="image">
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

          {/* Mode Selection */}
          <div>
            <label className={styles.label} htmlFor="mode">
              Mode
            </label>
            <select
              id="mode"
              className={styles.select}
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              required
            >
              <option value="sharp">Sharp</option>
              <option value="unsharpMask">Unsharp Mask</option>
            </select>
          </div>

          {/* Strength Slider */}
          <div>
            <label className={styles.label} htmlFor="strength">
              Strength
            </label>
            <input
              type="range"
              id="strength"
              min="0"
              max="2000"
              value={strength}
              onChange={(e) => setStrength(e.target.value)}
              className={styles.slider}
            />
            <p>Current Strength: {strength}</p>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.submitButton}>
              Apply Sharpen
            </button>
          </div>
        </form>
      </div>

      {/* Uploaded Image Preview */}
      {imageUpload && (
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-3">Uploaded Image</h2>
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center border border-gray-300 h-64 rounded-lg bg-gray-100">
            {imageUpload ? (
              <img
                src={imageUpload}
                alt="Uploaded Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            ) : (
              <p className="text-gray-500">No image uploaded yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sharpen;
