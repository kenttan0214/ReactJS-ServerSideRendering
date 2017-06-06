import ejs from 'ejs';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import routes from '../common/Routes';

const getTemplateString = (name) => {
    let templatePath = 'src/server/templates/'+name+'.ejs';
    return fs.readFileSync(templatePath).toString();
};

const ejsRender = (name , params = {}) => {
    let template = getTemplateString (name);
    return ejs.render(template , params);
};

const handleRender = (port, req, res) => {
    const memoryHistory = createMemoryHistory(req.url);

    match({ memoryHistory, routes: routes(), location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.statusCode = 500;
            res.end(error.message);
        } else if (redirectLocation) {
          // res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const html = renderToString(<RouterContext {...renderProps} />); //eslint-disable-line react/react-in-jsx-scope
            const fullpage = ejsRender('full-page', {html});
            res.statusCode = 200;
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(fullpage);
        }
    });
};

export default handleRender;
