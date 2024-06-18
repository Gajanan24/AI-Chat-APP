const express = require('express');
const cors = require('cors')

const app = express();

const chatRouter = require('./routes/chatRoutes');

app.use(express.json());
app.use(cors());


app.use('/api/v1/chat/', chatRouter);

app.listen('5003',() => {
    console.log('server started on port 5003');
})