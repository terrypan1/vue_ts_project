import Swal from "sweetalert2";

let toast = Swal.mixin({
    buttonsStyling: false,
    customClass: {
        confirmButton: "btn btn-success m-1",
        cancelButton: "btn btn-danger m-1",
        input: "form-control",
    },
});

export const swalSuccess = (message:string) => {
    toast.fire("成功", `${message}`, "success");
}
export const swalError = (message:string) => {
    toast.fire("失敗", `${message}`, "error");
}
export const swalWarning = (message:string) => {
    toast.fire("請稍後重試", `${message}`, "warning");
}