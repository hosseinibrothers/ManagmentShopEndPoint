import AdminLayout from "../../layouts/adminLayout";
import Select from "../../components/common/Select";
import {useState} from "react";

const initialOptions = [
    {value: 1, label: 'تست یک'},
    {value: 2, label: 'تست دو'},
    {value: 3, label: 'تست سه'},
    {value: 4, label: 'تست چهار'},
    {value: 5, label: 'تست پنج'},
    {value: 6, label: 'تست شش'},
]
export default function Dashboard() {

    const [selectedOption, setSelectedOption] = useState({value: 1, label: 'تست یک'});

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
                                <Select
                                    label="ورودی انتخاب"
                                    placeholder="انتخاب کنید.."
                                    options={initialOptions}
                                    value={selectedOption}
                                    onChange={setSelectedOption}
                                />
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
