import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import { createElement, useLayoutEffect, useState } from 'react';

export const history: any = createHashHistory();

interface HistoryRouterProps {
    history: typeof history;
    children: any
}

export const HistoryRouter: React.FC<HistoryRouterProps> = ({ history, children }) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location
    })
    useLayoutEffect(() => {
        history.listen(setState);
    }, [history])

    return createElement(Router, Object.assign({ children, navigator: history }, state))
}