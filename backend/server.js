import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(express.json())
app.use(cors())

const corsOptions = {
  origin: 'http://localhost:3000',
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
  // console.log('req.query')
  // console.log(req.query.q)

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
