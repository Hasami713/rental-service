import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page';
import {LoginPage} from '../../pages/login-page/login-page';
import {OfferPage} from '../../pages/offer-page/offer-page';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {AppRoute, AuthorizationStatus} from '../../const.js'
import {JSX} from 'react';
import {PrivateRoute} from "../private-route/private-route";
import {FullOffer, OffersList} from "../../types/offer";
import { offersList } from '../../mocks/offers-list';

type AppMainPageProps = {
    rentOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}

function App({rentOffersCount, offers}: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentOffersCount} offersList={offersList}/>} />
                <Route path={AppRoute.Login} element={<LoginPage />} />
                <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={ AuthorizationStatus.NoAuth}> <FavoritesPage /> </PrivateRoute>} />
                <Route path={AppRoute.Offer} element={<OfferPage offer={offers[0]}/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;