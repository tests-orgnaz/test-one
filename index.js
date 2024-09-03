const express = require('express');
const path = require('path');
const app = express();

  const port = 3000;
  app.use(express.json());
  
  app.get('/', (req, res) => {
    res.send('Hello World...');
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
