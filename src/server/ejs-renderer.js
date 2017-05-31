import ejs from 'ejs';
import fs from 'fs';

const getTemplateString = (name) => {
    let templatePath = 'src/server/templates/'+name+'.ejs';
    return fs.readFileSync(templatePath).toString();
};

export const ejsRender = (name , params = {}) => {
    let template = getTemplateString (name);
    return ejs.render(template , params);
};
