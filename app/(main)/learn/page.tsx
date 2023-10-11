'use client';

import { useState } from 'react';

const LolPage = () => {
  const [lol, setLol] = useState('omg');

  return (
    <div>
      {lol}

      <button onClick={() => setLol((preLol) => preLol + 'lol')}>omg</button>
    </div>
  );
};

export default LolPage;
