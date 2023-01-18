import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";
import Sidebar from "../components/admin/Sidebar";
import {useIsOpenSidebar} from "../context/toggleSidebarContext";
import {useEffect} from "react";
import dynamic from 'next/dynamic'

const SweetAlertContextProvider = dynamic(() => import('../context/sweetAlertContext'), {
    ssr: false
})


export default function AdminLayout({children}) {

    const isShowSidebar = useIsOpenSidebar();

    useEffect(() => {
        const html = document.querySelector('html');
        if (isShowSidebar.expanded) {
            html.className = 'light-style layout-navbar-fixed layout-menu-fixed layout-menu-expanded';
        } else if (isShowSidebar.collapsed && !isShowSidebar.hovered) {
            html.className = 'light-style layout-navbar-fixed layout-menu-fixed layout-menu-collapsed'
        } else if (isShowSidebar.collapsed && isShowSidebar.hovered) {
            html.className = 'light-style layout-navbar-fixed layout-menu-fixed layout-menu-collapsed layout-menu-hover'
        } else {
            html.className = 'light-style layout-navbar-fixed layout-menu-fixed';
        }
    },[isShowSidebar])

    return (
        <SweetAlertContextProvider>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidebar/>

                    <div className="layout-page">
                        <Header/>

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {children}
                            </div>
                            <Footer/>
                            <div className="content-backdrop fade"></div>
                        </div>

                    </div>
                </div>

                <div className="layout-overlay layout-menu-toggle"></div>

                {/*Drag Target Area To SlideIn Menu On Small Screens*/}
                <div className="drag-target"></div>
            </div>
        </SweetAlertContextProvider>
    )
}