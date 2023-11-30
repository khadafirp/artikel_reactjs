const initialState = {
    data: [],
    news_title: null,
    news_description: null, 
    kategori_id: null,
    path: null,
    news_id: null,
    endpoint: 'http://localhost:8080/'
}

const ArtikelReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'get-berita':
            return {
                ...state,
                data: action.payload.data,
            }
        case 'filter-berita':
            return {
                ...state,
                news_id: action.payload.news_id,
                news_title: action.payload.news_title,
                news_description: action.payload.news_description,
                kategori_id: action.payload.kategori_id,
                path: action.payload.path
            }
        case 'create-berita' && 'edit-berita':
            return {
                ...state,
                news_title: action.payload.news_title,
                news_description: action.payload.news_description,
                kategori_id: action.payload.kategori_id,
                path: action.payload.path
            }
        case 'set-path':
            return {
                ...state,
                path: action.payload.path
            }
    
        default:
            return state
    }
}

export default ArtikelReducers