import PropTypes from "prop-types";

const Title = ({fontSize='4xl', children }) => {
  return (
    <h1 className={`text-${fontSize} text-amber-950 font-display mb-3`}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.string,
};

export default Title;
