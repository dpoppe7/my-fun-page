import React from 'react';
import './Landing.css';
import Square_yellowcolors from '../assets/square_yellowcolors.png';
import Square_pink from '../assets/square_pink.png';
import Square_orange from '../assets/square_orange.png';
import Square_green from '../assets/square_green.png';
import Rect_green from '../assets/rect_green.png';
import Rect_orange from '../assets/rect_orange.png';
import Round_yellow from '../assets/round_yellow.png';
import Round_blue from '../assets/round_blue.png';
import Round_pink from '../assets/round_pink.png';
import Round_group_purple from '../assets/round_group_purple.png';
import Round_group_green from '../assets/round_group_green.png';
import Round_group_brown from '../assets/round_group_brown.png';
import Rect_small_blue from '../assets/rect_small_blue.png';
import Rect_small_yellow from '../assets/rect_small_yellow.png';
import Trig_green from '../assets/trig_green.png';
import Trig_blue from '../assets/trig_blue.png';
import Trig_lightblue from '../assets/trig_lightblue.png';
import Trig_red from '../assets/trig_red.png';





// Defining all 'shapes' types:
/* 
  TL - Top Left
  BL - Bottom Left
  TR - Top Right
  BR - Bottom Right
*/
const shapes = [
  { id: 1, type: 'TLSquare_yellowcolors', image: Square_yellowcolors, top: '18%', left: '15%', width: '4rem' },
  { id: 2, type: 'TLSquare_pink', image: Square_pink, top: '26%', left: '31%', width: '3rem' },
  { id: 2, type: 'TLRect_green', image: Rect_green, top: '27%', left: '9%', width: '6rem' },

  { id: 1, type: 'BLSquare_yellowcolors_rotated', image: Square_yellowcolors, top: '84%', left: '18%', width: '3rem', rotate: '45deg' },
  { id: 2, type: 'BLSquare_orange', image: Square_orange, top: '51%', left: '15%', width: '3.6rem' },
  { id: 2, type: 'BLSquare_pink', image: Square_pink, top: '79%', left: '-0.5%', width: '4rem', rotate: '45deg' },
  { id: 2, type: 'BLSquare_green', image: Square_green, top: '45%', left: '-1%', width: '3.6rem' },
  { id: 2, type: 'BLRect_orange', image: Rect_orange, top: '64%', left: '10%', width: '5.5rem' },
  { id: 2, type: 'BLRound_yellow', image: Round_yellow, top: '63%', left: '0.5%', width: '4rem' },
  { id: 2, type: 'BLRound_blue', image: Round_blue, top: '87%', left: '8%', width: '3.2rem' },
  { id: 2, type: 'BLRound_blue2', image: Round_blue, top: '40%', left: '18%', width: '3.2rem' },
  { id: 2, type: 'BLRound_pink', image: Round_pink, top: '89%', left: '22%', width: '4rem' },
  { id: 2, type: 'BLRound_pink2', image: Round_pink, top: '40%', left: '7%', width: '4.1rem' },
  { id: 2, type: 'BLRound_group_green', image: Round_group_green, top: '63%', left: '21%', width: '1.5rem' },
  { id: 2, type: 'BLRound_group_purple', image: Round_group_purple, top: '46%', left: '5%', width: '1.5rem' },
  { id: 2, type: 'BLRound_group_brown', image: Round_group_brown, top: '80%', left: '9%', width: '5.5rem' },
  { id: 2, type: 'BLRect_small_blue', image: Rect_small_blue, top: '74%', left: '5%', width: '4rem' },
  { id: 2, type: 'BLRect_small_yellow', image: Rect_small_yellow, top: '88%', left: '14%', width: '2rem' },
  { id: 2, type: 'BLTrig_green', image: Trig_green, top: '92%', left: '3%', width: '3rem' },
  { id: 2, type: 'BLTrig_blue', image: Trig_blue, top: '75%', left: '18%', width: '2.5rem' },
  { id: 2, type: 'BLTrig_lightblue', image: Trig_lightblue, top: '53%', left: '9%', width: '2.5rem' },
  { id: 2, type: 'BLTrig_red', image: Trig_red, top: '50%', left: '21%', width: '2.5rem' },


];

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Shapes-container">
        {shapes.map((shape) => (
          <img
            key={shape.id}
            src={shape.image}
            alt={shape.type}
            className={`Shape-img ${shape.type}`}
            style={{ top: shape.top, left: shape.left, width: shape.width, rotate:shape.rotate }}
          />
        ))}
      </div>
      {/* <div className="Horizontal-line"></div>
      <div className="Vertical-line"></div> */}
      <header className="Landing-header">
        Shapes
      </header>
    </div>
  );
}

export default Landing;
