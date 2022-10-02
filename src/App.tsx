import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutLazy} from './pages/AboutPage/AboutLazy';
import {MainLazy} from './pages/MainPage/MainLazy';
import {Theme, ThemeContext} from './theme/ThemeContext';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';



const App = () => {
    const {theme,toggleTheme} = useTheme()

    const bool = true;

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>MAIN</Link>
            <Link to={'/about'}>ABOUT</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutLazy/>}/>
                    <Route path={'/'} element={<MainLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;