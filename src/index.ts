import express from 'express';
import dotenv from 'dotenv'
import pingRouter from './routes/ping'
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/api/ping', pingRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})