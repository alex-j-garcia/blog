export default function Button({onClick, children, className}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
