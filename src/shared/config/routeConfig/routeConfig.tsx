import {RouteProps} from 'react-router-dom';
import {Main} from 'pages/MainPage';
import {About} from 'pages/AboutPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path:RoutePath.main,
        element: <Main/>
    },
    [AppRoutes.ABOUT]: {
        path:RoutePath.about,
        element: <About/>
    }
}