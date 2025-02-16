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

export const getCropsWithAuth = token => () => fetch('http://localhost:8080/plants/sowing/',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    }
});

export const addFieldWithAuth = token => fieldDto => fetch('http://localhost:8080/plants/field/new',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(fieldDto)
});

export const addCropWithAuth = token => sowingDto => fetch('http://localhost:8080/plants/sowing/new',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(sowingDto)
});

export const collectGrainWithAuth = token => sowingDto => fetch('http://localhost:8080/sign-up',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(sowingDto)
});

// ========================================= ANIMALS =========================================================

export const getCorralsWithAuth = token => () => fetch('http://localhost:8080/sign-up',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    }
});

export const getHerdsWithAuth = token => () => fetch('http://localhost:8080/sign-up',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    }
});

export const addCorralWithAuth = token => corralDto => fetch('http://localhost:8080/sign-up',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(corralDto)
});

export const addHerdWithAuth = token => herdDto => fetch('http://localhost:8080/sign-up',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(herdDto)
});

export const collectMeatWithAuth = token => herdDto => fetch('http://localhost:8080/sign-up',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(herdDto)
});

// ========================================= FINANCE =========================================================

export const buyWithAuth = token => commodityDto => fetch('http://localhost:8080/sign-up',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(commodityDto)
});

export const sellWithAuth = token => commodityDto => fetch('http://localhost:8080/sign-up',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer' + token
    },
    body: JSON.stringify(commodityDto)
});