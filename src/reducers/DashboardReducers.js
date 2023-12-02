const initialState = {
    data: null,
    endpoint: 'http://localhost:8080/'
}

const DashboardReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'statistik':
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}

export default DashboardReducers