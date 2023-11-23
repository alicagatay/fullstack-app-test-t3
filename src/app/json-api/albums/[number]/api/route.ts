export async function GET(
  request: Request,
  { params }: { params: { number: string } }
) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.number}`
  )
    .then((response) => response.json())
    .then((json) => {
      return json as object;
    });

  return new Response(JSON.stringify(data));
}
