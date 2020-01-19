const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentType = require("./contenttype");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentType.html);
                res.end("ERROR");
            }
            res.end(data);
        });


    }
};