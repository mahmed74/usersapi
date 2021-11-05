import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

let users = [];

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/user", (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.address) {
    res.status(400).send("invalid data");
  } else {
    users.push({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
    });
    res.send("user Created!");
  }
});

app.put("/user/:id", (req, res) => {
  if (users[req.params.id]) {
    if (req.body.name) {
      users[req.params.name] = req.body.name;
    }
    if (req.params.email) {
      users[req.params.email] = req.body.email;
    }
    if (req.params.address) {
      users[req.params.address];
    }

    res.send(users[req.params.id]);
  } else {
    res.send("user not found");
  }
});

app.delete("/user/:id", (req, res) => {
  if (users[req.params.id]) {
   // users[req.params.id] = {};
    users.splice(req.params.id , req.params.id-1);
    res.send("user deleted!");
  } else {
    res.send("user not found");
  }
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
