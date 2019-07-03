let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let mongoose = require("mongoose");
const config = require("./config");
let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Router config
app.use("/", require("./routes/page"));
app.use("/admin", require("./routes/admin"));
app.use("/user", require("./routes/user"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

/**
 * Module dependencies.
 */

let debug = require("debug")("cnpm-ezlife:server");
let http = require("http");

/**
 * Run and config MongoDB
 */
(async () => {
    await mongoose.connect(config.urlMongoDb, {
        useNewUrlParser: true,
        autoIndex: false,
        useCreateIndex: true,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000
    });

    if (mongoose.connection.readyState === 1) {
        console.log(`Connect to database successfully `);
    }
})();

/**
 * Get port from environment and store in Express.
 */
function add(a, b) {
    return a + b;
}

let port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    let addr = server.address();
    let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Server is listening on " + bind);
    console.log("Enter your link: http://localhost:3000");
}
