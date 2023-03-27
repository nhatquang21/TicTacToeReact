export default function History({ item }) {
  return (
    <>
      <h1>Winning history</h1>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.winner}</td>
                <td>{item.time} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
