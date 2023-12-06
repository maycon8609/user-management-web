import 'express-async-errors'
import express from 'express'

import { useRouter } from './userModule'
import { errorMiddleware } from './middlewares/errorMiddleware'

const app = express()
const PORT = 3333

app.use(express.json())
app.use("/", useRouter.router)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})