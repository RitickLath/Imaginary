import React from "react";
import { FaBolt } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  cardContainer:
    "grid w-full grid-cols-1 md:grid-cols-3 gap-6 mt-8",
  card: "bg-white dark:bg-[var(--form-background)] p-6 rounded-lg shadow-md flex flex-col items-center space-y-4",
  price: "text-4xl font-bold",
  description: "text-gray-600 dark:text-gray-300 mb-4",
  featuresList: "space-y-2",
  featureItem: "flex items-center space-x-2 text-gray-600 dark:text-gray-300",
  featureIcon: "text-[var(--primary-purple)]",
  featureText: "text-sm",
  buttonFree:
    "bg-gray-300 text-gray-700 px-6 py-2 rounded-lg cursor-not-allowed",
  buttonBuy:
    "bg-gradient-to-r from-[#3B1179] to-[#4C2EA5] text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--button-focus-ring)] hover:from-[#5c33a8] hover:to-[#6e44bb]",
};

const BuyCredit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaBolt />
          <span>Buy Credits</span>
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Choose a credit package that suits your needs!
      </p>

      <div className={styles.cardContainer}>
        {/* Free Package */}
        <div className={styles.card}>
          <FaBolt className="text-4xl text-[var(--primary-purple)]" />
          <h2 className="text-xl font-semibold">Free</h2>
          <p className={styles.price}>$0</p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>20 Free Credits</span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>
                Basic Access to Services
              </span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className="text-red-500" />
              <span className={styles.featureText}>
                Priority Customer Support
              </span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className="text-red-500" />
              <span className={styles.featureText}>Priority Updates</span>
            </li>
          </ul>
          <button className={styles.buttonFree}>Free Consumable</button>
        </div>

        {/* Pro Package */}
        <div className={styles.card}>
          <FaBolt className="text-4xl text-[var(--primary-purple)]" />
          <h2 className="text-xl font-semibold">Pro Package</h2>
          <p className={styles.price}>$40</p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>120 Credits</span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>
                Full Access to Services
              </span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>
                Priority Customer Support
              </span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className="text-red-500" />
              <span className={styles.featureText}>Priority Updates</span>
            </li>
          </ul>
          <button className={styles.buttonBuy}>Buy Credit</button>
        </div>

        {/* Premium Package */}
        <div className={styles.card}>
          <FaBolt className="text-4xl text-[var(--primary-purple)]" />
          <h2 className="text-xl font-semibold">Premium Package</h2>
          <p className={styles.price}>$199</p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>2000 Credits</span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>
                Full Access to Services
              </span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>
                Priority Customer Support
              </span>
            </li>
            <li className={styles.featureItem}>
              <FaBolt className={styles.featureIcon} />
              <span className={styles.featureText}>Priority Updates</span>
            </li>
          </ul>
          <button className={styles.buttonBuy}>Buy Credit</button>
        </div>
      </div>
    </div>
  );
};

export default BuyCredit;
