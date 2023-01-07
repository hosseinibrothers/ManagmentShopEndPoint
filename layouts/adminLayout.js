import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";
import Sidebar from "../components/admin/Sidebar";
import {ToggleSidebarContextProvider} from "../context/toggleSidebarContext";

export default function AdminLayout({children}) {

    return (
        <ToggleSidebarContextProvider>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidebar/>

                    <div className="layout-page">
                        <Header/>

                        <div className="content-wrapper">
                            {children}

                            <Footer/>
                            <div className="content-backdrop fade"></div>
                        </div>

                    </div>
                </div>

                <div className="layout-overlay layout-menu-toggle"></div>

                {/*Drag Target Area To SlideIn Menu On Small Screens*/}
                <div className="drag-target"></div>
            </div>
        </ToggleSidebarContextProvider>
    )
}