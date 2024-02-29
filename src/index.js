import express from "express"
import cors from "cors"
import userRouter from "./routes/user.js"
// import taskRouter from "./routes/task.js"

import "./db/mogodbconfig.js";

import dotenv from "dotenv"
dotenv.config()



const port = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));

//api endpoints
app.use("/api/v0/user", userRouter)
// app.use("/api/v0/task", taskRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`Listening on localhost:${port}`))