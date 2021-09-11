
export const buscarAPI = async () => {
  const response = await fetch("http://localhost:5000/data")
  const data = response.json();

  return data;
}