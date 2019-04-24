import SplitText from 'react-pose-text';
import React from 'react';

const charPoses = {
  exit: { opacity: 0, y: 2 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 60
  }
};

export default () => (
    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        Emilio Ditrocchio
      </SplitText>

);
