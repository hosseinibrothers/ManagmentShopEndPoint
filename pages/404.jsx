import Link from "next/link";

export default function () {
    return (
        <div className="container-xxl container-p-y">
            <div className="misc-wrapper">
                <h1 className="mb-2 mx-2 secondary-font">صفحه یافت نشد :(</h1>
                <p className="mb-4 mx-2">ما قادر به یافتن صفحه‌ای که به دنبال آن بودید نشدیم</p>
                <Link href="index.html" className="btn btn-primary">بازگشت به خانه</Link>
                <div className="mt-3">
                    <img src="/images/page-misc-error-light.png" alt="page-misc-error-light"
                         width="500" className="img-fluid" data-app-light-img="illustrations/page-misc-error-light.png"
                         data-app-dark-img="illustrations/page-misc-error-dark.png"/>
                </div>
            </div>
        </div>
    )
}