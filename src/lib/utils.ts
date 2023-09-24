import { toast } from "react-toastify"

export function notify(type:"success" | "error", message:string){
  type === 'success' ?  toast.success(message) : toast.error(message)
}