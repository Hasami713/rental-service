import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./components/app/app";
import {offers} from './mocks/offers';
import {Setting} from './const';
import {offersList} from "./mocks/offers-list"; // если используешь Setting


const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);


root.render(
    <StrictMode>
        <App rentOffersCount={Setting.rentOffersCount}
             offersList={offersList}
             offers={offers}/>
    </StrictMode>
);