import Headliner from "./Headliner";
import Navigation from "./Navigation";

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({children}: LayoutProps) {
    return(
        <div className="layout">
            <Headliner />
            <Navigation />
            <div className="layout-container">
                {children}
            </div>
        </div>
    );
}