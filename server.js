const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to NS Kitchen API', status: 'Live!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.get('/api/restaurants', (req, res) => {
  res.json([
    { id: 1, name: 'NS Kitchen Special', cuisine: 'Indian', rating: 4.5 },
    { id: 2, name: 'Biryani House', cuisine: 'Biryani', rating: 4.7 }
  ]);
});

app.listen(PORT, () => {
  console.log(`NS Kitchen running on ${PORT}`);
});
