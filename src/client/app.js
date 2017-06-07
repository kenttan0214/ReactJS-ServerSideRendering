import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from '../common/Routes';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Router history={appHistory}>
        { routes() }
    </Router>,
    document.querySelector('[data-role="app"]')
);
