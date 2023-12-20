import { push, replace } from "connected-react-router";
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
                    dispatch({
                        type: 'filter-berita',
                        payload: {
                            news_id: null,
                            news_title: null,
                            news_description: null,
                            kategori_id: null,
                            path: null
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

export const tambahArtikel = (endpoint, payload) => {
    return (dispatch) => {
        Swal.showLoading()
        var data = new FormData()
        if(payload.news_id !== null){
            data.append('news_id', payload.news_id)
        }
        data.append('kategori_id', payload.kategori_id)
        data.append('news_title', payload.news_title)
        data.append('news_description', payload.news_description)
        data.append('path', payload.path)
        // if(payload.path.size > 100){
        //     basicDialogs({
        //         title: 'Perhatian !',
        //         text: 'Ukuran file maksimal 100kb',
        //         icon: 'warning',
        //         confirmButtonText: 'OK'
        //     })
        // } else {
            axios.post(
                endpoint,
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            ).then(response => {
                try {
                    if(response.data['status-code'] === 200){
                        dispatch({
                            type: 'tambah-berita',
                            payload: response.data.data
                        })
                        dispatch(push('/admin/tables', replace))
                        basicDialogs({
                            title: 'Berhasil !',
                            text: 'Data berhasil ditambahkan.',
                            icon: 'success',
                            confirmButtonText: 'OK'
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
        // }
    }
}

export const goEdit = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'filter-berita',
            payload: payload
        })
        dispatch(push('/admin/form-artikel'))
    }
}

export const filterArtikel = (endpoint, payload) => {
    return (dispatch) => {
        Swal.showLoading()
        axios.post(
            endpoint,
            payload,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then(response => {
            try {
                if(response.data['status-code'] === 200){
                    console.log('path = ' + JSON.stringify(response.data.data))
                    dispatch({
                        type: 'filter-berita',
                        payload: response.data.data
                    })
                    basicDialogs({
                        title: 'Berhasil !',
                        text: 'Data berhasil ditambahkan.',
                        icon: 'success',
                        confirmButtonText: 'OK'
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

export const hapus = (endpoint, payload) => {
    return (dispatch) => {
        Swal.showLoading()
        axios.post(
            endpoint,
            payload,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then(response => {
            try {
                if(response.data['status-code'] === 200){
                    basicDialogs({
                        title: 'Berhasil !',
                        text: 'Data berhasil ditambahkan.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 4000)
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

export const deleteArtikel = (endpoint, payload) => {
    return (dispatch) => {
        basicDialogs({
            title: 'Perhatian !',
            text: 'Apakah anda yakin akan menghapus data ini ?',
            icon: 'warning',
            confirmButtonText: 'OK',
            showCancelButton: true
        }, true, hapus(endpoint, payload))
    }
}

export const setPath = (payload) => (
    {
        type: 'set-path',
        payload: payload
    }
)

export const setTitle = (payload) => ({
    type: 'set-title',
    payload: payload
})

export const setDesc = (payload) => ({
    type: 'set-desc',
    payload: payload
})

export const setKategori = (payload) => ({
    type: 'set-kategori',
    payload: payload
})