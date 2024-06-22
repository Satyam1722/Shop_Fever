import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import 'dotenv/config'
import cors from 'cors'
import path from 'path';
const __dirname = path.resolve();

import cookieParser from 'cookie-parser'
connectDb();x


app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

app.use('/static', express.static('public')); //to serve the static contents
app.use('/api', prodctRoutes, authRoutes, categoryRoutes, paymentRoutes)

app.use(errorMiddleware)


app.listen(process.env.SERVER_PORT, (c) => {
    console.log('Server is listening at port 8000')
});


