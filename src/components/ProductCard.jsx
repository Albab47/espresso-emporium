/* eslint-disable react/prop-types */
import { IoEye } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const ProductCard = ({coffee}) => {
  const { _id, name, chef, taste, photo } = coffee;

  return (
    <div className="card card-side py-7 bg-[#F5F4F1]">
      <figure className="w-1/3">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full px-8 justify-between items-center gap-6">
        <div>
          <h2 className="text-lg">
            <span className="font-semibold">Name:</span> {name}
          </h2>
          <h2 className="text-lg">
            <span className="font-semibold">Chef:</span> {chef}
          </h2>
          <p className="text-lg">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link to={`/coffees/${_id}`} className="btn btn-square bg-[#D2B48C] text-white">
            <IoEye size={20} />
          </Link>
          <Link 
            to={`/update-coffee/${_id}`}
            className="btn btn-square bg-gray-700 text-white"
          >
            <MdEdit size={20} />
          </Link>
          <button
            className="btn btn-square bg-red-500 text-white"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
