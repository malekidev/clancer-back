const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3005;
const cors = require('cors');


app.use(cors()); // اجازه‌ی CORS به همه‌ی درخواست‌ها
// اتصال به دیتابیس MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});

app.use(express.json());

app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
