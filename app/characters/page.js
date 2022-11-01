async function getData() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  return res.json();
}

export default async function Page() {
  const characters = await getData();

  return <div>Page</div>;
}
