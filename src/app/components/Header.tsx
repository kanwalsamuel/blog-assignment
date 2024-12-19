// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Header(): JSX.Element {
//   // State to handle the menu visibility
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle the menu visibility
//   const toggleMenu = (): void => setIsOpen(!isOpen);

//   return (
//     <header className=" bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 text-black font-extrabold hover:text-red-600 py-4">
//       <nav className="max-w-7xl h-[80px] mx-auto px-5 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">INFINIX.</h1>
        
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-4">
//           <Link href="/" className="hover:underline">
//             Home
//           </Link>
//           <Link href="/about" className="hover:underline">
//             About
//           </Link>
//           {/* <Link href="/models" className="hover:underline">
//             Models
//           </Link> */}
//         </div>

//         {/* Hamburger Menu Icon for Small Screens */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-2xl"
//         >
//           {isOpen ? "✖" : "☰"} {/* Toggling between hamburger and close icon */}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden ${isOpen ? "block" : "hidden"} text-white p-4`}
//       >
//         <Link href="/" className="block py-2 hover:underline">
//           Home
//         </Link>
//         <Link href="/about" className="block py-2 hover:underline">
//           About
//         </Link>
//       </div>
//     </header>
//   );
// }








"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header(): JSX.Element {
  // State to handle the menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 text-black font-extrabold hover:text-red-600 py-4">
      <nav className="max-w-7xl h-[80px] mx-auto px-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-playfair">INFINIX.</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 font-playfair">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          {/* Uncomment this when the models page is ready */}
          {/* <Link href="/models" className="hover:underline">
            Models
          </Link> */}
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✖" : "☰"} {/* Toggling between hamburger and close icon */}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} text-white p-4`}
      >
        <Link href="/" className="block py-2 hover:underline">
          Home
        </Link>
        <Link href="/about" className="block py-2 hover:underline">
          About
        </Link>
      </div>
    </header>
  );
}
