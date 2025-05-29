import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./components/app/app";
import {Settings} from "./const";

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);


root.render(
    <React.StrictMode>
        <App
            rentalOffersCount={Settings.rentOffersCount}/>
    </React.StrictMode>
);