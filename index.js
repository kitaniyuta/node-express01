const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!松江高専万歳！今日は悪天です')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
