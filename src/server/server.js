import connect from 'connect';
import process from 'process';
import serveStatic from 'serve-static';
import {ejsRender} from './ejs-renderer';

const app = connect();
const port = 9191;

(require('./webpack').default)(app);

app.use((req, res) => {
    const HTML = ejsRender('full-page');
    res.end(HTML);
});

app.use('/build/', serveStatic(process.cwd() + '/build/'));

app.listen(port,  () => {
    console.log('server is up on port ', port); // eslint-disable-line no-console
});
