import { push } from "connected-react-router";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { basicDialogs } from "components/Dialogs/BasicDialogs"

export const setLogin = (endpoint, payload) => {
  return async (dispatch) => {
    Swal.showLoading()
    axios.post(
      endpoint,
      payload
    ).then(response => {
      try {
        if(response.data['status-code'] === 200){
          Swal.hideLoading()
          basicDialogs({
            title: 'Berhasil !',
            text: 'Anda berhasil masuk.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          localStorage.setItem('email', payload.email)
          localStorage.setItem('password', payload.password)
          localStorage.setItem('token', response.data.data.token)
          dispatch(push('/admin/dashboard'))
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

export const setDaftar = (endpoint, payload) => {
  return () => {
      Swal.showLoading()
      axios.post(
      endpoint,
      payload
      ).then(response => {
      try {
          if(response.data['status-code'] === 200){
          Swal.hideLoading()
          basicDialogs({
              title: 'Berhasil !',
              text: 'Pendaftaran berhasil.',
              icon: 'success',
              confirmButtonText: 'OK'
          })
          window.location.reload()
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