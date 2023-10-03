// Create a WeakMap to track the number of times queryAPI is called for each endpoint
const weakMap = new WeakMap();

// Implement the queryAPI function
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    // If the endpoint is not in the WeakMap, initialize it with a count of 1
    weakMap.set(endpoint, 1);
  } else {
    // If the endpoint is already in the WeakMap, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is >= 5, and if so, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

export { queryAPI, weakMap };
