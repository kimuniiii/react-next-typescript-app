"use client";

import { useRef, useState } from "react";

export default function Home() {
  const counter = useRef(0);

  const [count, setCount] = useState(0);
  const latestRef = useRef(count);
  latestRef.current = count;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>useRef : {counter.current}</div>
      <button
        type="button"
        onClick={() => {
          console.log("counter.current", counter.current);
          counter.current++;
          console.log("counter.current", counter.current);
        }}
      >
        useRef Button
      </button>

      <div>useState : {count}</div>
      <button
        type="button"
        onClick={() => {
          console.log("count", count);
          console.log("latestRef.current", latestRef.current);

          setCount((prev) => prev + 1);

          console.log("latestRef.current", latestRef.current);
          console.log("count", count);
        }}
      >
        useState Button
      </button>

      <div>useState : {count}</div>
      <button
        type="button"
        onClick={async () => {
          console.log("count", count);
          console.log("latestRef.current", latestRef.current);

          setCount((prev) => prev + 1);

          await "await : 非同期処理";

          console.log("latestRef.current", latestRef.current);
          console.log("count", count);
        }}
      >
        async / await useState Button
      </button>
    </main>
  );
}
