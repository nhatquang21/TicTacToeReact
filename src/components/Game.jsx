import Board from './Board';
import React, { useState, useMemo, useEffect } from 'react';
import GameConfig from './GameConfig';
import History from './WinningHistory';

export default function Game() {
  const [player, setPlayer] = useState('X');
  const [row, setRow] = useState(3);
  const [col, setCol] = useState(3);
  const [squares, setSquares] = useState([...Array(9).fill(null)]);
  const [item, setItem] = useState([]);
  const [isRefreshed, setIsRefreshed] = useState(false);

  const totalSquare = useMemo(() => {
    return row * col;
  }, [row, col]);

  const winner = useMemo(() => {
    return calculateWinner(squares);
  }, [squares]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('listWinners'));
    if (items) {
      setItem(items);
    }
  }, []);

  useEffect(() => {
    console.log('set refresh');
    setIsRefreshed(true);
  }, [row, col]);

  useEffect(() => {
    if (winner === 'X' || winner === 'O') {
      let _item = [...item];
      let obj = {
        winner: winner,
        time: new Date().toLocaleString(),
      };
      _item.push(obj);
      setItem(_item);
    }
  }, [winner]);

  useEffect(() => {
    localStorage.setItem('listWinners', JSON.stringify(item));
  }, [item]);

  const arrRow = useMemo(() => {
    const rows = Math.ceil(totalSquare / col);
    return [...Array(rows).keys()];
  }, [col, totalSquare]);

  //Calculate keys of each square
  const arrSquare = useMemo(() => {
    const squares = [...Array(totalSquare).keys()];
    return squares;
  }, [totalSquare]);

  return (
    <div className="game">
      <div className="game-info">
        <GameConfig row={row} col={col} setRow={setRow} setCol={setCol} />
      </div>
      <div className="player-info">
        <h1>
          {winner === 'Draw'
            ? 'Draw'
            : winner
            ? `Winner: ${winner}`
            : `Current player: ${player}`}{' '}
        </h1>
      </div>
      <div className="game-board">
        <Board
          isRefreshed={isRefreshed}
          setIsRefreshed={setIsRefreshed}
          winner={winner}
          squares={squares}
          setSquares={setSquares}
          totalSquare={totalSquare}
          arrSquare={arrSquare}
          arrRow={arrRow}
          row={row}
          col={col}
          player={player}
          setPlayer={setPlayer}
        />
      </div>
      <div className="history">
        <History item={item} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  let count = 0;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    count++;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (count === 8 && !squares.includes(null)) {
    return 'Draw';
  } else {
    return null;
  }
}
