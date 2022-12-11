import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import proxy from 'http-proxy-middleware'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

// app.use(function (req, res, next) {
//   res.header(
//     'Access-Control-Allow-Origin',
//     'https://westminster-shorter-catechism.pages.dev/'
//   )
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })

const corsOptions = {
  origin: 'http://localhost:3000/',
}

const requestEndpoint = 'https://api.esv.org/v3/passage/html/'

app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Authorization: process.env.API_KEY,
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(
    `${requestEndpoint}?q=${req.query.q}`,
    fetchOptions
  )
  const jsonResponse = await response.json()
  res.json(jsonResponse)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at ${process.env.PORT || 3000}`)
})
