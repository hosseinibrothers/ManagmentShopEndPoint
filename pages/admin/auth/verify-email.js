import Link from "next/link";

export default function verifyEmail() {
    return (
        <div className="authentication-wrapper authentication-basic px-4">
            <div className="authentication-inner py-4">
                <div className="card">
                    <div className="card-body">
                        <div className="app-brand justify-content-center">
                            <Link href="/" className="app-brand-link gap-2">
                                <span className="app-brand-logo demo">
                                </span>
                                <span className="app-brand-text demo h3 mb-0 fw-bold">فرست</span>
                            </Link>
                        </div>
                        <h4 className="mb-2">ایمیل خود را تایید کنید</h4>
                        <p className="text-start">
                            لینک فعال‌سازی حساب به ایمیل شما ارسال شد:<br/>hello@example.com<br/> لطفا لینک ارسال شده را
                            برای ادامه دنبال کنید.
                        </p>
                        <Link className="btn btn-primary w-100 my-3" href="/"> فعلا رد کنید </Link>
                        <p className="text-center">
                            ایمیل را دریافت نکردید؟
                            <a href="javascript:void(0);"> ارسال دوباره </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}