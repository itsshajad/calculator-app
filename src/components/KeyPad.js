import React from 'react';
import buttonSound from '../Mouse_Click_4-fesliyanstudios.com.mp3';

const KeyPad = ({ findButton }) => {
  const buttonPressed = (e) => {
    findButton(e.target.name);
    var mySound = new Audio(buttonSound);
    mySound.play();

    if (e.button === 0) {
      // rightClickActive(e);
      // rightClickDeactive(e);
    }
  };

  return (
    <div className="keypads">
      <button name="CE" onClick={buttonPressed}>
        CE
      </button>
      <button name="/" onClick={buttonPressed}>
        /
      </button>
      <button name="%" onClick={buttonPressed}>
        %
      </button>
      <button name="X" onClick={buttonPressed}>
        {/* &#x2715;  */}⌫
      </button>
      <button name="7" onClick={buttonPressed}>
        7
      </button>
      <button name="8" onClick={buttonPressed}>
        8
      </button>
      <button name="9" onClick={buttonPressed}>
        9
      </button>
      <button name="*" onClick={buttonPressed}>
        &#x2715;
      </button>
      <button name="4" onClick={buttonPressed}>
        4
      </button>
      <button name="5" onClick={buttonPressed}>
        5
      </button>
      <button name="6" onClick={buttonPressed}>
        6
      </button>
      <button name="-" onClick={buttonPressed}>
        -
      </button>
      <button name="1" onClick={buttonPressed}>
        1
      </button>
      <button name="2" onClick={buttonPressed}>
        2
      </button>
      <button name="3" onClick={buttonPressed}>
        3
      </button>
      <button name="+" onClick={buttonPressed}>
        +
      </button>
      <button name="." onClick={buttonPressed}>
        .
      </button>
      <button name="0" onClick={buttonPressed}>
        0
      </button>
      <button name="=" onClick={buttonPressed}>
        =
      </button>
    </div>
  );
};

export default KeyPad;
