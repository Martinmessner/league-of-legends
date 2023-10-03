export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Error ');
  }
}
