import React, { useState } from 'react';
import { FaPen, FaTrash } from '../Icons';
import "./AdminAvatar.css"

const AdminIcon = ({ userName }) => {

  const [userImage, setUserImage] = useState(null);
  const [hovering, setHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUserImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmRemoval = () => {
    setUserImage(null);
    closeModal();
  };

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const handleImageInputChange = () => {
    document.getElementById('imageInput').click();
  };

  return (
    <div className="userProfileContainer" >
      <div
        className="profileImageContainer"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{backgroundColor:"black"}}
      >
        {userImage ? (
          <>
            <img src={userImage} alt={`${userName}'s avatar`} />
            {hovering && (
              <>
                <div className="iconDelete" onClick={openModal}>
                  <FaTrash />
                </div>
                <div className="iconChange" onClick={handleImageInputChange}>
                  <FaPen />
                </div>
              </>
            )}
          </>
        ) : (
          <div className="initials" onClick={handleImageInputChange} >
            {hovering ? '+' : userName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <input type="file" onChange={handleImageChange} className="fileInput" id="imageInput" style={{ display: 'none' }} />
      {isModalOpen && (
        <div onClose={closeModal} className="deleteModal">
          <p>Delete this image?</p>
          <button onClick={confirmRemoval} >Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      )}
    </div>
  );
};

export default AdminIcon;
