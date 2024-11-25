import express from "express"
import cors from "cors"
import path from "path"
import router from "./routes/routes.js"
import { fileURLToPath } from "url"

const app = express()

app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.use('/api', router)

export default app