import Feature from "./Feature";
import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";

const Features = () => {
  return (
    <section className="bg-secondary shadow-md py-14">
      <div className="container mx-auto px-4 grid justify-center gap-7 sm:grid-cols-2 lg:grid-cols-4">
        <Feature
          image={icon1}
          title="Awesome Aroma"
          lead="You will definitely be a fan of the design & aroma of your coffee"
        />
        <Feature 
          image={icon2}
          title="High Quality"
          lead="We served the coffee to you maintaining the best quality"
        />
        <Feature
          image={icon3}
          title="Pure Grades"
          lead="The coffee is made of the green coffee beans which you will love"
        />
        <Feature 
          image={icon4}
          title="Proper Roasting"
          lead="Your coffee is brewed by first roasting the green coffee beans"
        />
      </div>
    </section>
  );
};

export default Features;
