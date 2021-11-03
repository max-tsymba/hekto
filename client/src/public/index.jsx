import '../global/index.scss';
import React, {createContext} from 'react';
import { render } from 'react-dom';
import App from '../App.jsx';
import UserStore from '../store/userStore';

export const Context = createContext(null);

render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
)