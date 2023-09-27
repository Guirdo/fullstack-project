import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Layout () {
    return <>
        <header></header>
        <SideBar></SideBar>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
    </>
};