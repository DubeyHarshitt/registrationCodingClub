require('dotenv').config();
const express = require('express')
const { connectionDB } = require('./connection');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data (for forms)
app.use(express.urlencoded({ extended: true }));

// DB Connection
connectionDB();

// using Cors for cross origin resource sharing
app.use(cors());


const _dirname = path.resolve();

// app.get('/',(req, res)=>{
//     res.send("Jay Shri Ram");
// });

const userRouter = require('./routers/userRouter');
app.use('/api', userRouter);

app.use(express.static(path.join(_dirname, "/Client/dist")));
app.get('*', (_,res)=>{
    res.sendFile(path.resolve(_dirname, "Client", "dist", "index.html"))
});

app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
});