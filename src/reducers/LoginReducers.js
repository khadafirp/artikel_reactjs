const initialState = {
  email: null,
  password: null,
  email_daftar: null,
  password_daftar: null,
  nama_lengkap: null,
  endpoint: 'http://localhost:8080/'
};
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'pengguna-masuk':
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password
        }
      case 'pengguna-daftar':
        return {
          ...state,
          email_daftar: action.payload.email,
          password_daftar: action.payload.password,
          nama_lengkap: action.payload.nama_lengkap
        }
      default:
        return state;
    }
  };
  
  export default loginReducer;
  