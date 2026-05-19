const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

app.post('/nfc', async (req, res) => {
  try {
    const { uid } = req.body;

    const response = await fetch(
      'https://jseguro.gamer.gd' + uid
    );

    const text = await response.text();
    res.send(text);

  } catch (err) {
    res.status(500).send("Error");
  }
});

app.get('/', (req, res) => {
  res.send("ESP32 Bridge activo");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));