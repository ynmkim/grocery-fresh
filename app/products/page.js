import Link from 'next/link';

export default function Products() {
  let productName = ['Redish', 'Potatos', 'Tomatos', 'Broccoli', 'Green Beans'];
  let productPrice = [2, 1, 0.30, 1.50, 1];

  return (
    <div>
      <main className="container">
        <h3 className="sub-title">Products</h3>

        <ul className="product-list">
          {
            productName.map((name, i) => { 
              return (
                <li className="product-item" key={i}>
                <div className="product-image">
                    <img src={`/image_product_${i}.png`}/>
                </div>
                  <div className="product-text">
                    <h4 className="product-title">{name} 500g</h4>
                    <div className="flex-row">
                      <strong className="product-price">$1</strong>
                      <Link className="button-cart" href="/cart">
                        <i className="icon-cart">
                          <img src="/icon_cart.png" />
                        </i>
                        Add
                      </Link>
                    </div>
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
