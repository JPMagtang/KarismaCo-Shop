import karismaCoLogoLettermark from "app/assets/logo-lettermark.png";
import karismaCoLogoRing from "app/assets/logo-ring.png";
import karismaCoLogo from "app/assets/logo.png";

export default function Loader() {
    return (
        <div className="loader-container">
            <div className="loader">
                <img className="loader-ring" src={karismaCoLogoRing} alt="loader-image" />
                <img className="loader-lettermark" src={karismaCoLogoLettermark} />
            </div>
        </div>
    );
}