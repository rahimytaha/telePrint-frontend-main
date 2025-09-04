export const converQueryToObject = (query) => {
  const searchParams = new URLSearchParams(query);
  const object = {};
  searchParams.forEach(function (value, key) {
    object[key] = value;
  });
  return object;
};
