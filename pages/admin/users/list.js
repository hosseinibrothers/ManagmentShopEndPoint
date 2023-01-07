import AdminLayout from "../../../layouts/adminLayout";

export default function List() {
    return (
        <div>this is users list</div>
    )
}

List.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}