import PropTypes from "prop-types";
import Title from "./Title";

const SectionHeader = ({ subtitle, title, children }) => {
  return (
    <header className="text-center">
      <p className="mb-2">{subtitle}</p>
      <Title fontSize='4xl' color="amber-950">
        {title}
      </Title>
      {children}
    </header>
  );
};

SectionHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionHeader;
