const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require("fs/promises");
const crypto = require("crypto");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  const token = req.headers.authorization;

  if (!token || token.length !== 16) return res.status(401).json({ message: "Token inválido!" }) 
  else res.status(200).json({ message: "pong" })
});

app.get("/simpsons", (req, res) => {
  fs.readFile("./simpsons.json", "utf8") // utf8 p/ readFile trazer como string
    .then(files => {
      res.status(201).json(JSON.parse(files)) // JSON.parse p/ responder com JSON
    })
})

app.get("/simpsons/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile("./simpsons.json", "utf8") // JSON vem como string
    .then(files => {

      const array = JSON.parse(files); // string vira array
      const filtered = array.find(simpson => Number(simpson.id) === Number(id)); // filtra

      if (!filtered) return res.status(404).json({ message: 'Simpson not found'})
      else res.status(201).json([filtered]); // método .json transforma o array em JSON na resposta
    });
})

app.post("/signup", (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) return res.status(401).json({ message: "missing fields."});

  const token = crypto.randomBytes(8).toString("hex");

  res.status(200).json({ token });
})

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Olá, ${name}`})
})

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  
  if (age > 17) return res.status(201).json({ message: `Hello, ${name}`});
  else return res.status(401).json({ message: "Unauthorized" });
})

app.post("/simpsons", (req, res) => {
  const { id, name } = req.body;

  fs.readFile("./simpsons.json", "utf8")
    .then(files => {
      const array = JSON.parse(files);
      const isSimpsonAlready = array.find(simpson => Number(simpson.id) === Number(id));

      if (isSimpsonAlready) return res.status(409).json({ message: "id already exists" });
      else {
        const newArray = [...array, { id, name }];
        fs.writeFile("./simpsons.json", JSON.stringify(newArray))
          .then(_ => {
            res.status(204).end();
          })
      }
    });
})

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  console.log(name, age)
  res.status(201).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.` })
})

app.listen(3001, () => {})