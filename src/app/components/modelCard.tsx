


import Image from "next/image";
import Link from "next/link";

type Model = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export default function ModelCard({ model }: { model: Model }) {

  

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-80 mt-8">
        <Image
          src={model.image}
          alt={model.name}
          layout="fill"
           objectFit="cover"
          className="rounded-t-lg"
        />
      </div> 
      <div className="p-4 ">
        <h2 className="text-[22px] font-bold mb-2 text-orange-600 font-playfair">{model.name}</h2>
        <p className="text-gray-600">{model.description}</p>
        <div className="mt-4">
          <Link href={`/models/${model.id}`}>
            <div className="cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-center">
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
