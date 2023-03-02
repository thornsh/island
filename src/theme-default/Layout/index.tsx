import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Content } from '../../runtime/Content';

export function Layout() {
  const [count, setCount] = useState(0);

  const aa = () => {
    const navigate = useNavigate();
    navigate('/guide');
  };

  return (
    <div>
      <h1>Common Content</h1>
      <h1>Doc Content</h1>
      <Content />
      <button onClick={aa}>aaaa</button>
      <Link to="/guide">bbbbbb</Link>
    </div>
  );
}
