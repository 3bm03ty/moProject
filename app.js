const express = require('express')
const app = express()
const port =process.env.PORT || 30000
const mongoose = require('mongoose')
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/voters',require('./routes/votar.routes'))
app.use('/templates',require('./routes/template.routes'))
app.use('/candidates',require('./routes/candidates.routes'))
app.use('/matching',require('./routes/matching.routes'))
app.use('/votes',require('./routes/vote.routes'))
app.use('/elections',require('./routes/createElection.routes'))
app.use('/matching',require('./routes/matching.routes'))
app.get('/', (req, res) => res.send('Hello World!'))
mongoose.connect('mongodb+srv://route:route@routedb.xy62x.mongodb.net/moDB')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))