import React from 'react';

export default function GameConfig(props) {
  const { row, col, setRow, setCol } = props;

  return (
    <div>
      <h1>Game settings</h1>
      <div>
        <label className="gameLabel" htmlFor="row">
          Row
        </label>
        <input
          type="number"
          id="row"
          value={row}
          onChange={(e) => setRow(e.target.value)}
        />
        <br />
        <label className="gameLabel" htmlFor="col">
          Column
        </label>
        <input
          type="number"
          id="col"
          value={col}
          onChange={(e) => setCol(e.target.value)}
        />
      </div>
    </div>
  );
}
