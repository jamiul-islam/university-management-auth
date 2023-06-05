import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

// parse application/json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// application routes
app.use('/api/v1/users/', UserRoutes)

// testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my API')
})

// global error handler
app.use(globalErrorHandler)

export default app
