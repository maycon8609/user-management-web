import 'express-async-errors'
import express from 'express'

import { useRouter } from '@users/userModule'

import { corsMiddleware } from '@shared/middlewares/corsMiddleware'
import { errorMiddleware } from '@shared/middlewares/errorMiddleware'

const app = express()
const PORT = 3000

app.use(corsMiddleware)
app.use(express.json())
app.use("/", useRouter.router)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
