const express = require("express");

const app = express();

app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.json({
        message: "you are at the homepage"
    });
});

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Page Not Found -' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 5000);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port', port);
});
