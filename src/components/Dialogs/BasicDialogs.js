import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const basicDialogs = (payload, filter = null, func) => {
    if(filter !== null){
        Swal.fire({
            title: payload.title,
            text: payload.text,
            icon: payload.icon,
            showDenyButton: true,
            denyButtonText: 'Batal',
            confirmButtonText: payload.confirmButtonText,
            preConfirm: async () => {
                try {
                    func()
                } catch (error) {
                    console.log(error)
                }
            }
        })
    } else {
        Swal.fire({
            title: payload.title,
            text: payload.text,
            icon: payload.icon,
            confirmButtonText: payload.confirmButtonText
        })
    }
}