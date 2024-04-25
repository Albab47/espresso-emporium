import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BackToHomeNav = () => {
    return (
        <header className="py-8">
          <Link to={"/"} className="text-xl">
            <FaArrowLeftLong className="inline mr-3" /> Back to Home
          </Link>
        </header>
    );
};

export default BackToHomeNav;