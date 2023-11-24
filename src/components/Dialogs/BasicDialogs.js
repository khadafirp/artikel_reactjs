import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const basicDialogs = (payload) => {
    Swal.fire({
        title: payload.title,
        text: payload.text,
        icon: payload.icon,
        confirmButtonText: payload.confirmButtonText
    })
}