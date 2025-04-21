const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const corsOptions = {}
const model = require('./model/index')

const PORT = 9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


const AccountingType = require('./routers/AccountingType');
const AccountingGroup = require('./routers/AccountingGroup');
const AccountingGroupDetail = require('./routers/AccountingGroupDetail');
const Accounting = require('./routers/Accounting');
const User1 = require('./routers/User1');
const Currency = require('./routers/Currency');
const AccountingActivity = require('./routers/AccountingActivity');


app.use("/api", AccountingType);
app.use("/api", AccountingGroup);
app.use("/api", AccountingGroupDetail);
app.use("/api", Accounting);
app.use("/api", User1);
app.use("/api", Currency);
app.use("/api", AccountingActivity);
