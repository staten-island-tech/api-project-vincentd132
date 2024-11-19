import "./style.css";

async function getData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api");
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}
