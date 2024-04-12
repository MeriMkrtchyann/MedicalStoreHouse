import React from 'react';
import "./UserAvatar.css"

const UserAvatar = ({ userName }) => {

  return (
      <div className="userIcon">
          <div className="initials" >
            { userName.charAt(0).toUpperCase()}
          </div>
      </div>
  );
};

export default UserAvatar;
