

var initialState = {
    orgnization: [],
    orgnizationDetail: {},
    token: null,
    telecode: "",
    userInfo:{},
    bindInfo:[],
    insertSuccess:false,
}

export function statusReducer (state = [], action) {

    switch (action.type) {
        // etc.
        default:
            return state;
    }
}

export function userReducer(state= initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}