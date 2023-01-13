import {useEffect, useRef, useState} from "react";
import {useIsOpenSidebar, useIsOpenSidebarAction} from "../../../context/toggleSidebarContext";
import PerfectScrollbar from 'react-perfect-scrollbar'
export default function Header() {

    const [isShowDropdownUser, setIsShowDropdownUser] = useState(false);
    const [isShowDropdownNotification, setIsShowDropdownNotification] = useState(false);
    const [isShowSearchBox, setIsShowSearchBox] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownUserRef = useRef(null);
    const dropdownNotificationRef = useRef(null)

    const setIsOpenSidebar = useIsOpenSidebarAction()
    const isOpenSidebar = useIsOpenSidebar();

    useEffect(() => {
        document.addEventListener('mousedown', handleDropdownUser);
        document.addEventListener('mousedown', handleDropdownNotification);

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener('mousedown', handleDropdownUser);
            document.removeEventListener('mousedown', handleDropdownNotification);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])


    const handleScroll = () => {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false)
        }
    }

    const handleDropdownUser = (e) => {
        if (dropdownUserRef?.current && !dropdownUserRef.current.contains(e.target)) {
            setIsShowDropdownUser(false)
        }
    }

    const handleDropdownNotification = (e) => {
        if (dropdownNotificationRef?.current && !dropdownNotificationRef.current.contains(e.target)) {
            setIsShowDropdownNotification(false)
        }
    }

    return (
        <nav className={`layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme ${isScrolled ? "navbar-elevated" : ""}`} id="layout-navbar">
            <div className="container-fluid">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
                     onClick={() => setIsOpenSidebar({...isOpenSidebar, expanded: true})}>
                    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

                    <div className="navbar-nav align-items-center"
                         onClick={() => setIsShowSearchBox(prevState => !prevState)}>
                        <div className="nav-item navbar-search-wrapper mb-0">
                            <a className="nav-item nav-link search-toggler d-flex px-0" href="javascript:void(0);">
                                <i className="bx bx-search-alt bx-sm"></i>
                                <span className="d-none d-md-inline-block text-muted">جستجو (/+Ctrl)</span>
                            </a>
                        </div>
                    </div>


                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                               data-bs-toggle="dropdown">
                                <i className="fi fi-ir fis rounded-circle fs-3 me-1"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="fa">
                                        <i className="fi fi-ir fis rounded-circle fs-4 me-1"></i>
                                        <span className="align-middle">فارسی</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="en">
                                        <i className="fi fi-us fis rounded-circle fs-4 me-1"></i>
                                        <span className="align-middle">انگلیسی</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="fr">
                                        <i className="fi fi-fr fis rounded-circle fs-4 me-1"></i>
                                        <span className="align-middle">فرانسوی</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="de">
                                        <i className="fi fi-de fis rounded-circle fs-4 me-1"></i>
                                        <span className="align-middle">آلمانی</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="pt">
                                        <i className="fi fi-pt fis rounded-circle fs-4 me-1"></i>
                                        <span className="align-middle">پرتغالی</span>
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item me-2 me-xl-0">
                            <a className="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                                <i className="bx bx-sm"></i>
                            </a>
                        </li>


                        <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle d-flex hide-arrow" href="javascript:void(0);"
                               data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <i className="bx bx-grid-alt bx-sm"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end py-0">
                                <div className="dropdown-menu-header border-bottom">
                                    <div className="dropdown-header d-flex align-items-center py-3">
                                        <h5 className="text-body mb-0 me-auto secondary-font">میانبرها</h5>
                                        <a href="javascript:void(0)" className="dropdown-shortcuts-add text-body"
                                           data-bs-toggle="tooltip" data-bs-placement="top" title="افزودن میانبر"><i
                                            className="bx bx-sm bx-plus-circle"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-shortcuts-list scrollable-container">
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-calendar fs-4"></i>
                            </span>
                                            <a href="app-calendar.html" className="stretched-link">تقویم</a>
                                            <small className="text-muted mb-0">قرارهای ملاقات</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-food-menu fs-4"></i>
                            </span>
                                            <a href="app-invoice-list.html" className="stretched-link">برنامه
                                                صورتحساب</a>
                                            <small className="text-muted mb-0">مدیریت حساب‌ها</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-user fs-4"></i>
                            </span>
                                            <a href="app-user-list.html" className="stretched-link">برنامه کاربر</a>
                                            <small className="text-muted mb-0">مدیریت کاربران</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-check-shield fs-4"></i>
                            </span>
                                            <a href="app-access-roles.html" className="stretched-link">مدیریت
                                                نقش‌‌ها</a>
                                            <small className="text-muted mb-0">مجوزها</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-pie-chart-alt-2 fs-4"></i>
                            </span>
                                            <a href="index.html" className="stretched-link">داشبورد</a>
                                            <small className="text-muted mb-0">پروفایل کاربر</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-cog fs-4"></i>
                            </span>
                                            <a href="pages-account-settings-account.html"
                                               className="stretched-link">تنظیمات</a>
                                            <small className="text-muted mb-0">تنظیمات حساب</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-help-circle fs-4"></i>
                            </span>
                                            <a href="pages-help-center-landing.html" className="stretched-link">مرکز
                                                راهنمایی</a>
                                            <small className="text-muted mb-0">سوالات متداول و مقالات</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i className="bx bx-window-open fs-4"></i>
                            </span>
                                            <a href="modal-examples.html" className="stretched-link">مودال‌ها</a>
                                            <small className="text-muted mb-0">پاپ‌آپ‌های کاربردی</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2"
                            onClick={() => setIsShowDropdownNotification(prevState => !prevState)}
                            ref={dropdownNotificationRef}>
                            <a className={`nav-link dropdown-toggle d-flex hide-arrow ${isShowDropdownNotification ? "show" : ""}`}
                               href="javascript:void(0);"
                               data-bs-toggle="dropdown" data-bs-auto-close="outside"
                               aria-expanded={isShowDropdownNotification}>
                                <i className="bx bx-bell bx-sm"></i>
                                <span className="badge bg-danger rounded-pill badge-notifications">5</span>
                            </a>
                            <ul className={`dropdown-menu dropdown-menu-end py-0 ${isShowDropdownNotification ? "show" : ""}`}
                                data-bs-popper="none">
                                <li className="dropdown-menu-header border-bottom">
                                    <div className="dropdown-header d-flex align-items-center py-3">
                                        <h5 className="text-body mb-0 me-auto secondary-font">اعلان‌ها</h5>
                                        <a href="javascript:void(0)" className="dropdown-notifications-all text-body"
                                           data-bs-toggle="tooltip" data-bs-placement="top"
                                           title="علامت خوانده شده به همه"><i className="bx fs-4 bx-envelope-open"></i></a>
                                    </div>
                                </li>
                                <PerfectScrollbar>
                                    <li className="dropdown-notifications-list scrollable-container">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="/images/avatars/1.png" alt="avatar"
                                                                 className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی با</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی
                                                            نامفهوم</p>
                                                        <small className="text-muted">1 ساعت قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                        <span
                                                            className="avatar-initial rounded-circle bg-label-danger">اک</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با</p>
                                                        <small className="text-muted">12 ساعت قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="/images/avatars/2.png" alt="avatar"
                                                                 className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی</p>
                                                        <small className="text-muted">1 ساعت قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                        <span
                                                            className="avatar-initial rounded-circle bg-label-success"><i
                                                            className="bx bx-cart"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی با تولید</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید</p>
                                                        <small className="text-muted">1 روز قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="/images/avatars/9.png" alt="avatar"
                                                                 className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی با تولید</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                            از</p>
                                                        <small className="text-muted">2 روز قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                        <span
                                                            className="avatar-initial rounded-circle bg-label-success"><i
                                                            className="bx bx-pie-chart-alt"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی با تولید</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی
                                                            نامفهوم</p>
                                                        <small className="text-muted">3 روز قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="/images/avatars/5.png" alt="avatar"
                                                                 className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی با</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی</p>
                                                        <small className="text-muted">4 روز قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src="/images/avatars/6.png" alt="avatar"
                                                                 className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید</p>
                                                        <small className="text-muted">5 روز قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                        <span
                                                            className="avatar-initial rounded-circle bg-label-warning"><i
                                                            className="bx bx-error"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">لورم ایپسوم متن ساختگی</h6>
                                                        <p className="mb-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                            از</p>
                                                        <small className="text-muted">5 روز قبل</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-read"><span
                                                            className="badge badge-dot"></span></a>
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-notifications-archive"><span
                                                            className="bx bx-x"></span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </PerfectScrollbar>
                                <li className="dropdown-menu-footer border-top">
                                    <a href="javascript:void(0);"
                                       className="dropdown-item d-flex justify-content-center p-3">
                                        مشاهده همه اعلان‌ها
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item navbar-dropdown dropdown-user dropdown"
                            onClick={() => setIsShowDropdownUser(prevState => !prevState)} ref={dropdownUserRef}>
                            <a className={`nav-link dropdown-toggle hide-arrow ${isShowDropdownUser ? "show" : ""}`}
                               href="javascript:void(0);"
                               data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img src="/images/avatars/1.png" alt="avatar" className="rounded-circle"/>
                                </div>
                            </a>
                            <ul className={`dropdown-menu dropdown-menu-end ${isShowDropdownUser ? "show" : ""}`}
                                data-bs-popper="none">
                                <li>
                                    <a className="dropdown-item" href="pages-account-settings-account.html">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online mt-1">
                                                    <img src="/images/avatars/1.png" alt="avatar"
                                                         className="rounded-circle"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-semibold d-block">جان اسنو</span>
                                                <small>مدیر</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-profile-user.html">
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">پروفایل من</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-account-settings-account.html">
                                        <i className="bx bx-cog me-2"></i>
                                        <span className="align-middle">تنظیمات</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-account-settings-billing.html">
                          <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                            <span className="flex-grow-1 align-middle">صورتحساب</span>
                            <span
                                className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                          </span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-help-center-landing.html">
                                        <i className="bx bx-support me-2"></i>
                                        <span className="align-middle">راهنمایی</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-faq.html">
                                        <i className="bx bx-help-circle me-2"></i>
                                        <span className="align-middle">سوالات متداول</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-pricing.html">
                                        <i className="bx bx-dollar me-2"></i>
                                        <span className="align-middle">قیمت گذاری</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle">خروج</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>


                <div className={`navbar-search-wrapper search-input-wrapper ${isShowSearchBox ? "" : "d-none"}`}>
                    <input type="text" className="form-control search-input container-fluid border-0"
                           placeholder="جستجو ..." aria-label="Search..."/>
                    <i className="bx bx-x bx-sm search-toggler cursor-pointer"
                       onClick={() => setIsShowSearchBox(false)}></i>
                </div>
            </div>
        </nav>

    )
}