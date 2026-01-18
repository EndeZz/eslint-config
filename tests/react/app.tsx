import { useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { NameType } from './types';

export function App({ name = 'Name', children }: PropsWithChildren<NameType>) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{name}</p>
      <button key="1" aria-label="button" type="button" onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
      {children}
    </div>
  );
}
