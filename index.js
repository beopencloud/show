const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  console.log("Adresse IP du client:", ip);
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));