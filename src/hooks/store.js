const setItem = (key, value) => {
  const payload = { value };
  localStorage.setItem(key, JSON.stringify(payload));
};

const getItem = (key) => {
  const payload = localStorage.getItem(key);
  if (!payload) return false;
  const data = JSON.parse(payload);
  return data.value;
};

export default {
  getItem,
  setItem,
};
