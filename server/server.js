import connect from 'connect';
import process from 'process';
import serveStatic from 'serve-static';

const app = connect();
const port = 9191;

(require('./webpack').default)(app);
app.use('/build/', serveStatic(process.cwd() + '/build/'));

app.listen(port,  () => {
    console.log('server is up on port ', port);
});
