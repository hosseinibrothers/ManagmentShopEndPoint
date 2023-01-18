import '../styles/globals.css'
import '../styles/boxicons.css';
import '../styles/fontawesome.css';
import '../styles/core.css';
import '../styles/theme-default.css';
import '../styles/demo.css';
import '../styles/rtl.css';
import '../styles/auth.css';
import '../styles/page-misc.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/dropzone.css';
import '../styles/select.css';
import {AuthContextProvider} from "../context/AuthContext";
import {ToggleSidebarContextProvider} from "../context/toggleSidebarContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({Component, pageProps}) {

    const getLayout = Component.getLayout || ((page) => page)

    return (
        <AuthContextProvider>
            <ToggleSidebarContextProvider>
                {
                    getLayout(
                        <Component {...pageProps} />
                    )
                }
                <ToastContainer
                    rtl={true}
                />
            </ToggleSidebarContextProvider>
        </AuthContextProvider>
    )
}
