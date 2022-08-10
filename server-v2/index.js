const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/', (_, res) => {
  res.status(200).send('Hello from server v2.');
})

app.listen(PORT, () => {
  console.log('server v2 is running');
})