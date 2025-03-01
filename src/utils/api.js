// ========================================= AUTH =========================================================
export const login = (username, password) => fetch('http://localhost:8080/auth',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({username, password})
});

export const signUp = userDto => fetch('http://localhost:8080/sign-up',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userDto)
});

// ========================================= PLANTS =========================================================

export const getFieldsWithAuth = token => () => fetch('http://localhost:8080/plants/field/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const getSowingsWithAuth = token => () => fetch('http://localhost:8080/plants/sowing/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const getCropsWithAuth = token => () => fetch('http://localhost:8080/plants/crop/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const addFieldWithAuth = token => fieldDto => fetch('http://localhost:8080/plants/field/new',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(fieldDto)
});

export const addSowingWithAuth = token => sowingDto => fetch('http://localhost:8080/plants/sowing/new',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(sowingDto)
});

export const collectGrainWithAuth = token => id => fetch('http://localhost:8080/plants/sowing/' + id,  {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

// ========================================= ANIMALS =========================================================

export const getCorralsWithAuth = token => () => fetch('http://localhost:8080/animals/corral/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const getAnimalsWithAuth = token => () => fetch('http://localhost:8080/animals/animal/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const getAnimalCategoriesWithAuth = token => () => fetch('http://localhost:8080/animals/animal-category/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const addCorralWithAuth = token => corralDto => fetch('http://localhost:8080/animals/corral/new',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(corralDto)
});

export const addAnimalWithAuth = token => herdDto => fetch('http://localhost:8080/animals/animal/new',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(herdDto)
});

export const collectMeatWithAuth = token => id => fetch('http://localhost:8080/animals/animal/' + id,  {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

// ========================================= FINANCE =========================================================

export const getBalanceWithAuth = token => () => fetch('http://localhost:8080/commodities/balance/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const getAllCommoditiesWithAuth = token => () => fetch('http://localhost:8080/commodities/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }
});

export const buyWithAuth = token => commodityDto => fetch('http://localhost:8080/commodities/buy',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(commodityDto)
});

export const sellWithAuth = token => commodityDto => fetch('http://localhost:8080/commodities/sell',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(commodityDto)
});