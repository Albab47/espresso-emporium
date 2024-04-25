/* eslint-disable react/prop-types */
import { IoEye } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ coffee, refetch }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handleDeleteCoffee = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch()
            }
          });
      }
    });
  };

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
          <Link
            to={`/coffees/${_id}`}
            className="btn btn-square bg-[#D2B48C] text-white"
          >
            <IoEye size={20} />
          </Link>
          <Link
            to={`/update-coffee/${_id}`}
            className="btn btn-square bg-gray-700 text-white"
          >
            <MdEdit size={20} />
          </Link>
          <button
            onClick={handleDeleteCoffee}
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
