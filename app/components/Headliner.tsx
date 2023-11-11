import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook, 
    faSquareXTwitter, 
    faInstagramSquare, 
    faTiktok 
} from "@fortawesome/free-brands-svg-icons"

export default function Headliner() {
    return (
        <div className="headliner w-full bg-blue-placebo px-100px h-30px flex items-center top-0 left-0" >
            <ul className="flex gap-30px items-center text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faTiktok} />
            </ul>
        </div>
    );
}