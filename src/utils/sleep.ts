export default (ms: number = 1500) =>
  new Promise((resolve) => setTimeout(resolve, ms));
