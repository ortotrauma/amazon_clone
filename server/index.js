const express = require('express');
const mongoose = require('mongoose'); 

const authRouter = require('./routes/auth');
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://ortotrauma:nov1korisnik1@cluster0.2y0ha9x.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);

mongoose
.connect(DB)
.then(() => {
    console.log('Connection succeeded');
})
.catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at ${PORT}`);
});