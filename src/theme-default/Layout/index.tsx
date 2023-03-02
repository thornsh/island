import { useState } from 'react';

export function Layout() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>layout122</h1>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </div>
  );
}
