import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page';
import {LoginPage} from '../../pages/login-page/login-page';
import {OfferPage} from '../../pages/offer-page/offer-page';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {JSX} from 'react';

type AppMainPageProps = {
    rentalOffersCount: number
}

function App({rentalOffersCount}: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainPage rentalOffersCount={rentalOffersCount} />}
                />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/offer" element={<OfferPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;