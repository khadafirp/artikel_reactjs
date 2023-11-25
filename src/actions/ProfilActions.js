import axios from "axios";
import 'sweetalert2/src/sweetalert2.scss'
import { basicDialogs } from "components/Dialogs/BasicDialogs";

export const handleProfilReducers = (payload) => {
    return {
        type: 'get-profil',
        payload: payload
    }
}

export const getProfil = (endpoint, payload) => {
    return (dispatch) => {
        axios.post(
            endpoint,
            payload
        ).then(response => {
            try {
                if(response.data['status-code'] === 200){
                    dispatch(handleProfilReducers({
                            email: response.data.data.email,
                            password: response.data.data.password,
                            token: response.data.token,
                            nama_lengkap: response.data.data.nama_lengkap
                    }))
                } else {
                basicDialogs({
                    title: 'Gagal !',
                    text: 'Tidak dapat memuat data.',
                    icon: 'error',
                    confirmButtonText: 'TUTUP'
                })
                }
            } catch (error) {
                basicDialogs({
                title: 'Error !',
                text: error,
                icon: 'error',
                confirmButtonText: 'TUTUP'
                })
            }
        })
    }
}