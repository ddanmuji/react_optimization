import express from 'express';
import path from 'path';

const app = express();
const PORT = 8000;

const header = {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');
  },
};

app.use(express.static(path.join(__dirname, '../../client/build'), header));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../client/build/index.html')));
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
