
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>NS Kitchen - Kolkata's Best</title><style>*{margin:0;padding:0;box-sizing:border-box;font-family:sans-serif}body{background:#fff8f0}.hero{background:linear-gradient(135deg,#ff8a00,#ff5e00);color:#fff;text-align:center;padding:50px 20px 80px}.hero h1{font-size:42px}.card{background:#fff;max-width:700px;margin:-40px auto 20px;border-radius:20px;padding:25px;box-shadow:0 10px 30px rgba(0,0,0,.15)}.badges{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:12px 0}.badge{background:#fff3e0;color:#e65100;padding:6px 12px;border-radius:20px;font-size:12px;font-weight:bold}.btns{display:flex;gap:10px;justify-content:center;margin:15px 0}.btn{padding:12px 20px;border-radius:10px;text-decoration:none;font-weight:bold}.b1{background:#ff6b00;color:#fff}.b2{background:#eee;color:#333}.menu{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:15px}.item{background:#fffaf5;border:1px solid #ffe0b2;border-radius:12px;padding:12px}.price{color:#ff6b00;font-weight:bold}.order{width:100%;background:#25D366;color:#fff;text-align:center;padding:16px;border-radius:12px;text-decoration:none;display:block;font-weight:bold;font-size:18px;margin-top:18px}</style></head><body><div class=hero><h1>🍛 NS Kitchen</h1><p>Kolkata's Favourite Home Kitchen</p><p>⭐ 4.8 (2000+ orders) • 30 mins Delivery</p></div><div class=card><div class=badges><span class=badge>🔥 Pure Veg Option</span><span class=badge>🚚 Free Delivery > ₹199</span><span class=badge>💯 Fresh Daily</span></div><div class=btns><a class="btn b1" href="/api/restaurants">📋 Restaurants API</a><a class="btn b2" href="/api/health">💚 Health Check</a></div><h2 style="margin-top:10px">🔥 Today's Special Menu</h2><div class=menu><div class=item><h3>🍱 Veg Thali</h3><p style="font-size:12px;color:#666">Rice, Dal, 2 Sabzi, Papad</p><p class=price>₹149</p></div><div class=item><h3>🍗 Chicken Thali</h3><p style="font-size:12px;color:#666">Rice, Chicken Curry, Dal</p><p class=price>₹199</p></div><div class=item><h3>🫓 Paneer Butter Masala</h3><p style="font-size:12px;color:#666">With 4 Roti + Salad</p><p class=price>₹179</p></div><div class=item><h3>🍚 Special Biryani</h3><p style="font-size:12px;color:#666">Dum Veg / Chicken</p><p class=price>₹189</p></div></div><a class=order href="https://wa.me/919999999999?text=Hi NS Kitchen! I want to order">💬 Order on WhatsApp</a><p style="text-align:center;margin-top:12px;color:#888;font-size:13px">📍 Serving All Over Kolkata • 11 AM - 11 PM</p></div><div style="text-align:center;padding:20px;color:#aaa;font-size:12px">Made with ❤️ in Kolkata<br>API Live • ns-kitchen-aggregator-1.onrender.com</div></body></html>`);
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
  console.log('NS Kitchen running on ' + PORT);
});