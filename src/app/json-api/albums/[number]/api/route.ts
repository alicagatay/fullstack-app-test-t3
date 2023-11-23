export function GET(
  request: Request,
  { params }: { params: { number: string } }
) {
  // fetch the endpoint https://jsonplaceholder.typicode.com/albums/{number} and return the response
  return fetch(`https://jsonplaceholder.typicode.com/albums/${params.number}`);
}
