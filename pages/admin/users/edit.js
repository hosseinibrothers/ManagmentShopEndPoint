import AdminLayout from "../../../layouts/adminLayout";

export default function Edit() {
    return (
        <div>this is user edit</div>
    )
}

Edit.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}