import { memo, useMemo, useState } from 'react';

export function Parent() {
    const [count, setCount] = useState<number>(0);
    const user = useMemo(() => {
        return { name: "Alice" };
    }, []);
  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count: {count}
      </button>
      <Child user={user} />
    </>
  );
}

// const Child = memo(function Child({ name }: { name: string }) {
//   console.log('Child rendered');
//   return <p>{name}</p>;
// }); 

// const Child = memo(function Child({ user }: { user: {name: string} }) {
//   console.log('Child rendered');
//   return <p>{user.name}</p>;
// });  // in this way memo doesn't work

const Child = memo(function Child({ user }: { user: {name: string} }) {
  console.log('Child rendered');
  return <p>{user.name}</p>;
});  // in this way memo doesn't work