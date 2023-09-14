import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareXTwitter, faInstagramSquare, faTiktok } from "@fortawesome/free-brands-svg-icons"

export default function Headliner() {
    return (
        <div className="headliner" >
            <ul>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faTiktok} />
            </ul>
        </div>
    );
}