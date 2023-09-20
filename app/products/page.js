import Link from 'next/link';
import ProductList from '../components/carousel/ProductList';

export default function Products() {

  return (
    <div>
      <main className="container">
        <h3 className="sub-title">Products</h3>
        <ProductList />
      </main>
    </div>
  )
}
