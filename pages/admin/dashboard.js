import AdminLayout from "../../layouts/adminLayout";
import DropZone from "../../components/admin/Dropzone";

export default function Dashboard() {

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
                            <div>
                                <DropZone/>
                                <div id="defaultFormControlHelp" className="form-text">
                                    ما هرگز اطلاعات شما را در اختیار کسی نمی‌گذاریم.
                                </div>
                            </div>
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
