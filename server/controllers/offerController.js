import Offer from '../models/Offer.js';
import {router} from "../routes/index.js";

async function getAllOffers(req, res, next) {
    try{
        const offers = await Offer.findAll({});
        res.json(offers);
    } catch(err){
        console.log('Не удалось получить список предложений:', err);
    }
}
export {getAllOffers};