import { memo, useCallback, useState } from 'react';

export function UseCallbackComponent() {
  const [number, setNumber] = useState<number>(0);

  const onclick = useCallback(() => {
    console.log('call onclick');
  }, []);
  return (
    <>
      <p>UseCallbackComponent: number is {number}</p>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        imcrease number
      </button>
      <ChildComponent onClick={onclick} />
    </>
  );
}

const ChildComponent = memo(function ChildComponent({
  onClick,
}: {
  onClick: () => void;
}) {
  console.log('rendering ChildComponent');
  return <button onClick={onClick}>click me.</button>;
});
