import { toast } from "react-toastify/";
import "react-toastify/dist/ReactToastify.css";

export const toastWarnNotify = (msg) => {
  toast.warnn(msg, {
    autClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const toastSuccesNotify = (msg) => {
  toast.warnn(msg, {
    autClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const toastErrorNotify = (msg) => {
  toast.warnn(msg, {
    autClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
