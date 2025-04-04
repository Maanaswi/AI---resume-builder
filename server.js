import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
