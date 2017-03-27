import connect from 'connect';
import process from 'process';
import serveStatic from 'serve-static';

const app = connect();
const port = 9191;

(require('./webpack').default)(app);

app.use((req, res) => {
    const HTML = `
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <meta charset="utf-8">
                      <title>Isomorphic Redux Demo</title>
                    </head>
                    <body>
                      <div data-role="app"></div>
                      <script type="application/javascript" src="/bundle.js"></script>
                    </body>
                  </html>
                  `;
    res.end(HTML);
});

app.use('/build/', serveStatic(process.cwd() + '/build/'));

app.listen(port,  () => {
    console.log('server is up on port ', port); // eslint-disable-line no-console
});
