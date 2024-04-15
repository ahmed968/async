async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      await new Promise(resolve => setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000));
    }
  }
  
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);







  async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  }
  
  awaitCall();






  async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  }
  
  awaitCall();