const arrDci = [
  "HTML/CSS",
  "JavaScript",
  "DOM",
  "NodeJS",
  "Data Server",
  "Fullstack Server",
  "Final Project"
];

const home = (req, res) => {
  res.send("<h1>Hello</h1>");
};

const json = (req, res) => {
  res.send(arrDci);
};

const text = (req, res) => {
  res.send(arrDci.join(", "));
};

const html = (req, res) => {
  res.send(
    arrDci
      .map(x => {
        return "<li>" + (x == "Data Server" ? `<b>${x}</b>` : x) + "</li>";
      })
      .join("")
  );
};

module.exports = { home, json, text, html };
