"use strict"
const port = 4000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    utils = require("./utils"),
    contentType = require("./contenttype"),
    express = require("express"),
    app = express(),
    homecontroller = require("./homecontroller");

app.get("/", homecontroller.indexhtml);

app.get("/collection", homecontroller.Collection);

app.get("/editors", homecontroller.Editors);

app.get("/HelpingHand", homecontroller.Help);

app.get("/SignUp", homecontroller.Signup);

app.get("/Login", homecontroller.Login);

app.get("cwg.css", homecontroller.cwg);

app.get("editors.css", homecontroller.editors);

app.get("login.css", homecontroller.login);

app.get("signup.css", homecontroller.signup);

app.get("helpinghand.css", homecontroller.help);

app.get("books.css", homecontroller.books);



app.get("textgram_1.png", homecontroller.t1)
app.get("textgram_2.png", homecontroller.t2)
app.get("textgram_3.png", homecontroller.t3)
app.get("textgram_4.png", homecontroller.t4)
app.get("textgram_5.png", homecontroller.t5)
app.get("textgram_6.png", homecontroller.t6)
app.get("textgram_7.png", homecontroller.t7)
app.get("textgram_8.jpg", homecontroller.t8)
app.get("textgram_9.jpg", homecontroller.t9)
app.get("textgram_10.png", homecontroller.t10)
app.get("textgram_11.jpg", homecontroller.t11)
app.get("ace.jpg", homecontroller.ace)
app.get("back2.jpg", homecontroller.b2)
app.get("back3.jpg", homecontroller.b3)



app.get("books.js", (req, res) => {
    res.writeHead(httpStatus.OK, contentType.js);
    utils.getFile("/books.js", res);
});

app.listen(port);
console.log(`The server is listening on 
 port number: ${port}`);