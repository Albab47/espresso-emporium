// import Swal from "sweetalert2";
import Button from "../components/Button";
import Title from "../components/Title";
import BackToHomeNav from "../components/BackToHomeNav";

const AddCoffeePage = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    fetch('https://espresso-emporium-server-zeta.vercel.app/coffees', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
  }
    
  return (
    <section className="">
      {/* Form card */}
      <div className="max-w-7xl mx-auto px-5">
        <BackToHomeNav />

        {/* Form container */}
        <div className="bg-[#F4F3F0] rounded-xl py-14">
          {/* form title and lead */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Title>Add New Coffee</Title>
            <p className="text-lg text-[#1B1A1AB2]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          {/* Coffee add form */}
          <form
            onSubmit={handleAddCoffee}
            className="grid sm:grid-cols-2 gap-6 p-4 mt-8 max-w-5xl mx-auto"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">
                  Coffee Name
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Chef</span>
              </div>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="input w-full"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">
                  Supplier Name
                </span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input w-full"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input w-full"
                required
              />
            </label>

            <label className="form-control w-full col-span-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input w-full"
                required
              />
            </label>
            <Button type='submit' className="col-span-full">Add Coffee</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCoffeePage;
