import express from 'express'
import path from 'path'

const app = express()
const PORT = 4000

app.use(
  express.static(path.resolve(__dirname, 'src', 'static'))
)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
