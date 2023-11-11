import { Link } from "@remix-run/react"

export default function RedirectButton(props:any) {
    return (
        <div className="button-container flex h-35px w-full justify-center z-20">
          <Link to={props.href}>
            <button 
              type="button"
              className="w-230px h-50px rounded-2xl text-xl content-center 
                hover:text-gold-digger hover:scale-105 ease-in-out duration-300 
                bg-white-chalk border-solid border-2 border-gold-digger"
            >{props.text}</button>
          </Link>
        </div>
    )
}

{/* <div className="button-container">
          <button type="button">Shop Now</button>
        </div> */}