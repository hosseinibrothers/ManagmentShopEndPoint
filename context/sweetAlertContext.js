import {createContext, useContext, useState} from "react";
import SweetAlert2 from "react-sweetalert2";

const SweetAlertContext = createContext();


export const SweetAlertContextProvider = ({children}) => {

    const [sweetAlertProps, setSweetAlertProps] = useState({});
    return (
        <SweetAlertContext.Provider value={setSweetAlertProps}>
            {children}
            <SweetAlert2 {...sweetAlertProps}
                         didClose={() => {
                             setSweetAlertProps({})
                         }}
                         onConfirm={result => {
                             setSweetAlertProps({})
                         }}
            />
        </SweetAlertContext.Provider>
    )
}


export const useSweetAlert = () => useContext(SweetAlertContext);

export default SweetAlertContextProvider;