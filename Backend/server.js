const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const adminRoutes = require('./routes/adminRoutes');

app.use(cors());
require("./models/User")
require("./models/Form")
require("./models/Payment")
require("./models/seatModel")
require("./models/Movie")
require("./models/addMovie")
require("./models/genreModel")



app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/formRoutes"))
app.use(require("./routes/paymentRoutes"))
app.use(require("./routes/seatingPlanRoutes"))
app.use(require("./routes/movies"))
app.use(require("./routes/updatemovieroutes"))
app.use(require("./routes/addmovies"))
app.use('/admin', adminRoutes);






// Other middleware and routes...

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

// Your routes...

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
