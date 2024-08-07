import React from 'react';
import './Landing.css';
import Square_yellowcolors from '../assets/square_yellowcolors.png';
import Square_bluecolors from '../assets/square_bluecolors.png';
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
import Rect_small_pink from '../assets/rect_small_pink.png';
import Trig_green from '../assets/trig_green.png';
import Trig_blue from '../assets/trig_blue.png';
import Trig_lightblue from '../assets/trig_lightblue.png';
import Trig_red from '../assets/trig_red.png';
import Trig_orange from '../assets/trig_orange.png';
import Trig_yellow from '../assets/trig_yellow.png';
import Trig_dkgreen from '../assets/trig_dkgreen.png';

// Defining all 'shapes' types:
/* 
  TL - Top Left
  BL - Bottom Left
  TR - Top Right
  BR - Bottom Right
  C - Center
*/
const shapes = [
  { id: 1, type: 'TLSquare_yellowcolors', image: Square_yellowcolors, top: '20%', left: '15%', width: '4rem' },
  { id: 1, type: 'TLSquare_bluecolors', image: Square_bluecolors, top: '7%', left: '10%', width: '4rem' },
  { id: 2, type: 'TLSquare_pink', image: Square_pink, top: '26%', left: '26%', width: '3rem' },
  { id: 2, type: 'TLSquare_orange1', image: Square_orange, top: '3%', left: '1%', width: '3rem' },
  { id: 2, type: 'TLSquare_orange2', image: Square_orange, top: '4%', left: '30%', width: '3.5rem', rotate: '-45deg' },
  { id: 2, type: 'TLRect_green', image: Rect_green, top: '30%', left: '9%', width: '6rem' },
  { id: 2, type: 'TLRect_small_yellow1', image: Rect_small_yellow, top: '37%', left: '3%', width: '1.5rem', height: '5rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_yellow2', image: Rect_small_yellow, top: '20%', left: '6%', width: '2rem', height: '5rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_yellow3', image: Rect_small_yellow, top: '-3%', left: '26%', width: '2rem', height: '4rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_pink', image: Rect_small_pink, top: '1%', left: '6.5%', width: '1.5rem', height: '4rem' },
  { id: 2, type: 'TLRect_small_pink2', image: Rect_small_pink, top: '31%', left: '21%', width: '1.5rem', height: '4rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_blue', image: Rect_small_blue, top: '12%', left: '23%', width: '4.4rem', height: '2rem'},
  { id: 2, type: 'TLRound_blue', image: Round_blue, top: '32%', left: '-1%', width: '3.2rem' },
  { id: 2, type: 'TLRound_yellow', image: Round_yellow, top: '15%', left: '8%', width: '3rem' },
  { id: 2, type: 'TLRound_yellow2', image: Round_yellow, top: '19%', left: '31%', width: '3rem' },
  { id: 2, type: 'TLRound_pink1', image: Round_pink, top: '-1%', left: '18%', width: '4.5rem' },
  { id: 2, type: 'TLTrig_blue', image: Trig_blue, top: '32%', left: '4.5%', width: '2.5rem', rotate: '-90deg' },
  { id: 2, type: 'TLTrig_orange', image: Trig_orange, top: '15%', left: '3%', width: '2.5rem' },
  { id: 2, type: 'TLTrig_yellow', image: Trig_yellow, top: '11%', left: '18%', width: '2rem' },
  { id: 2, type: 'TLTrig_dkgreen', image: Trig_dkgreen, top: '26%', left: '22.5%', width: '2rem' },
  { id: 2, type: 'TLRound_group_brown', image: Round_group_brown, top: '21%', left: '-3%', width: '5.5rem', rotate: '90deg' },
  { id: 2, type: 'TLRound_group_purple', image: Round_group_purple, top: '-4%', left: '13%', width: '1.5rem', rotate: '90deg' },
  { id: 2, type: 'TLRound_group_green', image: Round_group_green, top: '13%', left: '25%', width: '1.5rem', rotate: '90deg' },

  { id: 1, type: 'BLSquare_yellowcolors_rotated', image: Square_yellowcolors, top: '85%', left: '18%', width: '3rem', rotate: '45deg' },
  { id: 2, type: 'BLSquare_orange', image: Square_orange, top: '54%', left: '15%', width: '3.6rem' },
  { id: 2, type: 'BLSquare_pink', image: Square_pink, top: '81%', left: '-0.5%', width: '4rem', rotate: '45deg' },
  { id: 2, type: 'BLSquare_green', image: Square_green, top: '48%', left: '-1%', width: '3.6rem' },
  { id: 2, type: 'BLRect_orange', image: Rect_orange, top: '67%', left: '10%', width: '5.5rem' },
  { id: 2, type: 'BLRound_yellow', image: Round_yellow, top: '65%', left: '0.5%', width: '4rem' },
  { id: 2, type: 'BLRound_blue', image: Round_blue, top: '89%', left: '8%', width: '3.2rem' },
  { id: 2, type: 'BLRound_blue2', image: Round_blue, top: '43%', left: '18%', width: '3.2rem' },
  { id: 2, type: 'BLRound_pink', image: Round_pink, top: '89%', left: '22%', width: '4rem' },
  { id: 2, type: 'BLRound_pink2', image: Round_pink, top: '44%', left: '7%', width: '4.1rem' },
  { id: 2, type: 'BLRound_group_green', image: Round_group_green, top: '63%', left: '21%', width: '1.5rem' },
  { id: 2, type: 'BLRound_group_purple', image: Round_group_purple, top: '49%', left: '5%', width: '1.5rem' },
  { id: 2, type: 'BLRound_group_brown', image: Round_group_brown, top: '82%', left: '9%', width: '5.5rem' },
  { id: 2, type: 'BLRect_small_blue', image: Rect_small_blue, top: '76%', left: '5%', width: '4rem' },
  { id: 2, type: 'BLRect_small_yellow', image: Rect_small_yellow, top: '88%', left: '14%', width: '2rem' },
  { id: 2, type: 'BLTrig_green', image: Trig_green, top: '94%', left: '3%', width: '3rem' },
  { id: 2, type: 'BLTrig_blue', image: Trig_blue, top: '76%', left: '18%', width: '2.5rem' },
  { id: 2, type: 'BLTrig_lightblue', image: Trig_lightblue, top: '56%', left: '9%', width: '2.5rem' },
  { id: 2, type: 'BLTrig_red', image: Trig_red, top: '54%', left: '21%', width: '2.5rem' },

  { id: 1, type: 'CSquare_yellowcolors', image: Square_yellowcolors, top: '12%', left: '69%', width: '3.7rem'},
  { id: 1, type: 'CSquare_bluecolors', image: Square_bluecolors, top: '10%', left: '37%', width: '4rem' },
  { id: 2, type: 'CSquare_pink', image: Square_pink, top: '13.5%', left: '44.5%', width: '2.5rem', rotate: '-45deg' },
  { id: 2, type: 'CSquare_green', image: Square_green, top: '-2%', left: '64.5%', width: '4.8rem', rotate: '45deg' },
  { id: 2, type: 'CRound_yellow', image: Round_yellow, top: '16%', left: '49%', width: '4rem' },
  { id: 2, type: 'CRound_blue', image: Round_blue, top: '1%', left: '41%', width: '3rem' },
  { id: 2, type: 'CRound_blue2', image: Round_blue, top: '23.5%', left: '65%', width: '3rem' },

  { id: 2, type: 'CRound_pink', image: Round_pink, top: '-0.5%', left: '58%', width: '4.7rem' },
  { id: 2, type: 'CTrig_green', image: Trig_green, top: '1%', left: '35.8%', width: '3rem', rotate: '-90deg' },
  { id: 2, type: 'CTrig_orange', image: Trig_orange, top: '20.5%', left: '42.5%', width: '2.5rem' },
  { id: 2, type: 'CTrig_yellow', image: Trig_yellow, top: '14%', left: '61%', width: '2rem' },

  { id: 2, type: 'CRect_green', image: Rect_green, top: '-3%', left: '46%', width: '6rem', rotate: '-45deg' },
  { id: 2, type: 'CRect_small_yellow1', image: Rect_small_yellow, top: '13%', left: '65%', width: '1.5rem' },
  { id: 2, type: 'CRect_small_blue', image: Rect_small_blue, top: '12%', left: '54%', width: '4rem', height: '1.4rem' },
  { id: 2, type: 'CRound_group_brown', image: Round_group_brown, top: '1%', left: '53%', width: '5.5rem', rotate: '90deg' },
  { id: 2, type: 'CRound_group_green', image: Round_group_green, top: '16%', left: '59%', width: '1.5rem', rotate: '90deg' },
  { id: 2, type: 'CRound_group_purple', image: Round_group_purple, top: '19.8%', left: '73.5%', width: '1.5rem', rotate: '90deg' },


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
            style={{ top: shape.top, left: shape.left, width: shape.width, height: shape.height, rotate:shape.rotate }}
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
