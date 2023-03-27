import Square from './Square';
import React from 'react';

export default function BoardRow(props) {
  const {
    player,
    handlePlayer,
    arrSquare,
    squares,
    setSquares,
    winner,
    isRefreshed,
    setIsRefreshed,
  } = props;

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
      className="board-row"
    >
      {arrSquare.map((item) => (
        <Square
          isRefreshed={isRefreshed}
          setIsRefreshed={setIsRefreshed}
          winner={winner}
          index={item}
          squares={squares}
          setSquares={setSquares}
          key={item}
          player={player}
          onHandle={handlePlayer}
        />
      ))}
    </div>
  );
}
