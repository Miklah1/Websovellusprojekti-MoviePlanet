require('dotenv').config();
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); // for profile picture

// ROUTE ALUSTUKSET?
const apiRouter = require('./routes/api');
const userRoute = require('./routes/customer');
const reviewRoute = require('./routes/review');
const groupRoute = require('./routes/community');
const groupmembershipRoute = require('./routes/groupmembership');
const newsRoute = require('./routes/news');

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use(cors());
app.use(express.static('public'));

// ROUTES (nimetään taulujen mukaan :) )
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // FOR PROFILE PICTURE
app.use('/api', apiRouter);
app.use('/customer', userRoute);
app.use('/review', reviewRoute);
app.use('/community', groupRoute);
app.use('/groupmembership', groupmembershipRoute);
app.use('/news',newsRoute);

// START SERVER
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {    
    console.log(`Server is running on port ` + PORT);
});

module.exports = app;
// GROUPMEMBERSHIPIT:
// 0 = nobody
// 1 = pending
// 2 = member
// 3 = admin