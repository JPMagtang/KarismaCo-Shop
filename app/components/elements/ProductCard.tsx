import productImage from  "app/assets/products/06.jpg"

export default function ProductCard(props:any) {
    return (
      <div 
        className="product max-h-350px h-350px max-w-260px w-260px 
          flex flex-col p-10px hover:shadow-lg hover:cursor-pointer hover:scale-105 rounded-md ease-in-out duration-300" 
        id={props.id}
      >
          <img
            className=" h-260px w-260px object-cover rounded-md"
            src={`/assets/products/kc_pr_${props.id}.jpeg`} 
            alt={`${props.productName} image`} 
          />
          <p className="product-name font-bold">
            {props.productName.length > 25 
              ? props.productName.slice(0,28) + "..."
              : props.productName }
          </p>
          <p className="product-price">Php {props.price}</p>
          {props.colorsAvailable 
            ? <ul className="product-colors">
                {props.colorsAvailable.map((color:any) => {
                  return (
                    <li>{color}</li>
                  )
                })}
              </ul>
            : ""
          }
          {/* <p className="product-description">
            {props.description.length > 50
              ? props.description.slice(0, 50) + "..."
              : props.description}
          </p> */}
      </div>
    );
}