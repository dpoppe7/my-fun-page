import React, { useState, useEffect, useCallback } from 'react';
import './Landing.css';
import backgroundImage from '../assets/Untitled 8.png'; 
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
  { id: 1, type: 'TLSquare_yellowcolors', image: Square_yellowcolors, originalTop: '20%', originalLeft: '15%', width: '4rem' },
  { id: 1, type: 'TLSquare_bluecolors', image: Square_bluecolors, originalTop: '7%', originalLeft: '10%', width: '4rem' },
  { id: 2, type: 'TLSquare_pink', image: Square_pink, originalTop: '26%', originalLeft: '26%', width: '3rem' },
  { id: 2, type: 'TLSquare_orange1', image: Square_orange, originalTop: '3%', originalLeft: '1%', width: '3rem' },
  { id: 2, type: 'TLSquare_orange2', image: Square_orange, originalTop: '4%', originalLeft: '30%', width: '3.5rem', rotate: '-45deg' },
  { id: 2, type: 'TLRect_green', image: Rect_green, originalTop: '30%', originalLeft: '9%', width: '6rem' },
  { id: 2, type: 'TLRect_small_yellow1', image: Rect_small_yellow, originalTop: '37%', originalLeft: '3%', width: '1.5rem', height: '5rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_yellow2', image: Rect_small_yellow, originalTop: '20%', originalLeft: '6%', width: '2rem', height: '5rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_yellow3', image: Rect_small_yellow, originalTop: '-3%', originalLeft: '26%', width: '2rem', height: '4rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_pink', image: Rect_small_pink, originalTop: '1%', originalLeft: '6.5%', width: '1.5rem', height: '4rem' },
  { id: 2, type: 'TLRect_small_pink2', image: Rect_small_pink, originalTop: '31%', originalLeft: '21%', width: '1.5rem', height: '4rem', rotate: '90deg' },
  { id: 2, type: 'TLRect_small_blue', image: Rect_small_blue, originalTop: '12%', originalLeft: '23%', width: '4.4rem', height: '2rem'},
  { id: 2, type: 'TLRound_blue', image: Round_blue, originalTop: '32%', originalLeft: '-1%', width: '3.2rem' },
  { id: 2, type: 'TLRound_yellow', image: Round_yellow, originalTop: '15%', originalLeft: '8%', width: '3rem' },
  { id: 2, type: 'TLRound_yellow2', image: Round_yellow, originalTop: '19%', originalLeft: '31%', width: '3rem' },
  { id: 2, type: 'TLRound_pink1', image: Round_pink, originalTop: '-1%', originalLeft: '18%', width: '4.5rem' },
  { id: 2, type: 'TLTrig_blue', image: Trig_blue, originalTop: '32%', originalLeft: '4.5%', width: '2.5rem', rotate: '-90deg' },
  { id: 2, type: 'TLTrig_orange', image: Trig_orange, originalTop: '15%', originalLeft: '3%', width: '2.5rem' },
  { id: 2, type: 'TLTrig_yellow', image: Trig_yellow, originalTop: '11%', originalLeft: '18%', width: '2rem' },
  { id: 2, type: 'TLTrig_dkgreen', image: Trig_dkgreen, originalTop: '26%', originalLeft: '22.5%', width: '2rem' },
  { id: 2, type: 'TLRound_group_brown', image: Round_group_brown, originalTop: '21%', originalLeft: '-3%', width: '5.5rem', rotate: '90deg' },
  { id: 2, type: 'TLRound_group_purple', image: Round_group_purple, originalTop: '-4%', originalLeft: '13%', width: '1.5rem', rotate: '90deg' },
  { id: 2, type: 'TLRound_group_green', image: Round_group_green, originalTop: '13%', originalLeft: '25%', width: '1.5rem', rotate: '90deg' },

  { id: 1, type: 'BLSquare_yellowcolors_rotated', image: Square_yellowcolors, originalTop: '85%', originalLeft: '18%', width: '3rem', rotate: '45deg' },
  { id: 2, type: 'BLSquare_orange', image: Square_orange, originalTop: '54%', originalLeft: '15%', width: '3.6rem' },
  { id: 2, type: 'BLSquare_pink', image: Square_pink, originalTop: '81%', originalLeft: '-0.5%', width: '4rem', rotate: '45deg' },
  { id: 2, type: 'BLSquare_green', image: Square_green, originalTop: '48%', originalLeft: '-1%', width: '3.6rem' },
  { id: 2, type: 'BLRect_orange', image: Rect_orange, originalTop: '67%', originalLeft: '10%', width: '5.5rem' },
  { id: 2, type: 'BLRound_yellow', image: Round_yellow, originalTop: '65%', originalLeft: '0.5%', width: '4rem' },
  { id: 2, type: 'BLRound_blue', image: Round_blue, originalTop: '89%', originalLeft: '8%', width: '3.2rem' },
  { id: 2, type: 'BLRound_blue2', image: Round_blue, originalTop: '43%', originalLeft: '18%', width: '3.2rem' },
  { id: 2, type: 'BLRound_pink', image: Round_pink, originalTop: '89%', originalLeft: '22%', width: '4rem' },
  { id: 2, type: 'BLRound_pink2', image: Round_pink, originalTop: '44%', originalLeft: '7%', width: '4.1rem' },
  { id: 2, type: 'BLRound_group_green', image: Round_group_green, originalTop: '63%', originalLeft: '21%', width: '1.5rem' },
  { id: 2, type: 'BLRound_group_purple', image: Round_group_purple, originalTop: '49%', originalLeft: '5%', width: '1.5rem' },
  { id: 2, type: 'BLRound_group_brown', image: Round_group_brown, originalTop: '82%', originalLeft: '9%', width: '5.5rem' },
  { id: 2, type: 'BLRect_small_blue', image: Rect_small_blue, originalTop: '76%', originalLeft: '5%', width: '4rem' },
  { id: 2, type: 'BLRect_small_yellow', image: Rect_small_yellow, originalTop: '88%', originalLeft: '14%', width: '2rem' },
  { id: 2, type: 'BLTrig_green', image: Trig_green, originalTop: '94%', originalLeft: '3%', width: '3rem' },
  { id: 2, type: 'BLTrig_blue', image: Trig_blue, originalTop: '76%', originalLeft: '18%', width: '2.5rem' },
  { id: 2, type: 'BLTrig_lightblue', image: Trig_lightblue, originalTop: '56%', originalLeft: '9%', width: '2.5rem' },
  { id: 2, type: 'BLTrig_red', image: Trig_red, originalTop: '54%', originalLeft: '21%', width: '2.5rem' },

  { id: 1, type: 'CSquare_yellowcolors', image: Square_yellowcolors, originalTop: '12%', originalLeft: '69%', width: '3.7rem'},
  { id: 1, type: 'CSquare_bluecolors', image: Square_bluecolors, originalTop: '10%', originalLeft: '37%', width: '4rem' },
  { id: 2, type: 'CSquare_pink', image: Square_pink, originalTop: '13.5%', originalLeft: '44.5%', width: '2.5rem', rotate: '-45deg' },
  { id: 2, type: 'CSquare_green', image: Square_green, originalTop: '-2%', originalLeft: '64.5%', width: '4.8rem', rotate: '45deg' },
  { id: 2, type: 'CRound_yellow', image: Round_yellow, originalTop: '16%', originalLeft: '49%', width: '4rem' },
  { id: 2, type: 'CRound_blue', image: Round_blue, originalTop: '1%', originalLeft: '41%', width: '3rem' },
  { id: 2, type: 'CRound_blue2', image: Round_blue, originalTop: '23.5%', originalLeft: '65%', width: '3rem' },

  { id: 2, type: 'CRound_pink', image: Round_pink, originalTop: '-0.5%', originalLeft: '58%', width: '4.7rem' },
  { id: 2, type: 'CTrig_green', image: Trig_green, originalTop: '1%', originalLeft: '35.8%', width: '3rem', rotate: '-90deg' },
  { id: 2, type: 'CTrig_orange', image: Trig_orange, originalTop: '20.5%', originalLeft: '42.5%', width: '2.5rem' },
  { id: 2, type: 'CTrig_yellow', image: Trig_yellow, originalTop: '14%', originalLeft: '61%', width: '2rem' },

  { id: 2, type: 'CRect_green', image: Rect_green, originalTop: '-3%', originalLeft: '46%', width: '6rem', rotate: '-45deg' },
  { id: 2, type: 'CRect_small_yellow1', image: Rect_small_yellow, originalTop: '13%', originalLeft: '65%', width: '1.5rem' },
  { id: 2, type: 'CRect_small_blue', image: Rect_small_blue, originalTop: '12%', originalLeft: '54%', width: '4rem', height: '1.4rem' },
  { id: 2, type: 'CRound_group_brown', image: Round_group_brown, originalTop: '1%', originalLeft: '53%', width: '5.5rem', rotate: '90deg' },
  { id: 2, type: 'CRound_group_green', image: Round_group_green, originalTop: '16%', originalLeft: '59%', width: '1.5rem', rotate: '90deg' },
  { id: 2, type: 'CRound_group_purple', image: Round_group_purple, originalTop: '19.8%', originalLeft: '73.5%', width: '1.5rem', rotate: '90deg' },


];

const Landing = () => {
  const [shapePositions, setShapePositions] = useState(shapes);
  const [blurPosition, setBlurPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setBlurPosition({ x: mouseX, y: mouseY });

    const updatedShapes = shapePositions.map((shape) => {
      const shapeX = (parseFloat(shape.originalLeft) / 100) * window.innerWidth;
      const shapeY = (parseFloat(shape.originalTop) / 100) * window.innerHeight;

      const dx = shapeX - mouseX;
      const dy = shapeY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) { // Adjust the distance threshold as needed
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const forceMagnitude = Math.min(500 / distance, 20); // Adjust force as needed

        const newLeft = ((shapeX + forceDirectionX * forceMagnitude) / window.innerWidth) * 100;
        const newTop = ((shapeY + forceDirectionY * forceMagnitude) / window.innerHeight) * 100;

        return {
          ...shape,
          left: `${newLeft}%`,
          top: `${newTop}%`,
          rotation: shape.rotate || 0, // Ensure rotation is applied correctly
        };
      } else {
        return {
          ...shape,
          left: shape.originalLeft,
          top: shape.originalTop,
          rotation: shape.rotate || 0, // Ensure rotation is applied correctly
        };
      }
    });

    setShapePositions(updatedShapes);
  }, [shapePositions]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="Landing">
      <div
        className="blur-circle"
        style={{ top: `${blurPosition.y}px`, left: `${blurPosition.x}px` }}
      />
      <div>
        <img src={backgroundImage} alt='Backgroun img' className="background-image"/>
      </div>
      {shapePositions.map((shape) => (
        <img
          key={shape.id}
          src={shape.image}
          alt={shape.type}
          className={`Shape-img ${shape.type}`}
          style={{ 
            top: shape.top, 
            left: shape.left, 
            width: shape.width, 
            height: shape.height, 
            transform: `rotate(${shape.rotation || 0})` // Apply rotation here
          }}
        />
      ))}
    </div>
  );
}

export default Landing;
