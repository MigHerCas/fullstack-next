async function getPosts() {
  const response = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!response.ok) {
    console.error(response);
  }

  return response.json();
}

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
