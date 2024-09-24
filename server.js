const { config } = require('./config')
const express = require('express')
// const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());

app.set('port', config.port);

app.get('/', (req, res) => {
    res.send(config.appName);
});

// Catch 404
// app.use(notFoundHandler);

// Errors middleware
// app.use(logErrors);
// app.use(wrapErrors);
// app.use(errorHandler);

app.listen(app.get('port'), () => {
    console.log(`Server run on port ${app.get('port')}`);
});