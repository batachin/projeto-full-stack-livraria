const express = require('express');

const connectDB = require('./config/db');

const bookRoutes = require('./routes/api/book');

const cors = require('cors');

require('dotenv').config();

const app = express();

//Middleware
app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send('Hello world!'));

// Connect ao banco de dados
connectDB();

//Cors
app.use(cors({origin: true, credentials: true}))

//Routes
app.use('/api/books', bookRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server is running on port ${port}`));