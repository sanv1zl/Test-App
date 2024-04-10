import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const AllIconsComponent = () => {
  // Getting all icons
  const solidIcons = Object.keys(fas).map(iconName => fas[iconName]);
  const regularIcons = Object.keys(far).map(iconName => far[iconName]);
  const brandIcons = Object.keys(fab).map(iconName => fab[iconName]);

  const allIcons = [...solidIcons, ...regularIcons, ...brandIcons];

  // State for randomly selected icon
  const [randomIcon, setRandomIcon] = useState(null);

  // Function to get random icon with 3 seconds delay
  const selectRandomIcon = () => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allIcons.length);
      setRandomIcon(allIcons[randomIndex]);
    }, 3000);
  };

  return (
    <div className="centered">
      {randomIcon && (
        <div>
          <FontAwesomeIcon icon={randomIcon} size="4x" />
        </div>
      )}
      <button onClick={selectRandomIcon}>Get Random Icon</button>
    </div>
  );
};

export default AllIconsComponent;