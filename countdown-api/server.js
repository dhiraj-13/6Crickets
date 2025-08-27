const express = require('express');
const cors = require('cors');
const app = express();

const targetTime = new Date('2025-08-29T00:00:00').getTime();
// const targetTime = new Date().getTime(); // 60 seconds from now
console.log("target time is", targetTime);

app.use(cors()); // Enable CORS for all routes


// Root route to confirm server is running
app.get('/', (req, res) => {
  res.send('Countdown API is running');
});


app.get('/countdown', (req, res) => {
  const currentTime = new Date().getTime();
  console.log("date is ", currentTime);
  let secondsLeft = Math.floor((targetTime - currentTime) / 1000);
  if (secondsLeft < 0) secondsLeft = 0;
  console.log("exp", secondsLeft);
  res.json({ secondsLeft });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Countdown API running on port ${PORT}`);
});

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
