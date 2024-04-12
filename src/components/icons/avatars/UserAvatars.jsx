import React from 'react';
import "./UserAvatar.css"

const UserAvatar = ({ userName }) => {
  const handleImageInputChange = () => {
    document.getElementById('imageInput').click();
  };

  return (
      <div className="profileImageContainer">
          <div className="initials" onClick={handleImageInputChange}>
            { userName.charAt(0).toUpperCase()}
          </div>
      </div>
  );
};

export default UserAvatar;
