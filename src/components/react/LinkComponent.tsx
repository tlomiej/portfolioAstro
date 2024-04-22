import { useState } from "react";

export default function LinkComponent(props: { name?: string }) {
  const [count, setCount] = useState(0);

  return (
    <h1
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Hello z react Compoennt, {count}
      <h1>{props.name}</h1>

    </h1>
  );
}


