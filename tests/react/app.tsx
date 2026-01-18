const noop = () => {};

export function App() {
  return (
    <div>
      <button key="1" aria-label="button" type="button" onClick={noop}>
        Button
      </button>
    </div>
  );
}
