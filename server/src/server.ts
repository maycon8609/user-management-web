import 'express-async-errors'
import express from 'express'

import { errorMiddleware } from '@shared/middlewares/errorMiddleware'
import { useRouter } from '@users/userModule'

const app = express()
const PORT = 3000

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(express.json())
app.use("/", useRouter.router)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
