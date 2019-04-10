require("isomorphic-fetch");

const main = async () => {
  const notJson = await fetch("http://theurl.com", { method: "GET" });
  return notJson.json();
};

module.exports = { main };
