// working
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
    "px-4 py-2 rounded-lg shadow hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-[var(--primary-purple)]",
  select:
    "block w-full px-2 py-2 text-sm text-[var(--input-text)] border border-[var(--input-border)] rounded-lg bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  imagesContainer:
    "mt-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6",
  imageBox: "w-full sm:w-1/2 flex flex-col items-center",
  img: "w-[300px] h-auto max-h-64 object-cover rounded-lg",
};

const GenerativeFill = () => {
  const [title, setTitle] = useState("");
  const [orientation, setOrientation] = useState("square");
  const [imageUpload, setImageUpload] = useState("");
  const [filledImageUrl, setFilledImageUrl] = useState("");
  const [imageFormat, setImageFormat] = useState("");
  const [publicId, setPublicId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!publicId) {
      alert("Please upload an image first!");
      return;
    }

    // Generate the Cloudinary URL based on the selected orientation
    let aspectRatio;
    switch (orientation) {
      case "portrait":
        aspectRatio = "9:16";
        break;
      case "landscape":
        aspectRatio = "16:9";
        break;
      default:
        aspectRatio = "1:1"; 
    }

    // Use the stored public_id in the transformed URL
    const transformedImageUrl = `https://res.cloudinary.com/drgztn5ek/image/upload/c_pad,ar_${aspectRatio},g_center,b_gen_fill/${publicId}.${imageFormat}`;

    setFilledImageUrl(transformedImageUrl);

    console.log("Title:", title);
    console.log("Orientation:", orientation);
    console.log("Uploaded Image URL:", imageUpload);
    console.log("Filled Image URL:", transformedImageUrl);

    alert("Generative fill applied! Check the console for logged values.");
  };

  const handleUpload = (result) => {
    if (result.event === "success") {
      const uploadedUrl = result.info.secure_url;
      const uploadedPublicId = result.info.public_id;
      const format = uploadedUrl.split(".").pop();
      setImageUpload(uploadedUrl);
      setPublicId(uploadedPublicId);
      setImageFormat(format);
      console.log("Uploaded image URL:", uploadedUrl);
      console.log("Uploaded public_id:", uploadedPublicId);
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
              {filledImageUrl && (
                <div className={styles.imageBox}>
                  <h2 className="text-lg font-medium mb-3">Filled Image</h2>
                  <img
                    src={filledImageUrl}
                    alt="Filled Image"
                    className="w-[300px]"
                  />
                  <a
                    href={filledImageUrl}
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

export default GenerativeFill;
