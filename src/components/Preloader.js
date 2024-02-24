import React from 'react';

const Preloader = ({ loading }) => {
  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    );
  }

  return null;
};

export default Preloader;
