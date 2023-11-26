const initialState = {
    email: null,
    password: null,
    token: null,
    nama_lengkap: 'John Doe',
    endpoint: 'http://localhost:8080/'
}

const ProfilReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'get-profil':
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                token: action.payload.token,
                nama_lengkap: action.payload.nama_lengkap
            }
    
        default:
            return state
    }
}

export default ProfilReducers