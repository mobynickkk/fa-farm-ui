import {
    addCorralWithAuth,
    addSowingWithAuth,
    addFieldWithAuth,
    addAnimalWithAuth,
    buyWithAuth,
    collectGrainWithAuth,
    collectMeatWithAuth,
    getCorralsWithAuth,
    getSowingsWithAuth,
    getFieldsWithAuth,
    getAnimalsWithAuth,
    sellWithAuth,
    getBalanceWithAuth,
    getAllCommoditiesWithAuth,
    getCropsWithAuth,
    getAnimalCategoriesWithAuth
} from "./api";

export function getCookie(name) {
    let cookieArr = document.cookie.split("; ");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair) {
            return cookiePair;
        }
    }
    return null;
}

export const apis = state => ({
    getFields: getFieldsWithAuth(state?.user?.token),
    addField: addFieldWithAuth(state?.user?.token),
    getSowings: getSowingsWithAuth(state?.user?.token),
    addSowing: addSowingWithAuth(state?.user?.token),
    getCrops: getCropsWithAuth(state?.user?.token),
    getCorrals: getCorralsWithAuth(state?.user?.token),
    addCorral: addCorralWithAuth(state?.user?.token),
    getAnimals: getAnimalsWithAuth(state?.user?.token),
    addAnimal: addAnimalWithAuth(state?.user?.token),
    getAnimalCategories: getAnimalCategoriesWithAuth(state?.user?.token),
    collectGrain: collectGrainWithAuth(state?.user?.token),
    collectMeat: collectMeatWithAuth(state?.user?.token),
    getBalance: getBalanceWithAuth(state?.user?.token),
    getAllCommodities: getAllCommoditiesWithAuth(state?.user?.token),
    buy: buyWithAuth(state?.user?.token),
    sell: sellWithAuth(state?.user?.token),
});

export const INITIAL_STATE = {
    user: {token: localStorage.getItem('token'), username: null},
    tab: 0,
    podTab: 0,
    modalData: {}
};