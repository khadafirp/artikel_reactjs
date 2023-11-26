import { push } from "connected-react-router";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import { basicDialogs } from "components/Dialogs/BasicDialogs";

export const getBerita = (endpoint) => {
    return (dispatch) => {
        Swal.showLoading()
        axios.get(
            endpoint + 'semua-berita',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then(response => {
            try {
                Swal.hideLoading()
                if(response.data['status-code'] === 200){
                    basicDialogs(
                        {
                            title: 'Berhasil',
                            text: 'Data berhasil dimuat.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }
                    )
                    dispatch({
                        type: 'get-berita',
                        payload: {
                            data: response.data.data
                        }
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