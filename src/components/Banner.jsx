import Button from "./Button";

const Banner = () => {
  return (
    <section className="bg-banner-bg h-[50rem]">
      <div className="container mx-auto px-4 pt-64 h-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-7xl font-display mb-3">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-6">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          {/* <button className="bg-primary px-4 py-1 rounded-md font-display text-xl">
            Learn more
          </button> */}
          <Button>Learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
