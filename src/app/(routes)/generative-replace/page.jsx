// working
"use client";

import { UserDetailUpdate } from "@/app/actions/user";
import { useAuth } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

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
  imagesContainer:
    "mt-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6",
  imageBox: "w-full sm:w-1/2 flex flex-col items-center",
  img: "w-[300px] h-auto max-h-64 object-cover rounded-lg",
};

const GenerativeReplace = () => {
  const [title, setTitle] = useState("");
  const [itemToReplace, setItemToReplace] = useState("");
  const [replaceWith, setReplaceWith] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [publicId, setPublicId] = useState("");
  const [transformedUrl, setTransformedUrl] = useState("");
  const { userId } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await UserDetailUpdate(userId, imageUpload);
    if (result === "Insufficient credits.") {
      alert(
        "OOPS! Credits have ended, please buy some to continue with edits."
      );
      return;
    }

    // Replace spaces with "%20" for URL encoding
    const encodedItemToReplace = itemToReplace.replace(/\s+/g, "%20");
    const encodedReplaceWith = replaceWith.replace(/\s+/g, "%20");

    // Generate the Cloudinary URL with the transformation based on user input
    const transformedImageUrl = `https://res.cloudinary.com/drgztn5ek/image/upload/e_gen_replace:from_${encodedItemToReplace};to_${encodedReplaceWith}/${publicId}.png`;

    setTransformedUrl(transformedImageUrl); // Update the transformed image URL

    console.log("Title:", title);
    console.log("Item to Replace:", itemToReplace);
    console.log("Replace With:", replaceWith);
    console.log("Uploaded Image URL:", imageUpload);
    console.log("Transformed Image URL:", transformedImageUrl);

    // alert("Generative Replace action applied! Check the transformed image.");
  };

  const handleUpload = (result) => {
    if (result.event === "success") {
      const uploadedUrl = result.info.secure_url;
      const public_id = result.info.public_id;
      setImageUpload(uploadedUrl);
      setPublicId(public_id);
      console.log("Uploaded image URL:", uploadedUrl);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaEdit />
          <span>GENERATIVE REPLACE</span>
        </h1>
      </div>

      {/* Form */}
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Generative Replace in Imaginary uses AI to replace objects within
          images with alternative objects or images while maintaining a natural
          look. This feature allows for creative or functional alterations in
          images, enhancing the versatility and usage of your media assets.
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

          {/* Item to Replace */}
          <div>
            <label htmlFor="itemToReplace" className={styles.label}>
              Item to Replace
            </label>
            <input
              type="text"
              id="itemToReplace"
              placeholder="Describe the item to replace"
              value={itemToReplace}
              onChange={(e) => setItemToReplace(e.target.value)}
              className={styles.inputText}
              required
            />
          </div>

          {/* Replace With */}
          <div>
            <label htmlFor="replaceWith" className={styles.label}>
              Replace With
            </label>
            <input
              type="text"
              id="replaceWith"
              placeholder="Describe the replacement item"
              value={replaceWith}
              onChange={(e) => setReplaceWith(e.target.value)}
              className={styles.inputText}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.uploadButton}>
              Replace Object
            </button>
          </div>
        </form>
      </div>

      {/* Uploaded Image Display */}
      {imageUpload && (
        <div className={styles.imagesContainer}>
          <div className={styles.imageBox}>
            <h2 className="text-lg font-medium mb-3">Original Image</h2>
            {imageUpload ? (
              <img src={imageUpload} alt="Uploaded" className={styles.img} />
            ) : (
              <p className={styles.altText}>Awaited...</p>
            )}
          </div>

          {/* Restored Image Display */}
          {transformedUrl && (
            <div className={styles.imageBox}>
              <h2 className="text-lg font-medium mb-3">Transformed Image</h2>
              <img
                src={transformedUrl}
                alt="Transformed"
                className="w-[300px]"
              />
              <a
                href={transformedUrl}
                download
                className="text-blue-500 hover:underline mt-3"
              >
                Download
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GenerativeReplace;
