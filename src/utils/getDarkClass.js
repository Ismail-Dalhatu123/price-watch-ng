const getDarkClass = (className) =>
  localStorage.getItem("theme") === "dark" ? className : "";

export default getDarkClass;
