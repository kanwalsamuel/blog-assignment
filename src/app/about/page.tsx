// "use client";

// import Image from "next/image"; // Importing the Image component to handle images efficiently

// export default function About() {
//   return (
//     <div
//       className="bg-cover bg-center min-h-screen relative"
//       style={{ backgroundImage: "url('/images/bg%20infiinx.jpg')" }}
//     >
//       {/* Overlay to reduce background image opacity */}
//       <div className="absolute inset-0 bg-black opacity-40"></div>

//       {/* About Header */}
//       <header className="bg-yellow-600 mt-2 text-white text-center py-16 px-4 shadow-lg border-b-2 border-orange-600 relative z-10">
//         <h1 className="text-4xl font-extrabold mb-4">About Infinix Store</h1>
//         <p className="text-xl md:text-2xl">
//           Discover cutting-edge mobile devices and innovations at the Infinix Store
//         </p>
//       </header>

//       {/* Brand Story Section */}
//       <section className="max-w-7xl mx-auto py-16 px-4 text-center border-2 border-gray-300 rounded-lg shadow-lg mb-12 relative z-10">
//         <h2 className="text-3xl font-bold mb-6 text-orange-600">Our Story</h2>
//         <p className="text-lg font-medium text-white max-w-3xl mx-auto">
//           Infinix is a global leader in smartphone technology, offering a combination of performance, style, and innovation. 
//           Our mission is to deliver high-quality, affordable smartphones that enhance the lives of our customers. 
//           With cutting-edge designs and the latest technology, Infinix continues to push boundaries, setting new standards in the mobile industry.
//         </p>
//       </section>

//       {/* Vision and Mission Section */}
//       <section className="py-16 border-2 border-gray-300 rounded-lg shadow-lg mb-12 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6 text-orange-600 ">Our Vision & Mission</h2>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="border-2 border-gray-300 rounded-lg shadow-md p-6">
//               <h3 className="text-2xl font-semibold text-black underline mb-4">Our Vision</h3>
//               <p className="text-xl font-medium">
//                 To be a leader in mobile technology, transforming the way people experience smartphones with products that are innovative, 
//                 user-friendly, and affordable.
//               </p>
//             </div>
//             <div className="border-2 border-gray-300 rounded-lg shadow-md p-6">
//             <h3 className="text-2xl font-semibold text-black sm:text-orange-600 underline mb-4">
//   Our Mission
// </h3>


//               <p className="text-xl font-medium">
//                 Our mission is to provide high-performance mobile devices with cutting-edge features, stunning designs, and exceptional user experiences.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Products Section */}
//       <section className="py-16 border-2 border-gray-300 rounded-lg shadow-lg relative z-10">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6 text-orange-600">Our Products</h2>
//           <p className="text-lg font-medium text-white mb-8">
//             Infinix smartphones are designed to cater to the modern user, blending performance, style, and cutting-edge technology. 
//             Whether you're a professional or a tech enthusiast, there's an Infinix device that suits your needs.
//           </p>

//           {/* Product Features List */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
//             {/* Card 1 */}
//             <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out border-2 border-gray-300">
//               <div className="relative w-full h-80 mb-4">
//                 <Image
//                   src="/images/hot-301.jpg" // Replace with your image source
//                   alt="Stunning Designs"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-blue-800 mb-4">Stunning Designs</h3>
//               <p className="text-gray-700">
//                 Our smartphones are designed with elegance and sophistication, making sure that you not only get powerful performance but also a stylish device.
//               </p>
//             </div>
//             {/* Card 2 */}
//             <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out border-2 border-gray-300">
//               <div className="relative w-full h-80 mb-4">
//                 <Image
//                   src="/images/zero.jpg" // Replace with your image source
//                   alt="Advanced Performance"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-blue-800 mb-4">Advanced Performance</h3>
//               <p className="text-gray-700">
//                 Infinix devices are equipped with the latest processors and technology to deliver fast and smooth performance for all your tasks.
//               </p>
//             </div>
//             {/* Card 3 */}
//             <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border-1 border-gray-500">
//               <div className="relative w-full h-80 mb-4">
//                 <Image
//                   src="/images/note30.jpg" // Replace with your image source
//                   alt="Exceptional Cameras"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-blue-800 mb-4">Exceptional Cameras</h3>
//               <p className="text-gray-700">
//                 Capture beautiful moments with Infinix’s state-of-the-art camera technology, designed for photography enthusiasts and creators.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import Image from "next/image"; // Importing the Image component to handle images efficiently

export default function About() {
  return (
    <div
      className="bg-cover bg-center min-h-screen relative  animate-bgmove"
      style={{ backgroundImage: "url(/images/bg-img-2.jpg)" }} // Escaped apostrophe
    >
      {/* Overlay to reduce background image opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* About Header */}
      <header className="bg-yellow-600 mt-2 text-white text-center py-16 px-4 shadow-lg border-b-2 border-orange-600 relative z-10">
        <h1 className="text-4xl font-extrabold mb-4">About Infinix Store</h1>
        <p className="text-xl md:text-2xl">
          Discover cutting-edge mobile devices and innovations at the Infinix Store
        </p>
      </header>

      {/* Brand Story Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 text-center border-2 border-gray-300 rounded-lg shadow-lg mb-12 relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">Our Story</h2>
        <p className="text-lg font-medium text-white max-w-3xl mx-auto">
          Infinix is a global leader in smartphone technology, offering a combination of performance, style, and innovation. 
          Our mission is to deliver high-quality, affordable smartphones that enhance the lives of our customers. 
          With cutting-edge designs and the latest technology, Infinix continues to push boundaries, setting new standards in the mobile industry.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 border-2 border-gray-300 rounded-lg shadow-lg mb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-orange-600 ">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-2 border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-black underline mb-4">Our Vision</h3>
              <p className="text-xl font-medium">
                To be a leader in mobile technology, transforming the way people experience smartphones with products that are innovative, 
                user-friendly, and affordable.
              </p>
            </div>
            <div className="border-2 border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-black sm:text-orange-600 underline mb-4">
                Our Mission
              </h3>
              <p className="text-xl font-medium">
                Our mission is to provide high-performance mobile devices with cutting-edge features, stunning designs, and exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 border-2 border-gray-300 rounded-lg shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">Our Products</h2>
          <p className="text-lg font-medium text-white mb-8">
            Infinix smartphones are designed to cater to the modern user, blending performance, style, and cutting-edge technology. 
            Whether you&aposre a professional or a tech enthusiast, there&apos an Infinix device that suits your needs.
          </p>

          {/* Product Features List */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out border-2 border-gray-300">
              <div className="relative w-full h-80 mb-4">
                <Image
                  src="/images/hot-301.jpg" // Replace with your image source
                  alt="Stunning Designs"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Stunning Designs</h3>
              <p className="text-gray-700">
                Our smartphones are designed with elegance and sophistication, making sure that you not only get powerful performance but also a stylish device.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out border-2 border-gray-300">
              <div className="relative w-full h-80 mb-4">
                <Image
                  src="/images/zero.jpg" // Replace with your image source
                  alt="Advanced Performance"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Advanced Performance</h3>
              <p className="text-gray-700">
                Infinix devices are equipped with the latest processors and technology to deliver fast and smooth performance for all your tasks.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border-1 border-gray-500">
              <div className="relative w-full h-80 mb-4">
                <Image
                  src="/images/note30.jpg" // Replace with your image source
                  alt="Exceptional Cameras"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Exceptional Cameras</h3>
              <p className="text-gray-700">
                Capture beautiful moments with Infinix’s state-of-the-art camera technology, designed for photography enthusiasts and creators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
