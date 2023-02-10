import { useSelector } from "react-redux"
import { selectAllOptions } from "../../features/options/optionsSlice"


export const Sidebar = () => {

    const options = useSelector(selectAllOptions)

    return (
        <div className={options.sidebarOpen ? "sidebar open" : "sidebar"}>

        </div>
    )
}