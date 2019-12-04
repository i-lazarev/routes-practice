const express = require("express");
const api = express();

api.listen(3000, () => console.log("Server started at port 3000"));
api.use(express.urlencoded());

let users = [
  { username: "User1", password: "PW1" },
  { username: "User2", password: "PW2" },
  { username: "User3", password: "PW3" }
];

api.get("/login", (req, res) => {
  res.send(`
        <form action="/login" method="POST">
            Username: <input name="username"><br />
            Password: <input name="password"><br />
            <button type="submit">Submit</button>
        </form>
    `);
});

api.post("/login", (req, res) => {
  //console.log(req.body);
  let result = users.some(user => {
    return (
      req.body.username == user.username && req.body.password == user.password
    );
  });
  result == true
    ? res.send("Login successful")
    : res.send("Login unsuccessful");
});
