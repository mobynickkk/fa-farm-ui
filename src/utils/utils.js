import {
    addCorralWithAuth,
    addCropWithAuth,
    addFieldWithAuth, addHerdWithAuth, buyWithAuth, collectGrainWithAuth, collectMeatWithAuth,
    getCorralsWithAuth,
    getCropsWithAuth,
    getFieldsWithAuth, getHerdsWithAuth, sellWithAuth
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
    getCrops: getCropsWithAuth(state?.user?.token),
    addCrop: addCropWithAuth(state?.user?.token),
    getCorrals: getCorralsWithAuth(state?.user?.token),
    addCorral: addCorralWithAuth(state?.user?.token),
    getHerds: getHerdsWithAuth(state?.user?.token),
    addHerd: addHerdWithAuth(state?.user?.token),
    collectGrain: collectGrainWithAuth(state?.user?.token),
    collectMeat: collectMeatWithAuth(state?.user?.token),
    buy: buyWithAuth(state?.user?.token),
    sell: sellWithAuth(state?.user?.token),
});