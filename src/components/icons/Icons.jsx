import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, 
        faList, 
        faUser, 
        faGlobe, 
        faRightFromBracket, 
        faChartColumn, 
        faPen, 
        faTrash, 
        faUserTie, 
        faCheck, 
        faTimes,
        faCartShopping,
        faRightToBracket,
        faBagShopping,
        faTruck,
        faClockRotateLeft
  } from '@fortawesome/free-solid-svg-icons';


function GoHomeIcon({ color }) {
  return (
    <div 
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '30px',
        textDecoration: 'none',
        margin: '20px',
        transition: 'color 0.3s ease', 
        color: color ,
      }}
    >
      <FontAwesomeIcon icon={faHome} />
    </div>
  );
}

function PyramidMenuIcon() {
  return (
    <>
      <FontAwesomeIcon icon={faList} className="fa-light fa-List" />
    </>
  );
}

function UserIcon() {
  return (
    <>
      <FontAwesomeIcon icon={faUser} className="fa-light fa-user" />
    </>
  );
}


function GlobeIcon() {
  return (
    <div
     style={{
        position: 'absolute',
        fontSize: '30px',
        textDecoration: 'none',
        margin: '20px',
        color: "white" ,
      }}
    >
      <FontAwesomeIcon icon={faGlobe} />
    </div>
  );
}

function LogIn ()  {
  return (
    <div
      style={{
        color:"white"
      }}
    >
      <FontAwesomeIcon icon={faRightToBracket} />
    </div>
  );
};

function LogOut () {
  return (
    <div
        style={{
        color:"white"
    }}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </div>
  );
};

function ChartColumn() {
  return (
    <div>
      <FontAwesomeIcon icon={faChartColumn} />
    </div>
  );
};

function FaPen () {
  return (
    <div>
      <FontAwesomeIcon icon={faPen} />
    </div>
  );
};

function FaTrash () {
  return (
    <div>
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};

function AdminIcon () {
  return (
    <div>
      <FontAwesomeIcon icon={faUserTie} />
    </div>
  );
};

function FaCheck () {
  return (
    <div
      style={{color: "green"}}
    >
      <FontAwesomeIcon icon={faCheck} />
    </div>
  );
};

function FaTimes () {
  return (
    <div
      style={{color: "black"}}
    >
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};


function FaCartShopping () {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
};

function BagShopping () {
  return (
    <div>
      <FontAwesomeIcon icon={faBagShopping} />
    </div>
  );
};


function Deliveries () {
  return (
    <div>
      <FontAwesomeIcon icon={faTruck} />
    </div>
  );
};

function History () {
  return (
    <div>
      <FontAwesomeIcon icon={faClockRotateLeft} />
    </div>
  );
};


export { GoHomeIcon, PyramidMenuIcon, UserIcon, GlobeIcon, LogOut, LogIn, ChartColumn, FaPen, FaTrash, AdminIcon, FaCheck, FaTimes, FaCartShopping, BagShopping, Deliveries, History };






