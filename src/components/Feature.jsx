import PropTypes from "prop-types";

const Feature = ({ image, title, lead }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h2 className="font-display text-3xl mt-4 mb-2">{title}</h2>
      <p>{lead}</p>
    </div>
  );
};

Feature.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.string,
};

export default Feature;
