
import 'dotenv/config';
import express from 'express';
import routerProduct from './routes/product';
import cors from 'cors';
import mongoose from 'mongoose';
import routerCategory from './routes/category';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routerProduct);
app.use("/api", routerCategory);


mongoose.connect('mongodb://localhost:27017/we17103', () => {
    console.log('successfully')
});

app.listen(process.env.PORT, () => {
    console.log('Kết nối thành công: ' + process.env.PORT);
})
