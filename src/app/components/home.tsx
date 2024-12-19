

"use client"; // Mark this file as a Client Component

import React from "react";
import ModelCard from "./modelCard";

const models = [
  {
    id: "1",
    name: "Infinix Hot 50 Pro Plus",
    image: "/images/proplus50.jpeg",
    description:
      "An upgraded version of Hot 50 Pro with enhanced performance, camera, and charging speed.",
  },
  {
    id: "2",
    name: "Infinix Note 30",
    image: "/images/note30.jpg",
    description:
      "Mid-range king with great performance and amazing battery life.",
  },
  {
    id: "3",
    name: "Infinix Hot 30",
    image: "/images/hot30.jpg",
    description:
      "Budget-friendly device with excellent features for daily use.",
  },
  {
    id: "4",
    name: "Infinix Zero 30 5G",
    image: "/images/zero305g.jpg",
    description:
      "The 5G-ready powerhouse with incredible performance and 108MP camera.",
  },
  {
    id: "5",
    name: "Infinix Note 12 Pro",
    image: "/images/note12  pro.png",
    description:
      "A sleek phone with powerful gaming capabilities and a 90Hz AMOLED display.",
  },
  {
    id: "6",
    name: "Infinix Smart 6",
    image: "/images/smart6.png",
    description:
      "Affordable and reliable with a large battery and all-day performance.",
  },
  {
    id: "7",
    name: "Infinix Zero 10 Pro",
    image: "/images/zero10pro.jpg",
    description:
      "Professional-grade performance with a 64MP AI camera and 33W fast charging.",
  },
  {
    id: "8",
    name: "Infinix Hot 50 Pro",
    image: "/images/hot 50 pro.jpg",
    description:
      "The ultimate smartphone with a 120Hz display, 108MP camera, and powerful battery.",
  },
  {
    id: "9",
    name: "Infinix Hot 40",
    image: "/images/hot 40.jpeg",
    description:
      "A budget-friendly option with a large screen, excellent battery, and solid camera setup.",
  },
  {
    id: "10",
    name: "Infinix Hot 40 Pro",
    image: "/images/hot 40 pro.jpeg",
    description:
      "The pro version with a faster processor, higher refresh rate, and more advanced features.",
  },
  {
    id: "11",
    name: "Infinix Zero Ultra",
    image: "/images/zero-ultra.jpeg",
    description:
      "The flagship device with a 200 MP camera and ultra-fast charging.",
  },

  {
    id: "12",
    name: "Infinix Hot 40i",
    image: "/images/hot40i.jpeg", // You can replace this path with the correct image path
    description:
      "The budget-friendly Infinix Hot 40i with a large battery, reliable performance, and solid camera features.",
  },
];

export default function Home() {
  return (
    <div>


<p
  className="text-center text-[28px] mb-32 font-playfair font-semibold text-white bg-cover bg-center py-48 px-6 relative animate-bgmove"
  style={{
    backgroundImage: 'url(/images/bg-img-2.jpg)',
    height: '800px',
    width: '100%',
  }}
>
  Discover the latest advancements and features in Infinix <br /> mobile technology.  
  From cutting-edge displays to powerful performance,<br /> explore what makes Infinix a top choice for modern users.
</p>






      <main className="max-w-7xl mx-auto py-10 px-5 mt-32 bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300  "  >
    
    
    {/* New Title Section */}
    <h1 className="text-[2.5rem] font-bold text-center mb-8 text-orange-600 font-playfair">
      See What&apos;s New in Infinix Technology
    </h1>











      {/* <main className="max-w-7xl mx-auto py-10 px-5 mt-32 bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 animate-moveBg">
        {/* Title Section */}
        {/* <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
          Explore the Latest Infinix Models
        </h1> */}
{/* 
        <h1 className="text-[2.5rem] font-bold text-center mb-8 text-orange-600 font-playfair">
          See What&apos;s New in Infinix Technology
        </h1>  */}

        <div className="flex flex-col items-center w-full">
          <video
            controls
            className="w-full md:w-2/2 rounded-lg shadow-md mb-8  "
            src="/images/video infiinix.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Model Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </main>

      {/* Video Section */}
      <section className="mt-10 py-10 bg-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">
          Experience Infinix Innovation
        </h2>
        {/* <div className="flex flex-col items-center w-full">
          <video
            controls
            className="w-full md:w-2/3 rounded-lg shadow-md"
            src="/images/video infiinix.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <button
            className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            onClick={() => alert("Explore more features coming soon!")}
          >
            Explore More
          </button>
        </div> */}
      </section>
    </div>
  );
}
