import React, { useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const ColorBox: React.FC = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleChangeColor = () => {
    // Passer à la couleur suivante dans le tableau
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  // Obtenir la couleur actuelle et la couleur suivante
  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];

  return (
    <div style={{ backgroundColor: currentColor, padding: '20px', width: '150px', height: '150px', textAlign: 'center', color: '#fff', margin: '10px' }}>
      <button onClick={handleChangeColor} style={{ marginBottom: '10px' }}>
        {nextColor}
      </button>
      <p>{currentColor}</p>
    </div>
  );
};

export default ColorBox;
