import React, { useEffect } from 'react';
import BoardRow from './BoardRow';

export default function Board(props) {
  const {
    player,
    setPlayer,
    col,
    row,
    arrSquare,
    totalSquare,
    arrRow,
    squares,
    setSquares,
    winner,
    isRefreshed,
    setIsRefreshed,
  } = props;

  const handlePlayer = () => {
    const newPlayer = player === 'X' ? 'O' : 'X';
    setPlayer(newPlayer);
  };

  useEffect(() => {
    let _squares = [...squares];
    _squares = [...Array(totalSquare).fill(null)];
    setSquares(_squares);
  }, [row, col, totalSquare]);

  return (
    <div>
      {arrRow.map((item) => (
        <BoardRow
          isRefreshed={isRefreshed}
          setIsRefreshed={setIsRefreshed}
          winner={winner}
          squares={squares}
          setSquares={setSquares}
          arrSquare={arrSquare.slice(item * col, item * col + Number(col))}
          totalSquare={totalSquare}
          key={item}
          player={player}
          handlePlayer={handlePlayer}
        />
      ))}
    </div>
  );
}
