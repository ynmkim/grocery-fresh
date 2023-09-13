export default function Products() {
  let productName = ['Redish', 'Potatos', 'Tomatos', 'Broccoli', 'Green Beans'];

  return (
    <div>
      <main className="container">
        <h1 className="sub-title">Featured Products</h1>

        <ul className="product-list">
          {
            productName.map((name, i) => { 
              return (
                <li className="product-list-item">
                <div className="product-image">
                    <img src={`/image_product_${i}.png`}/>
                </div>
                  <div className="product-text">
                    <h4 className="product-title">{ name } 500g</h4>
                    <strong className="product-price">$2</strong>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}
