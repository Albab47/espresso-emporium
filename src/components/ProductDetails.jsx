import { useLoaderData } from "react-router-dom";
import BackToHomeNav from "./BackToHomeNav";
import Title from "./Title";

const ProductDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <section className="md:max-w-7xl mx-auto px-4">
      <BackToHomeNav />

      <div className="lg:py-14 flex flex-col items-center bg-[#F4F3F0] rounded-lg md:flex-row dark:bg-gray-800 dark:hover:bg-gray-700">
        {/* image */}
        <img
          className="object-contain w-full h-96 md:h-auto lg:ml-40 md:w-80"
          src={photo}
          alt={name + "image"}
        />
        {/* content */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <Title>Niceties</Title>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Name:</span>
              <span className="text-light"> {name}</span>
            </p>
            <p>
              <span className="font-semibold">Chef:</span>
              <span className="text-light"> {chef}</span>
            </p>
            <p>
              <span className="font-semibold">Supplier:</span>
              <span className="text-light"> {supplier}</span>
            </p>
            <p>
              <span className="font-semibold">Taste:</span>
              <span className="text-light"> {taste}</span>
            </p>
            <p>
              <span className="font-semibold">Category:</span>
              <span className="text-light"> {category}</span>
            </p>
            <p>
              <span className="font-semibold">Details:</span>
              <span className="text-light"> {details}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
