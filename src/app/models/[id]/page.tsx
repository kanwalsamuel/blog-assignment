


"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const models = [
  {
    id: "1",
    name: "Infinix Hot 50 Pro Plus",
    image: "/images/proplus50.jpeg",
    description: "A premium version of the Hot 50 Pro with enhanced features.",
    price: "$199",
    specifications: {
      display: "6.9-inch AMOLED, 120Hz",
      processor: "MediaTek Helio G99",
      ram: "8GB",
      storage: "128GB",
      battery: "6000mAh, 33W fast charging",
      camera: "64MP + 2MP + AI Lens (rear), 16MP (front)",
      os: "Android 13, XOS 13",
      connectivity: "4G LTE, Wi-Fi 6, Bluetooth 5.2",
    },
    availability: "In Stock",
  },


{
           id: "2",
          name: "Infinix Zero 30 5G",
          image: "/images/zero305g.jpg",
          description:
            "A powerful device with a 144Hz AMOLED display and sleek design.",
          price: "$399",
          specifications: {
            display: "6.78-inch AMOLED, 144Hz",
            processor: "MediaTek Dimensity 8020",
            ram: "12GB",
            storage: "256GB",
            battery: "5000mAh, 68W fast charging",
            camera: "108MP + 13MP + 2MP (rear), 50MP (front)",
            os: "Android 13, XOS 13",
            connectivity: "5G, Wi-Fi 6, Bluetooth 5.3",
          },
          availability: "In Stock",
        },
        {
          id: "3",
          name: "Infinix Note 30",
          image: "/images/note30.jpg",
          description:
            "An excellent mid-range phone with a 120Hz display and long-lasting battery.",
          price: "$299",
          specifications: {
            display: "6.78-inch IPS LCD, 120Hz",
            processor: "MediaTek Helio G99",
            ram: "8GB",
            storage: "128GB",
            battery: "5000mAh, 45W fast charging",
            camera: "64MP + 2MP + AI Lens (rear), 16MP (front)",
            os: "Android 13, XOS 13",
            connectivity: "4G LTE, Wi-Fi 5, Bluetooth 5.1",
          },
          availability: "In Stock",
        },
        {
          id: "4",
          name: "Infinix Hot 30",
          image: "/images/hot30.jpg",
          description:
            "A budget-friendly device with a smooth display and great performance.",
          price: "$199",
          specifications: {
            display: "6.78-inch IPS LCD, 90Hz",
            processor: "MediaTek Helio G88",
            ram: "8GB",
            storage: "128GB",
            battery: "5000mAh, 33W fast charging",
            camera: "50MP + AI Lens (rear), 8MP (front)",
            os: "Android 13, XOS 13",
            connectivity: "4G LTE, Wi-Fi 5, Bluetooth 5.0",
          },
          availability: "In Stock",
        },
        {
          id: "5",
          name: "Infinix Smart 6",
          image: "/images/smart6.png",
          description:
            "An entry-level smartphone with essential features for everyday use.",
          price: "$99",
          specifications: {
            display: "6.6-inch IPS LCD",
            processor: "Unisoc SC9863A",
            ram: "3GB",
            storage: "64GB",
            battery: "5000mAh",
            camera: "8MP + AI Lens (rear), 5MP (front)",
            os: "Android 11 (Go edition), XOS 7.6",
            connectivity: "4G LTE, Wi-Fi 4, Bluetooth 4.2",
          },
          availability: "In Stock",
        },
        {
          id: "6",
          name: "Infinix Note 12 Pro",
          image: "/images/note12  pro.png",
          description:
            "A versatile smartphone with an AMOLED display and superior camera quality.",
          price: "$269",
          specifications: {
            display: "6.7-inch AMOLED",
            processor: "MediaTek Helio G99",
            ram: "8GB",
            storage: "128GB",
            battery: "5000mAh, 33W fast charging",
            camera: "108MP + 2MP + QVGA (rear), 16MP (front)",
            os: "Android 12, XOS 10.6",
            connectivity: "4G LTE, Wi-Fi 5, Bluetooth 5.0",
          },
          availability: "In Stock",
        },
        {
          id: "7",
          name: "Infinix Hot 50 Pro",
          image: "/images/hot 50 pro.jpg",
          description:
            "A budget smartphone with a large battery and decent camera setup.",
          price: "$159",
          specifications: {
            display: "6.82-inch IPS LCD",
            processor: "MediaTek Helio G85",
            ram: "4GB",
            storage: "64GB",
            battery: "6000mAh, 18W fast charging",
            camera: "50MP + AI Lens (rear), 8MP (front)",
            os: "Android 13, XOS 12.6",
            connectivity: "4G LTE, Wi-Fi 5, Bluetooth 5.0",
          },
          availability: "In Stock",
        },
        {
          id: "8",
          name: "Infinix Zero 10 Pro",
          image: "/images/zero10pro.jpg",
          description:
            "A stylish smartphone with a high-resolution display and excellent performance.",
          price: "$350",
          specifications: {
            display: "6.67-inch AMOLED, 120Hz",
            processor: "Snapdragon 730G",
            ram: "6GB",
            storage: "128GB",
            battery: "4500mAh, 33W fast charging",
            camera: "64MP + 8MP + 2MP (rear), 16MP (front)",
            os: "Android 11, XOS 7.6",
            connectivity: "4G LTE, Wi-Fi 6, Bluetooth 5.1",
          },
          availability: "In Stock",
        },
        {
          id: "9",
          name: "Infinix Hot 40",
          image: "/images/hot 40.jpeg",
          description: "A compact and affordable device with reliable performance.",
          price: "$119",
          specifications: {
            display: "6.6-inch IPS LCD",
            processor: "MediaTek Helio A22",
            ram: "2GB",
            storage: "32GB",
            battery: "5000mAh",
            camera: "13MP + AI Lens (rear), 5MP (front)",
            os: "Android 11, XOS 7.6",
            connectivity: "4G LTE, Wi-Fi 4, Bluetooth 4.2",
          },
          availability: "In Stock",
        },
        {
          id: "10",
          name: "Hot 40 pro",
          image: "/images/hot 40 pro.jpeg",
          description:
            "A budget phone with a vibrant display and excellent battery life.",
          price: "$179",
          specifications: {
            display: "6.8-inch IPS LCD, 90Hz",
            processor: "MediaTek Helio G85",
            ram: "6GB",
            storage: "128GB",
            battery: "5000mAh, 18W fast charging",
            camera: "50MP + AI Lens (rear), 8MP (front)",
            os: "Android 12, XOS 12.6",
            connectivity: "4G LTE, Wi-Fi 5, Bluetooth 5.0",
          },
          availability: "In Stock",
        },
      
        {
          id: "11",
          name: "Infinix Zero Ultra",
          image: "/images/zero-ultra.jpeg",
          description:
            "The flagship device with a 200 MP camera and ultra-fast charging.",
          price: "$499",
          specifications: {
            display: "6.8-inch AMOLED, 120Hz",
            processor: "MediaTek Dimensity 920",
            ram: "8GB",
            storage: "256GB",
            battery: "4500mAh, 180W fast charging",
            camera: "200MP + 13MP + 2MP (rear), 32MP (front)",
            os: "Android 12, XOS 10.6",
            connectivity: "5G, Wi-Fi 6, Bluetooth 5.2",
          },
          availability: "In Stock",
        },
        {
          id: "12",
          name: "Infinix Hot 40i",
          image: "/images/hot40i.jpeg",
          description: "An entry-level device for basic smartphone needs.",
          price: "$99",
          specifications: {
            display: "6.5-inch IPS LCD",
            processor: "Unisoc SC9863A",
            ram: "2GB",
            storage: "32GB",
            battery: "5000mAh",
            camera: "8MP + AI Lens (rear), 5MP (front)",
            os: "Android 11, XOS 7.6",
            connectivity: "4G LTE, Wi-Fi 4, Bluetooth 4.2",
          },
          availability: "In Stock",
        },
      ];
  // Add more models here


// export default function ModelPage() {
//   const params = useParams();
//   const { id } = params; // Access the `id` parameter

//   const model = models.find((model) => model.id === id);

//   if (!model) {
//     return <p>Model not found!</p>;
//   }

//   // State for comments
//   const [comments, setComments] = useState<{ text: string; rating: number }[]>([]);
//   const [newComment, setNewComment] = useState<string>("");
//   const [rating, setRating] = useState<number>(0);

//   // Load comments from localStorage
//   useEffect(() => {
//     const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`) || "[]");
//     setComments(savedComments);
//   }, [id]);

//   // Add a new comment
//   const addComment = () => {
//     if (newComment.trim() && rating > 0) {
//       const updatedComments = [...comments, { text: newComment, rating }];
//       setComments(updatedComments);
//       localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
//       setNewComment("");
//       setRating(0);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 mb-40">
//       <div className="flex flex-col md:flex-row items-center md:space-x-6 ">
//         {/* Left side: Image */}
//         {/* <div className="flex-shrink-0 mb-6 md:mb-0 md:mt-0 ">
//           <Image
//             src={model.image}
//             alt={model.name}
//             width={400}
//             height={400}
//             style={{ objectFit: "cover" }}
//           />
//         </div> */}

// <div className="flex-shrink-0 mb-6 md:mb-0 md:mt-0 animate-leftRightBounce">
//   <Image
//     src={model.image}
//     alt={model.name}
//     width={400}
//     height={400}
//     style={{ objectFit: "cover" }}
//   />
// </div>


//         {/* Right side: Model Information */}
//         <div className="flex-1 text-black mt-40">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600 font-playfair underline">
//             {model.name}
//           </h1>
//           <p className="mt-4 text-lg md:text-xl">{model.description}</p>
//           <p className="mt-2 text-xl font-semibold text-gray-800">
//             Price: <span className="text-green-600">{model.price}</span>
//           </p>
//           <p className="mt-2 text-base md:text-lg text-gray-600">
//             Availability: {model.availability}
//           </p>

//           {/* Specifications Section */}
//           <div className="mt-12 p-6 rounded-md shadow-md bg-white text-black">
//             <h2 className="text-2xl font-bold mb-4">Specifications</h2>
//             <ul className="list-disc ml-6 mt-2 text-base md:text-lg">
//               {Object.entries(model.specifications).map(([key, value]) => (
//                 <li key={key} className="capitalize mb-2">
//                   <strong>{key.replace(/_/g, " ")}:</strong> {value}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Comments Section */}
//       <div className="mt-12 p-6 rounded-lg shadow-lg bg-white text-black ">
//         <h2 className="text-2xl font-bold mb-4">Comments</h2>

//         {/* Display Comments */}
//         <ul className="list-disc ml-6">
//           {comments.length === 0 ? (
//             <p className="text-gray-600">No comments yet. Be the first to comment!</p>
//           ) : (
//             comments.map((comment, index) => (
//               <li key={index} className="mb-2">
//                 <p>{comment.text}</p>
//                 <div>
//                   {[...Array(5)].map((_, starIndex) => (
//                     <span
//                       key={starIndex}
//                       className={`inline-block text-yellow-500 ${
//                         starIndex < comment.rating ? "text-yellow-500" : "text-gray-300"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>

//         {/* Add Comment Form */}
//         <div className="mt-6">
//           <textarea
//             className="w-full p-2 border rounded-md"
//             rows={3}
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Write your comment here..."
//           ></textarea>
//           <div className="flex items-center mt-2">
//             {[...Array(5)].map((_, index) => (
//               <span
//                 key={index}
//                 className={`cursor-pointer text-2xl ${
//                   index < rating ? "text-yellow-500" : "text-gray-300"
//                 }`}
//                 onClick={() => setRating(index + 1)}
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//           <button
//             onClick={addComment}
//             className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-orange-700 shadow-lg"
//           >
//             Add Comment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function ModelPage() {
  const params = useParams();
  const { id } = params; // Access the `id` parameter

  const model = models.find((model) => model.id === id);

  // State for comments
  const [comments, setComments] = useState<{ text: string; rating: number }[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  // Load comments from localStorage
  useEffect(() => {
    if (model) {
      const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`) || "[]");
      setComments(savedComments);
    }
  }, [id, model]);

  // Add a new comment
  const addComment = () => {
    if (newComment.trim() && rating > 0) {
      const updatedComments = [...comments, { text: newComment, rating }];
      setComments(updatedComments);
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
      setNewComment("");
      setRating(0);
    }
  };

  if (!model) {
    return <p>Model not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mb-40">
      <div className="flex flex-col md:flex-row items-center md:space-x-6 ">
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mt-0 animate-leftRightBounce">
          <Image
            src={model.image}
            alt={model.name}
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex-1 text-black mt-40">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600 font-playfair underline">
            {model.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl">{model.description}</p>
          <p className="mt-2 text-xl font-semibold text-gray-800">
            Price: <span className="text-green-600">{model.price}</span>
          </p>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            Availability: {model.availability}
          </p>

          <div className="mt-12 p-6 rounded-md shadow-md bg-white text-black">
            <h2 className="text-2xl font-bold mb-4">Specifications</h2>
            <ul className="list-disc ml-6 mt-2 text-base md:text-lg">
              {Object.entries(model.specifications).map(([key, value]) => (
                <li key={key} className="capitalize mb-2">
                  <strong>{key.replace(/_/g, " ")}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg shadow-lg bg-white text-black ">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <ul className="list-disc ml-6">
          {comments.length === 0 ? (
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <li key={index} className="mb-2">
                <p>{comment.text}</p>
                <div>
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`inline-block text-yellow-500 ${
                        starIndex < comment.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="mt-6">
          <textarea
            className="w-full p-2 border rounded-md"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
          ></textarea>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer text-2xl ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setRating(index + 1)}
              >
                ★
              </span>
            ))}
          </div>
          <button
            onClick={addComment}
            className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-orange-700 shadow-lg"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}
