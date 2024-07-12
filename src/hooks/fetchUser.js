export async function getData(path) {
  const res = await fetch(
    `https://6690d0c2c0a7969efd9da325.mockapi.io/candle/${path}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
