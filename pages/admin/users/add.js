import AdminLayout from "../../../layouts/adminLayout";

export default function Add() {
    return (
        <div>this is user add</div>
    )
}

Add.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}