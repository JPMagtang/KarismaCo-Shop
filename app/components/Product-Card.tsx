import productImage from  "app/assets/products/06.jpg"

export default function ProductCard() {
    return (
        <div className="product">
            <img src={productImage} alt="product-image" />
            <p className="product-name">Product Name</p>
            <p className="product-price">Php 0.00</p>
            <ul className="product-colors">
              <li>Pink</li>
              <li>Yellow</li>
              <li>Blue</li>
            </ul>
            <p className="product-description">Product description...</p>
          </div>
    );
}