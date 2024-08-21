"use client";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "./styler.module.css";

const ToggleButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setTimeout(() => setIsMounted(false), 300); // Delay unmounting to allow animation to complete
    } else {
      setIsMounted(true);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="text-xl p-2 rounded focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="text-blue-500 brightness-200">
          <div className={styles.isoPro}>
            <section className="text-4xl ">
              <div className={styles.loader}>
                <FaBars/>
              </div>
            </section>
            <div className={`${styles.text} -ml-24 -mt-8`}>Menu</div>
          </div>
        </div>
      </button>
      {isMounted && (
        <div
          className={`${styles.menu} ${
            isOpen ? styles.menuOpen : ""
          } absolute right-0 w-32 bg-white/20 border-blue-500 brightness-200 border-x shadow-md rounded-lg z-50`}
        >
          <ul className="flex flex-col">
            <li className="border-b rounded border-blue-500 brightness-200">
              <Link href="/">
                <div className="block px-4 py-2 hover:bg-gray-100/25">Home</div>
              </Link>
            </li>
            <li className="border-b rounded border-gray-200">
              <Link href="/about">
                <div className="block px-4 py-2 hover:bg-gray-100/25">
                  About
                </div>
              </Link>
            </li>
            <li className="border-b rounded border-gray-200">
              <Link href="/contact">
                <div className="block px-4 py-2 hover:bg-gray-100/25">
                  Contact
                </div>
              </Link>
            </li>
            <li className=" rounded-md border-b border-blue-500">
              <Link href="/portfolio ">
                <div className="block px-4 py-2 hover:bg-gray-100/25">
                  Portfolio
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
