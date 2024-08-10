const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoute = require('./routes/auth');
const cors=require('cors')
app.use(express.json()); // for parsing application/json
app.use(cors())
// Update your MongoDB connection string as needed
mongoose.connect('mongodb://localhost:27017/harvest-hub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
