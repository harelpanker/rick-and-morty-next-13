export default function Container({ children }) {
  return (
    <div className="container mx-auto max-w-5xl px-5 w-full relative z-30">
      {children}
    </div>
  );
}
