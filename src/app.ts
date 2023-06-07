import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'

const app: Application = express()

app.use(cors())

// parse application/json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// application routes

app.use('/api/v1/', routes)

// testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my API')
})

// global error handler
app.use(globalErrorHandler)

export default app
