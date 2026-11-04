import { useMemo, useState } from 'react';

export function MemoComponent() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(10000);
  const result = useMemo(() => {
    console.log('calculating...');
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  console.log('rendering');

  return (
    <>
      <p>result is {result}</p>
      <p>number is {number}</p>
      <p>count is {count}</p>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        imcrease number
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increase count
      </button>
    </>
  );
}
