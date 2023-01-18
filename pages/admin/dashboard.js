import AdminLayout from "../../layouts/adminLayout";
import Table from "../../components/common/Table";

export default function Dashboard() {

    const handleDelete = (id) => {
        console.log("delete" + id)
    }

    const handleEdit = (id) => {
        console.log("edit" + id)
    }

    const columns = [
        {
            key: "project",
            title: "پروژه",
        },
        {
            key: "customer",
            title: "مشتری",
        },
        {
            key: "users",
            title: "کاربران",
        },
        {
            key: "status",
            title: "وضعیت",
            render: (_, {status}) => (
                <span>{status ? "active" : "deActive"}</span>
            )
        },
        {
            key: "actions",
            title: "عمل ها",
            render: (_, {id}) => (
                <div className="d-flex justify-content-start">
                    <button className="btn px-2" onClick={() => handleEdit(id)}><i
                        className="bx bx-edit-alt me-1"></i></button>
                    <button className="btn px-2" onClick={() => handleDelete(id)}><i className="bx bx-trash me-1"></i>
                    </button>
                </div>
            ),
        },
    ];

    const data = [
        {
            project: "Francisco Mendes",
            users: "hosein",
            customer: "Full Stack",
            status: true,
            id: 1,
        },
        {
            project: "Ricardo Malva",
            users: "hosein",
            customer: "Social Media Manager",
            status: false,
            id: 2,
        },
    ];

    return (
        <>
            <h4 className="py-3 breadcrumb-wrapper mb-4">
                <span className="text-muted fw-light">فرم‌ها /</span> ورودی‌های پایه
            </h4>

            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <h5 className="card-header">پیش‌فرض</h5>
                        <div className="card-body">
                            <Table data={data} columns={columns} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Dashboard.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
