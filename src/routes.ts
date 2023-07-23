import { FC } from 'react';
import MainPage from './pages/MainPage';

export interface rout {
    path: string;
    Component: FC;
}

const routes: rout[] = [{ path: '/', Component: MainPage }];

export default routes;
