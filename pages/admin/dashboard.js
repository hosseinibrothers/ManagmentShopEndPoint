import AdminLayout from "../../layouts/adminLayout";
import Input from "../../components/common/Input";
import Toggle from "../../components/common/Toggle";
import Switch from "../../components/common/Switch";
import {useEffect, useRef, useState} from "react";
import Range from "../../components/common/Range";
import FileInput from "../../components/common/FileInput";

export default function Dashboard() {

    const [isChecked, setIsChecked] = useState(true);
    const [isChecked2, setIsChecked2] = useState(false);

    const [isRadio, setIsRadio] = useState("")
    const [range, setRange] = useState(0)

    const [myFile, setMyFile] = useState(null)
    const refFile = useRef(null)

    useEffect(() => {
        console.log(myFile)
    },[myFile])

    return (
        <>
            <h4 className="py-3 breadcrumb-wrapper mb-4">
                <span className="text-muted fw-light">فرم‌ها /</span> ورودی‌های پایه
            </h4>

            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">پیش‌فرض</h5>
                        <div className="card-body">
                            <div>
                                <Input
                                    type="text"
                                    label="نام"
                                    className=""
                                    placeholder="جان اسنو"
                                    name="name"
                                    disabled={false}
                                    readOnly={false}
                                    message={{type: 'error', text: "ما هرگز اطلاعات شما را در اختیار کسی نمی‌گذاریم."}}
                                />
                                <div id="defaultFormControlHelp" className="form-text">
                                    ما هرگز اطلاعات شما را در اختیار کسی نمی‌گذاریم.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">برچسب شناور</h5>
                        <div className="card-body">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput" placeholder="جان اسنو"
                                       aria-describedby="floatingInputHelp"/>
                                <label htmlFor="floatingInput">نام</label>
                                <div id="floatingInputHelp" className="form-text">
                                    ما هرگز اطلاعات شما را در اختیار کسی نمی‌گذاریم.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">کنترل های فرم</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">آدرس ایمیل</label>
                                <input type="email" className="form-control text-start" dir="ltr"
                                       id="exampleFormControlInput1"
                                       placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlReadOnlyInput1" className="form-label">فقط
                                    خواندنی</label>
                                <input className="form-control" type="text" id="exampleFormControlReadOnlyInput1"
                                       placeholder="ورودی فقط خواندنی ..." readOnly/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlReadOnlyInputPlain1" className="form-label">فقط
                                    خواندنی
                                    صاف</label>
                                <input type="text" readOnly className="form-control-plaintext"
                                       id="exampleFormControlReadOnlyInputPlain1" value="email@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1" className="form-label">نمونه انتخاب</label>
                                <select className="form-select" id="exampleFormControlSelect1"
                                        aria-label="Default select example">
                                    <option selected>باز کردن فهرست انتخاب</option>
                                    <option value="1">مورد یک</option>
                                    <option value="2">مورد دو</option>
                                    <option value="3">سه</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleDataList" className="form-label">نمونه لیست داده</label>
                                <input className="form-control" list="datalistOptions" id="exampleDataList"
                                       placeholder="برای جستجو تایپ کنید ..."/>
                                <datalist id="datalistOptions">
                                    <option value="San Francisco"></option>
                                    <option value="New York"></option>
                                    <option value="Seattle"></option>
                                    <option value="Los Angeles"></option>
                                    <option value="Chicago"></option>
                                </datalist>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect2" className="form-label">نمونه چند
                                    انتخابی</label>
                                <select multiple className="form-select" id="exampleFormControlSelect2"
                                        aria-label="Multiple select example">
                                    <option selected>باز کردن فهرست انتخاب</option>
                                    <option value="1">مورد یک</option>
                                    <option value="2">مورد دو</option>
                                    <option value="3">سه</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">ناحیه متنی
                                    نمونه</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">اندازه ورودی</h5>
                        <div className="card-body">
                            <small className="text-light fw-semibold">ورودی متن</small>

                            <div className="mt-2 mb-3">
                                <label htmlFor="largeInput" className="form-label">ورودی بزرگ</label>
                                <input id="largeInput" className="form-control form-control-lg" type="text"
                                       placeholder=".form-control-lg"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="defaultInput" className="form-label">ورودی پیش‌فرض</label>
                                <input id="defaultInput" className="form-control" type="text"
                                       placeholder="Default input"/>
                            </div>
                            <div>
                                <label htmlFor="smallInput" className="form-label">ورودی کوچک</label>
                                <input id="smallInput" className="form-control form-control-sm" type="text"
                                       placeholder=".form-control-sm"/>
                            </div>
                        </div>
                        <hr className="m-0"/>
                        <div className="card-body">
                            <small className="text-light fw-semibold">ورودی انتخابی</small>
                            <div className="mt-2 mb-3">
                                <label htmlFor="largeSelect" className="form-label">انتخاب بزرگ</label>
                                <select id="largeSelect" className="form-select form-select-lg">
                                    <option>انتخاب بزرگ</option>
                                    <option value="1">مورد یک</option>
                                    <option value="2">مورد دو</option>
                                    <option value="3">سه</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="defaultSelect" className="form-label">انتخاب پیش فرض</label>
                                <select id="defaultSelect" className="form-select">
                                    <option>انتخاب پیش فرض</option>
                                    <option value="1">مورد یک</option>
                                    <option value="2">مورد دو</option>
                                    <option value="3">سه</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="smallSelect" className="form-label">انتخاب کوچک</label>
                                <select id="smallSelect" className="form-select form-select-sm">
                                    <option>انتخاب کوچک</option>
                                    <option value="1">مورد یک</option>
                                    <option value="2">مورد دو</option>
                                    <option value="3">سه</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6">
                    <div className="card mb-4">
                        <h5 className="card-header">چک‌باکس‌ها و رادیوها</h5>

                        <div className="row row-bordered g-0">
                            <div className="col-md p-4">
                                <small className="text-light fw-semibold">چک‌باکس‌ها</small>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1"> انتخاب
                                        نشده </label>
                                </div>
                                <Toggle
                                    type="checkbox"
                                    label="مشخص"
                                    checked={isChecked2}
                                    disabled={false}
                                    onChange={setIsChecked2}
                                    className=""
                                    classNameInput=""
                                    value=""
                                />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck3"
                                           checked/>
                                    <label className="form-check-label" htmlFor="defaultCheck3"> انتخاب شده </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="disabledCheck1"
                                           disabled/>
                                    <label className="form-check-label" htmlFor="disabledCheck1"> انتخاب نشده
                                        غیرفعال </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="disabledCheck2"
                                           disabled
                                           checked/>
                                    <label className="form-check-label" htmlFor="disabledCheck2"> انتخاب شده
                                        غیرفعال </label>
                                </div>
                            </div>
                            <div className="col-md p-4">
                                <small className="text-light fw-semibold">رادیوها</small>
                                <div className="form-check mt-3">
                                    <input name="default-radio-1" className="form-check-input" type="radio" value=""
                                           id="defaultRadio1"/>
                                    <label className="form-check-label" htmlFor="defaultRadio1"> انتخاب
                                        نشده </label>
                                </div>
                                <Toggle
                                    type="radio"
                                    label="number1"
                                    className=""
                                    classNameInput=""
                                    checked={isRadio === "number1"}
                                    disabled={false}
                                    onChange={setIsRadio}
                                    name="group"
                                    value="number1"
                                    id="number1"
                                />
                                <Toggle
                                    type="radio"
                                    label="number2"
                                    className=""
                                    classNameInput=""
                                    checked={isRadio === "number2"}
                                    disabled={false}
                                    onChange={setIsRadio}
                                    name="group"
                                    value="number2"
                                    id="number2"
                                />
                                <Toggle
                                    type="radio"
                                    label="number3"
                                    className=""
                                    classNameInput=""
                                    checked={isRadio === "number3"}
                                    disabled={true}
                                    onChange={setIsRadio}
                                    name="group"
                                    value="number3"
                                    id="number3"
                                />
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value="" id="disabledRadio1"
                                           disabled/>
                                    <label className="form-check-label" htmlFor="disabledRadio1"> انتخاب نشده
                                        غیرفعال </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value="" id="disabledRadio2"
                                           disabled
                                           checked/>
                                    <label className="form-check-label" htmlFor="disabledRadio2"> انتخاب شده
                                        غیرفعال </label>
                                </div>
                            </div>
                        </div>
                        <hr className="m-0"/>

                        <div className="row row-bordered g-0">
                            <div className="col-md p-4">
                                <small className="text-light fw-semibold d-block">چک‌باکس‌های درون‌خطی</small>
                                <div className="form-check form-check-inline mt-3">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                           value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                           value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                           value="option3"
                                           disabled/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">3
                                        (غیرفعال)</label>
                                </div>
                            </div>
                            <div className="col-md p-4">
                                <small className="text-light fw-semibold d-block">رادیوهای درون‌خطی</small>
                                <div className="form-check form-check-inline mt-3">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio3" value="option3" disabled/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">3
                                        (غیرفعال)</label>
                                </div>
                            </div>
                        </div>
                        <hr className="m-0"/>

                        <div className="row row-bordered g-0">
                            <div className="col-md p-4">
                                <small className="text-light fw-semibold d-block">رنگ‌های چک‌باکس‌ها</small>

                                <div className="form-check form-check-primary mt-3">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="customCheckPrimary"
                                           checked/>
                                    <label className="form-check-label"
                                           htmlFor="customCheckPrimary">اولیه</label>
                                </div>
                                <div className="form-check form-check-secondary">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="customCheckSecondary" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customCheckSecondary">ثانویه</label>
                                </div>
                                <div className="form-check form-check-success">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="customCheckSuccess"
                                           checked/>
                                    <label className="form-check-label"
                                           htmlFor="customCheckSuccess">موفقیت</label>
                                </div>
                                <div className="form-check form-check-danger">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="customCheckDanger"
                                           checked/>
                                    <label className="form-check-label"
                                           htmlFor="customCheckDanger">اخطار</label>
                                </div>
                                <div className="form-check form-check-warning">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="customCheckWarning"
                                           checked/>
                                    <label className="form-check-label"
                                           htmlFor="customCheckWarning"> هشدار </label>
                                </div>
                                <div className="form-check form-check-info">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="customCheckInfo"
                                           checked/>
                                    <label className="form-check-label"
                                           htmlFor="customCheckInfo"> اطلاعات </label>
                                </div>
                                <div className="form-check form-check-dark">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="customCheckDark"
                                           checked/>
                                    <label className="form-check-label"
                                           htmlFor="customCheckDark"> تیره </label>
                                </div>
                            </div>
                            <div className="col-md p-4">
                                <small className="text-light fw-semibold d-block">رنگ‌های رادیوها</small>
                                <div className="form-check form-check-primary mt-3">
                                    <input name="customRadioPrimary" className="form-check-input" type="radio"
                                           value=""
                                           id="customRadioPrimary" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customRadioPrimary"> اولیه </label>
                                </div>
                                <div className="form-check form-check-secondary">
                                    <input name="customRadioSecondary" className="form-check-input" type="radio"
                                           value="" id="customRadioSecondary" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customRadioSecondary"> ثانویه </label>
                                </div>
                                <div className="form-check form-check-success">
                                    <input name="customRadioSuccess" className="form-check-input" type="radio"
                                           value=""
                                           id="customRadioSuccess" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customRadioSuccess"> موفقیت </label>
                                </div>
                                <div className="form-check form-check-danger">
                                    <input name="customRadioDanger" className="form-check-input" type="radio"
                                           value=""
                                           id="customRadioDanger" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customRadioDanger"> اخطار </label>
                                </div>
                                <div className="form-check form-check-warning">
                                    <input name="customRadioWarning" className="form-check-input" type="radio"
                                           value=""
                                           id="customRadioWarning" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customRadioWarning"> هشدار </label>
                                </div>
                                <div className="form-check form-check-info">
                                    <input name="customRadioInfo" className="form-check-input" type="radio"
                                           value=""
                                           id="customRadioInfo" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customRadioInfo"> اطلاعات </label>
                                </div>
                                <div className="form-check form-check-dark">
                                    <input name="customRadioDark" className="form-check-input" type="radio"
                                           value=""
                                           id="customRadioDark" checked/>
                                    <label className="form-check-label"
                                           htmlFor="customRadioDark"> تیره </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-4">
                        <h5 className="card-header">سوئیچ‌ها</h5>
                        <div className="card-body">
                            <div className="form-check form-switch mb-2">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ورودی چک‌باکس
                                    سوئیچ
                                    پیش‌فرض</label>
                            </div>
                            <Switch
                                label="سوییچ کاستوم شده"
                                id="mySwitch"
                                className=""
                                classNameInput=""
                                checked={isChecked}
                                onChange={setIsChecked}
                                disabled={false}
                                name=""
                                value="hosein"
                            />
                            <div className="form-check form-switch mb-2">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                       checked/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">ورودی چک‌باکس
                                    سوئیچ
                                    انتخاب شده</label>
                            </div>
                            <div className="form-check form-switch mb-2">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled"
                                       disabled/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">ورودی چک‌باکس
                                    سوئیچ
                                    غیرفعال</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled"
                                       checked
                                       disabled/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">ورودی
                                    چک‌باکس
                                    سوئیچ انتخاب شده غیرفعال</label>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-4 mb-xl-0">
                        <h5 className="card-header">بازه</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="formRange1" className="form-label">نمونه بازه</label>
                                <input type="range" className="form-range" id="formRange1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledRange" className="form-label">بازه غیرفعال</label>
                                <input type="range" className="form-range" id="disabledRange" disabled/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formRange2" className="form-label">حداقل و حداکثر</label>
                                <input type="range" className="form-range" min="0" max="5" id="formRange2"/>
                            </div>
                            <div>
                                <label htmlFor="formRange3" className="form-label">قدم‌ها</label>
                                <input type="range" className="form-range" min="0" max="5" step="0.5" id="formRange3"/>
                            </div>
                            <div>
                                <Range
                                    label="رنج"
                                    className=""
                                    step="10"
                                    min="0"
                                    max="50"
                                    value={range}
                                    onChange={setRange}
                                    disabled={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6">

                    <div className="card mb-4">
                        <h5 className="card-header">ورودی‌های HTML5</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label htmlFor="html5-text-input" className="col-md-2 col-form-label">متن</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" value="فرست" id="html5-text-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-search-input" className="col-md-2 col-form-label">جستجو</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="search" value="جستجو ..."
                                           id="html5-search-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-email-input" className="col-md-2 col-form-label">ایمیل</label>
                                <div className="col-md-10">
                                    <input className="form-control text-start" dir="ltr" type="email"
                                           value="john@example.com"
                                           id="html5-email-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-url-input" className="col-md-2 col-form-label">آدرس URL</label>
                                <div className="col-md-10">
                                    <input className="form-control text-start" dir="ltr" type="url"
                                           value="https://rtl-theme.com" id="html5-url-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-tel-input" className="col-md-2 col-form-label">تلفن</label>
                                <div className="col-md-10">
                                    <input className="form-control text-start" dir="ltr" type="tel"
                                           value="90-(164)-188-556"
                                           id="html5-tel-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-password-input" className="col-md-2 col-form-label">رمز
                                    عبور</label>
                                <div className="col-md-10">
                                    <input className="form-control text-start" dir="ltr" type="password"
                                           value="password"
                                           id="html5-password-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-number-input" className="col-md-2 col-form-label">شماره</label>
                                <div className="col-md-10">
                                    <input className="form-control text-start" dir="ltr" type="number" value="18"
                                           id="html5-number-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-datetime-local-input" className="col-md-2 col-form-label">تاریخ و
                                    زمان</label>
                                <div className="col-md-10">
                                    <input className="form-control" dir="ltr" type="datetime-local"
                                           value="2021-06-18T12:30:00"
                                           id="html5-datetime-local-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-date-input" className="col-md-2 col-form-label">تاریخ</label>
                                <div className="col-md-10">
                                    <input className="form-control" dir="ltr" type="date" value="2021-06-18"
                                           id="html5-date-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-month-input" className="col-md-2 col-form-label">ماه</label>
                                <div className="col-md-10">
                                    <input className="form-control" dir="ltr" type="month" value="2021-06"
                                           id="html5-month-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-week-input" className="col-md-2 col-form-label">هفته</label>
                                <div className="col-md-10">
                                    <input className="form-control" dir="ltr" type="week" value="2021-W25"
                                           id="html5-week-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-time-input" className="col-md-2 col-form-label">زمان</label>
                                <div className="col-md-10">
                                    <input className="form-control" dir="ltr" type="time" value="12:30:00"
                                           id="html5-time-input"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="html5-color-input" className="col-md-2 col-form-label">رنگ</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="color" value="#666EE8"
                                           id="html5-color-input"/>
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="html5-range" className="col-md-2 col-form-label">بازه</label>
                                <div className="col-md-10">
                                    <input type="range" className="form-range mt-3" id="html5-range"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <h5 className="card-header">ورودی فایل</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">نمونه ورودی فایل پیش‌فرض</label>
                                <input className="form-control" type="file" id="formFile"/>
                            </div>
                            <div className="mb-3">
                                <FileInput
                                    name="filename"
                                    disabled={false}
                                    onChange={setMyFile}
                                    label="ورودی من"
                                    className=""
                                    refFile={refFile}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">نمونه ورودی فایل چند
                                    انتخابی</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple/>
                            </div>
                            <div>
                                <label htmlFor="formFileDisabled" className="form-label">نمونه ورودی فایل
                                    غیرفعال</label>
                                <input className="form-control" type="file" id="formFileDisabled" disabled/>
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
