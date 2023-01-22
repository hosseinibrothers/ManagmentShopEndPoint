import Link from "next/link";
import {activeLink, activeSubmenuLink} from "../../../utils/activeLink";
import {useRouter} from "next/router";

export default function SumMenuItem({subItem}) {

    const route = useRouter();

    return (
        <li className={`menu-item ${activeSubmenuLink(3,subItem?.link, route.asPath, 2) ? "open active" : ""}`}>
            <Link href={`/admin/${subItem?.link || ""}`} className={`menu-link ${subItem?.items && subItem?.items.length > 0 ? "menu-toggle" : ""}`}>
                <div data-i18n="Basic Inputs">{subItem?.title}</div>
            </Link>
            {
                subItem?.items && subItem?.items.length > 0 && (
                    <ul className="menu-sub">
                        {
                            subItem?.items.map(item => {
                                return (
                                    <SumMenuItem subItem={item} key={item.id} />
                                )
                            })
                        }
                    </ul>
                )
            }
        </li>
    )
}