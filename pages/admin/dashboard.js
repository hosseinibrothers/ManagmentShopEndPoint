import AdminLayout from "../../layouts/adminLayout";

export default function Dashboard() {
    return (
        <div>
            this is dashboard
        </div>
    )
}

Dashboard.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
