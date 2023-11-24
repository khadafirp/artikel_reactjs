const initialState = {
  email: null,
  password: null,
  endpoint: 'http://localhost:8080/masuk'
};
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'pengguna-masuk':
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password
        }
      default:
        return state;
    }
  };
  
  export default loginReducer;
  