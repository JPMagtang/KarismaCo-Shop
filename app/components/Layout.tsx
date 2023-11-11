import Navigation from "./Navigation";

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({children}: LayoutProps) {
    return(
        <div className="layout">
            <Navigation />
            <div className="layout-container">
                <div className="spacer h-100px"></div>
                {children}
            </div>
        </div>
    );
}