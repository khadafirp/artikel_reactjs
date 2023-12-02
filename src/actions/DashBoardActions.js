import axios from "axios";
import { basicDialogs } from "components/Dialogs/BasicDialogs";
import Swal from "sweetalert2/dist/sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

export const getStatistik = (endpoint) => {
    return (dispatch) => {
        Swal.showLoading()
        axios.get(
            endpoint,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then(response => {
            try {
                if(response.data['status-code'] === 200){
                    console.log('response = ' + JSON.stringify(response.data.data))
                    basicDialogs({
                        title: 'Berhasil !',
                        text: 'Data berhasil dimuat.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    dispatch({
                        type: 'statistik',
                        payload: response.data
                    })
                } else {
                    basicDialogs({
                        title: 'Gagal !',
                        text: response.data.message,
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