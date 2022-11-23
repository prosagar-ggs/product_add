const express= require("express");
const app = express();
const port =5000
const mongoose= require('mongoose');
const { MONGOURI } = require('./secret.js');
// uX5LmtzejZPcGHIa
require("./models/post")

mongoose.connect(MONGOURI)

mongoose.connection.on('connected', () => {
    console.log("connected to mongo");
}
)

mongoose.connection.on('error', (err) => {
    console.log("error connecting", err);
}
)

app.use(express.json());
app.use(require("./routes/post"))

app.get('/', (req, res) => {
    res.send('Hello World!')
}
)

app.listen(port, () => { console.log(`Example app listening at ${port}`) })