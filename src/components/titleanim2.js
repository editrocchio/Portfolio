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

function SplitText3() {
    return(
    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        Agile Developer Intern

      </SplitText>
  )
}

export default SplitText3;
