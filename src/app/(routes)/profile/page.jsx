"use client";
import React, { useState } from "react";
import { FaCreditCard, FaImage } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  profileContainer: "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md",
  sideBySideContainer: "flex space-x-6 mb-8",
  creditInfo:
    "flex-1 bg-[var(--form-section-background)] p-4 rounded-lg shadow-md",
  creditAmount: "md:text-xl text-[var(--text-muted)] ml-2",
  manipulationsInfo:
    "flex-1 bg-[var(--form-section-background)] p-4 rounded-lg shadow-md",
  manipulationsCount: "md:text-xl ml-2 text-[var(--text-muted)]",
  recentEditsContainer: "mt-8",
  sectionTitle: "text-lg font-semibold text-[var(--form-text)] mb-4",
  imageListContainer: "mt-4",
  imageItem: "mb-4 flex items-center",
  imageThumbnail: "w-16 h-16 object-cover rounded-lg shadow-md",
  imageDescription: "ml-4 text-[var(--text-muted)] text-sm",
};

const Profile = () => {
  // Example state for recent edits
  const [recentEdits, setRecentEdits] = useState([
    { id: 1, url: "https://via.placeholder.com/150", description: "Edit 1" },
    { id: 2, url: "https://via.placeholder.com/150", description: "Edit 2" },
    { id: 3, url: "https://via.placeholder.com/150", description: "Edit 3" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaCreditCard />
          <span>Profile</span>
        </h1>
      </div>
      <div className={styles.profileContainer}>
        {/* Side-by-side sections */}
        <div className={styles.sideBySideContainer}>
          {/* Credit Available */}
          <div className={styles.creditInfo}>
            <div className="flex items-center">
              <FaCreditCard className="text-2xl text-gray-300" />
              <div className={styles.creditAmount}>Credits Available: 15</div>
            </div>
          </div>

          {/* Image Manipulations Done */}
          <div className={styles.manipulationsInfo}>
            <div className="flex items-center">
              <FaImage className="text-2xl text-gray-300" />
              <div className={styles.manipulationsCount}>Images Edited: 20</div>
            </div>
          </div>
        </div>

        {/* Recent Edits Section */}
        <div className={styles.recentEditsContainer}>
          <div className={styles.sectionTitle}>Recent Edits</div>
          <div className={styles.imageListContainer}>
            {recentEdits.map((edit) => (
              <div key={edit.id} className={styles.imageItem}>
                <img
                  src={edit.url}
                  alt={`Recent Edit ${edit.id}`}
                  className={styles.imageThumbnail}
                />
                <div className={styles.imageDescription}>
                  {edit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Profile;
