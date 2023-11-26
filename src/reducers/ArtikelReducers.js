const initialState = {
    data: [],
    endpoint: 'http://localhost:8080/'
}

const ArtikelReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'get-berita':
            return {
                ...state,
                data: action.payload.data,
            }
    
        default:
            return state
    }
}

export default ArtikelReducers