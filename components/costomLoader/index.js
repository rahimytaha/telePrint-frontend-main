import React from "react";

const CustomLoader = () => {
  const letters = [
    { char: 'T', color: '#009EE3' }, // Adjust the color as per your logo
    { char: 'E', color: '#FFED00' },
    { char: 'L', color: '#E5007D' },
    { char: 'E', color: '#009EE3' },
    { char: 'p', color: '#FFED00' },
    { char: 'r', color: '#E5007D' },
    { char: 'i', color: '#009EE3' },
    { char: 'n', color: '#FFED00' },
    { char: 't', color: '#E5007D' },
  ];

  return (
    <div id="load">
      {letters.map((letter, index) => (
        <div
          key={index}
          style={{
            animationDelay: `${index * 0.2}s`,
            color: letter.color,
          }}
        >
          {letter.char}
        </div>
      ))}
    </div>
  );
};

export default CustomLoader;
