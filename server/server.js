const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());

require('./config/mongoose.config');
require('./routes/book.routes');

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));