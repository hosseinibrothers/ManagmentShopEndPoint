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
            </ToggleSidebarContextProvider>
        </AuthContextProvider>
    )
}
