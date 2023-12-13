import toast from "react-hot-toast";

const useTostify = (props) => {
    const { toastType, toastName } = props;
    return (
        toastType === "success" ? toast.success(toastName, {
            className: "font-ProximaNovaSemiBold",
            position: "top-center",
            duration: 1500
        }) : toast.error(toastName, {
            className: "font-ProximaNovaSemiBold",
            position: "top-center",
            duration: 1500
        })
    )
}

export default useTostify