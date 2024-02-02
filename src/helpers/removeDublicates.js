// Function to clean array from
// https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
export const removeDublicates = (_arr, key) => {
  let cleaned = [...new Map(_arr.map((item) => [item[key], item])).values()];
  return cleaned;
};
