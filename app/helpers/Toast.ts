
import { Bounce, toast } from "react-toastify";
export default (message:string)=>{
  return toast(message, {
position: 'bottom-right',
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: 'dark',
transition: Bounce,
});
}