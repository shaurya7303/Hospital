require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patient');
const auth = require('./middleware/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://shauryastarlord_db_user:12345@cluster0.cfzrgsa.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Data Base Connect")

const app = express();
app.use(express.json());


app.post('/signup', async (req, res) => {

});

app.post('/signin', async (req, res) => {

});


app.get('/patients', auth, async (req, res) => {
  
});
app.post('/patients', auth, async (req, res) => {
 
});
app.put('/patients/:id', auth, async (req, res) => {
  
});
app.delete('/patients/:id', auth, async (req, res) => {
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
