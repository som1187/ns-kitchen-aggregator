const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<html><head><meta name="viewport" content="width=device-width"><style>body{font-family:sans-serif;text-align:center;margin:0;background:#fff8f0}.h{background:orange;color:white;padding:40px}.c{background:white;max-width:600px;margin:-20px auto;padding:20px;border-radius:15px;box-shadow:0 5px 15px rgba(0,0,0,.2)}a{background:#ff6b00;color:white;padding:10px 15px;border-radius:8px;text-decoration:none;margin:5px;display:inline-block}</style></head><body><div class=h><h1>🍛 NS Kitchen</h1><p>LIVE API</p></div><div class=c><h2>Welcome!</h2><p>API is running</p><a href="/api/health">Health</a><a href="/api/restaurants">Restaurants</a><p>Made in Kolkata ❤️</p></div></body></html>`);
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
