import React, { useState } from 'react';

const SkillProgressBar = () => {
  const [level, setLevel] = useState(0);
  const maxLevel = 10;
  const animationSpeed = 500; // in milliseconds

  return (
    <div className="skill-progress-bar">
      <div
        className="progress-bar"
        style={{
          width: `${(level / maxLevel) * 100}%`,
          transition: `width ${animationSpeed}ms`,
        }}
      ></div>
    </div>
  );
};

export default SkillProgressBar;
