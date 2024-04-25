import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = ({coffees}) => {
  
  return (
    <section className="my-28">
      <div className="container mx-auto px-4">
        {/* Product section header */}
        <SectionHeader
          subtitle="--- Sip & Savor ---"
          title="Our Popular Products"
        >
          <Link to="/add-coffee">
            <Button>
              Add Coffee <FaCoffee className="ml-1 inline size-4" />
            </Button>
          </Link>
        </SectionHeader>

        {/* Product container */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {coffees.map(coffee => (
            <ProductCard key={coffee._id} coffee={coffee} />
          ))}
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  coffees: PropTypes.array
};

export default Products;
