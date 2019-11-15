const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('' +
            '<html>' +
            '<body>' +
            '<h1>' +
            'Greetings' +
            '</h1>' +
            '<form action="/createUser" method="POST"><div>' +
            '<label> Username </label>' +
            '<input type="text" name="inputText">' +
            '<input type="submit" value="Submit">' +
            '</div></form>' +
            '</body>' +
            '</html>');
        return res.end();
    }
    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<ul><li>Users 1</li><li>Users 2</li></ul>');
        return res.end();
    }
    if (url === '/createUser' && method ==='POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split("=")[1]);
        })
        console.log(req.url, req.body, req.value);
        res.writeHead(302, {'Location': '/'});
        res.end();
    }
};

module.exports = requestHandler;