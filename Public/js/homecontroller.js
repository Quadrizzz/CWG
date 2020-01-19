const httpStatus = require("http-status-codes"),
    contentType = require("./contenttype"),
    utils = require("./utils");

exports.indexhtml = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.html);
    utils.getFile("views/CWG.html", res);
};

exports.Collection = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.html);
    utils.getFile("views/books.html", res);
};

exports.Signup = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.html);
    utils.getFile("views/signup.html", res);
};

exports.Login= (req, res) => {
    res.writeHead(httpStatus.OK, contentType.html);
    utils.getFile("views/loginpage.html", res);
};

exports.Editors = (req, res) => {
    res.writeHead(httpStatus.Ok, contentType.html);
    utils.getFile("views/editors.html", res);
};

exports.Help = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.html);
    utils.getFile("views/helpinghands.html", res);
}


exports.b3 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.jpg);
    utils.getFile("views/back3.jpg", res);
};

exports.b2 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.jpg);
    utils.getFile("views/back2.jpg", res);
};

exports.ace = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.jpg);
    utils.getFile("views/ace.jpg", res);
};
exports.t9 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.jpg);
    utils.getFile("views/textgram_9.jpg", res);
};
exports.t8 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.jpg);
    utils.getFile("views/textgram-8.jpg", res);
};
exports.t11 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.jpg);
    utils.getFile("views/textgram_11.jpg", res);
};


exports.cwg = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.css);
    utils.getFile("views/cwg.css", res);
};

exports.help = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.css);
    utils.getFile("views/helpinghand.css", res);
};

exports.login = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.css);
    utils.getFile("views/login.css", res);
};

exports.books= (req, res) => {
    res.writeHead(httpStatus.OK, contentType.css);
    utils.getFile("views/books.css", res);
};

exports.editors = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.css);
    utils.getFile("views/editors.css", res);
};

exports.signup = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.css);
    utils.getFile("views/signup.css", res);
};

exports.t1 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_1.png", res);
};

exports.t2 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_2.png", res);
};

exports.t3 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_3.png", res);
};

exports.t4 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_4.png", res);
};

exports.t5 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_5.png", res);
};

exports.t6 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_6.png", res);
};

exports.t7 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_7.png", res);
};

exports.t10 = (req, res) => {
    res.writeHead(httpStatus.OK, contentType.png);
    utils.getFile("views/textgram_10.png", res);
};