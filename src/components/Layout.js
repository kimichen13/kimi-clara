import React from "react"
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div className={"bg-home"}>
            <Header/>
            <main className={"mt-20"}>
                <div className={"container"}>{children}</div>
            </main>
            {/* Include your Footer component here if you have one */}
        </div>
    )
}

export default Layout