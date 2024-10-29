import express from 'express'
import { postRoutes } from './routes/posts.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.json())

postRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

export { app }
