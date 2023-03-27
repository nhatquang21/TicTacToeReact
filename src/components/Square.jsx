import React, { useEffect, useState } from 'react';

export default function Square({
  onHandle,
  index,
  player,
  squares,
  setSquares,
  winner,
  isRefreshed,
  setIsRefreshed,
}) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    console.log('call use effect');
    if (isRefreshed) setValue(null);
  }, [isRefreshed]);

  const handleSquare = () => {
    let _squares = [...squares];
    _squares[index] = player;
    setSquares(_squares);
  };

  const handleClick = () => {
    if (isRefreshed) {
      setIsRefreshed(false);
    }
    if (value) return;
    else if (!value) {
      setValue(player);
      handleSquare(index, value);
      onHandle();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: '100px',
        height: '100px',
        fontSize: '20px',
        background: 'white',
        fontWeight: 'bold',
      }}
      disabled={winner ? true : false}
    >
      {isRefreshed ? '' : value ? value : ' '}
    </button>
  );
}
