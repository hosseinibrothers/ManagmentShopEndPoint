import data from '../../../mockData/menu.json';
import MenuItem from "../Menu/MenuItem";
import Link from "next/link";
import {useIsOpenSidebar, useIsOpenSidebarAction} from "../../../context/toggleSidebarContext";

export default function Sidebar() {

    const setIsOpenSidebar = useIsOpenSidebarAction();
    const isOpenSidebar = useIsOpenSidebar();
    const {pages} = data;

    const handleHoverSidebar = () => {
        if (isOpenSidebar.collapsed) {
            setIsOpenSidebar({...isOpenSidebar, hovered: true})
        }
    }

    const handleBlurSidebar = () => {
        if (isOpenSidebar.collapsed) {
            setIsOpenSidebar({...isOpenSidebar, hovered: false})
        }
    }

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" onMouseEnter={handleHoverSidebar} onMouseLeave={handleBlurSidebar}>
            <div className="app-brand demo">
                <Link href="/" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        {/*<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                        {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}

                        {/*</svg>*/}
                      </span>
                    <span className="app-brand-text demo menu-text fw-bold ms-2">فرست</span>
                </Link>

                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                    <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle" onClick={() => setIsOpenSidebar({...isOpenSidebar, collapsed: !isOpenSidebar.collapsed})}></i>
                    <i className="bx bx-x d-block d-xl-none bx-sm align-middle" onClick={() => setIsOpenSidebar({...isOpenSidebar, expanded: false})}></i>
                </a>
            </div>

            <div className="menu-divider mt-0"></div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">

                {/*Apps & Pages*/}
                <li className="menu-header small text-uppercase"><span
                    className="menu-header-text">برنامه‌ها و صفحات</span></li>
                {
                    pages && pages.length > 0 && pages.map(item => {
                        return (
                            <MenuItem item={item} key={item.id}/>
                        )
                    })
                }

            </ul>
        </aside>
    )
}