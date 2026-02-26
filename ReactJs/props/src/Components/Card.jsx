import React from "react";

const Card = ({user, imageLink, description}) => {
    console.log(imageLink, description)
  return (
    <div>
      <div className="card">
        <img
          src={imageLink}
          alt=""
        />
        <h1>{user}</h1>
        <p>
          {description}
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
