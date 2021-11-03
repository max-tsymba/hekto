import '../global/index.scss';
import React, {createContext} from 'react';
import { render } from 'react-dom';
import App from '../App.jsx';
import UserStore from '../store/userStore';
import FurnitureStore from '../store/furnitureStore';

export const Context = createContext(null);

render(
    <Context.Provider value={{
        user: new UserStore(),
        furniture: new FurnitureStore()
    }}>
        <App/>
        <div className="bg-white-100 container">
            Test
        </div>
    </Context.Provider>,
    document.getElementById('root')
)