import Link from "next/link";
import SumMenuItem from "./SumMenuItem";
import {useRouter} from "next/router";
import {activeLink} from "../../../utils/activeLink";
import {useEffect, useRef, useState} from "react";

export default function MenuItem({item, onClick, selectedParent}) {

    const [height, setHeight] = useState(42.05)
    const menuRef = useRef(null);
    const route = useRouter();

    const handleClick = () => {
        onClick(prevState => {
            return prevState === item?.name ? null : item?.name
        })
    }

    useEffect(() => {
        if (selectedParent === item?.name) {
            setHeight(42.05 + menuRef?.current?.getBoundingClientRect().height)
        } else {
            setHeight(42.05)
        }
    },[selectedParent])

    return (
        <li className={`menu-item menu-item-animating${activeLink(2, item?.name, route.asPath) ? " active" : ""}${selectedParent === item?.name ? " open" : ""}`} style={{height}}>
            {
                item?.link && item?.link !== "" ? (
                    <Link href={`/admin/${item.link || ""}`}
                          className={`menu-link ${item?.items && item?.items.length > 0 ? "menu-toggle" : ""}`}>
                        <i className={`menu-icon tf-icons bx bx-${item?.icon}`}></i>
                        <div data-i18n="Form Elements">{item?.title}</div>
                    </Link>
                ) : (
                    <button  className={`menu-link w-100 border-0 ${item?.items && item?.items.length > 0 ? "menu-toggle" : ""}`} onClick={handleClick}>
                        <i className={`menu-icon tf-icons bx bx-${item?.icon}`}></i>
                        <div data-i18n="Form Elements">{item?.title}</div>
                    </button>
                )
            }
            {
                item?.items && item?.items.length > 0 && (
                    <ul className="menu-sub" ref={menuRef}>
                        {
                            item?.items.map(item => {
                                return (
                                    <SumMenuItem subItem={item} key={item.id}/>
                                )
                            })
                        }
                    </ul>
                )
            }
        </li>
    )
}