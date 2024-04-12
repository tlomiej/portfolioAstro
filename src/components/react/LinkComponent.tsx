import { useState, type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal } from "react";

export default function Welcome(props: { name?: string }) {
  const [count, setCount] = useState(0);

  return (
    <h1
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Hello z react Compoennt, {count}
      {props.name}
    </h1>
  );
}
