 import './productComponent.scss'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
  
    return (
    <div className="product" key={id}>
    <Link to={`/product/${id}`} >
      <div className="productWrapper">
          <div className="imageContainer">
            <img  src={image} alt={title} />
          </div>
            <div className="title">{title}</div>
            <div className="price">$ {price}</div>
            <div className="category">{category}</div>
        </div>
    </Link>
  </div>
  );
})
return <>{renderList}</>;
};

export default ProductComponent