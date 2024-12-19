






"use client";
import { useState } from "react";
import Link from "next/link";
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
  // State to manage the modal visibility and content
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Function to open the modal with specific content
  const handleLinkClick = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <footer className="bg-yellow-500 text-white py-10 w-full text-center">
      {/* Main Footer Content */}
      <div className="mb-6">
        <p>&copy; 2024 Infinix. All Rights Reserved.</p>
      </div>

      {/* Footer Links */}
      <div className="mb-6">
        <Link
          href="#"
          className="hover:text-black mx-3 text-lg "
          onClick={() =>
            handleLinkClick("You clicked on About Us. Learn more about Infinix here.")
          }
        >
          About Us
        </Link>
        <Link
          href="#"
          className="hover:text-black mx-3 text-lg"
          onClick={() =>
            handleLinkClick("You clicked on Contact Us. Please reach out to us at example@example.com.")
          }
        >
          Contact Us
        </Link>
        <Link
          href="#"
          className="hover:text-black mx-3 text-lg"
          onClick={() =>
            handleLinkClick("You clicked on Privacy Policy. We value your privacy and ensure your data is safe.")
          }
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="hover:text-black mx-3 text-lg"
          onClick={() =>
            handleLinkClick("You clicked on Terms of Service. Please review our terms for using the website.")
          }
        >
          Terms of Service
        </Link>
        <p className="font-playfair text-white mt-10">Designed By: Kanwal Samuel.</p>
      </div>

      {/* Modal for displaying the details */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 "
          onClick={() => setModalOpen(false)}
        >
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-160">
            <h2 className="font-semibold text-xl mb-4">Information</h2>
            <p>{modalContent}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
