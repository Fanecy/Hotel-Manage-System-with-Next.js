import Counter from "./Counter";

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  if (data.length !== 0) console.log("wrong with data");

  console.log(data);

  return (
    <div>
      <h1>Cabin</h1>
      <Counter data={data} />
      <ul>
        {data.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default page;
