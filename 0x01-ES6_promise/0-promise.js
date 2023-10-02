function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can perform asynchronous operations here, such as making an API request
    // For now, let's resolve the Promise immediately with a sample response
    const sampleResponse = {
      status: 200,
      body: 'Sample response from API',
    };

    // Simulate a delay (you can replace this with actual asynchronous work)
    setTimeout(() => {
      resolve(sampleResponse); // Resolve the Promise with the sample response
    }, 1000); // Simulated delay of 1 second
  });
}

export default getResponseFromAPI;
