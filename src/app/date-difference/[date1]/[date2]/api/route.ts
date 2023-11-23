export function GET(
  request: Request,
  { params }: { params: { date1: string; date2: string } }
) {
  const date1 = new Date(params.date1);
  const date2 = new Date(params.date2);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return new Response(`Date difference is ${diffDays} days`);
}
