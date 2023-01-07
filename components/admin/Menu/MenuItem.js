import Link from "next/link";
import SumMenuItem from "./SumMenuItem";
import {useRouter} from "next/router";
import {activeLink} from "../../../utils/activeLink";

export default function MenuItem({item}) {

    const route = useRouter();

    return (
        <li className={`menu-item ${activeLink(2,item?.link, route.asPath) ? "open active" : ""}`}>
            <Link href={`/admin/${item.link || ""}`}  className={`menu-link ${item?.items && item?.items.length > 0 ? "menu-toggle" : ""}`}>
                <i className={`menu-icon tf-icons bx bx-${item?.icon}`}></i>
                <div data-i18n="Form Elements">{item?.title}</div>
            </Link>
            {
                item?.items && item?.items.length > 0 && (
                    <ul className="menu-sub">
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