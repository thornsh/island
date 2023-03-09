import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Content } from '../../runtime/Content';
import 'uno.css';
import { usePageData } from '../../runtime';

export function Layout() {
  const [count, setCount] = useState(0);

  const aa = () => {
    const navigate = useNavigate();
    navigate('/guide');
  };

  const pageData = usePageData();
  console.log(pageData, '---------');

  return (
    <div>
      <h1 p="2" m="4">
        Common Content
      </h1>
      <h1>Doc Content</h1>
      <Content />
      <button onClick={aa}>aaaa</button>
      <Link to="/guide">bbbbbb</Link>
    </div>
  );
}
