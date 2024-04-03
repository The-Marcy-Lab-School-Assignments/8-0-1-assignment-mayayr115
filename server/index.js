const express = require('express');
const app = express();
const path = require('path');

const pathToDistFolder = path.join(__dirname, '..', 'app', 'dist');

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});
