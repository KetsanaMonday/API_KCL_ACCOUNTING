const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}
require('./model/index')
const PORT =9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


const AccountingType = require('./routers/AccountingType');
app.use("/api", AccountingType);