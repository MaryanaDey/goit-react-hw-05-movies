import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation"
import { Header, Footer, Main } from "./Layout.styled"

export default function Layout() {
    return (
        <>
        <Header>
            <Navigation />
        </Header>

        <Main>
            <Suspense>
                <Outlet />
            </Suspense>
        </Main>

        <Footer>
        Developed <a href="tel:+380994485979">Maryana Dei</a>. January 2022.
        </Footer>
        </>
    )
};
