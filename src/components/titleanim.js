import SplitText from 'react-pose-text';
import React from 'react';

const charPoses = {

  exit: { opacity: 0, y: 2},
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,

  }
};

function SplitText2() {
    return(
    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        BCIT Computer Systems Technology Student

      </SplitText>
  )
}

export default SplitText2;
