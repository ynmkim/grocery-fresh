import Link from 'next/link';

export default function Home() {
  let discount = '60'
  return (
    <div>
      <main className="container">
        <h1 className="main-title">Don’t miss our daily<br />amazing deals.</h1>
        <p className="main-desc">Save up to { discount }% off on your first order</p>
      </main>
    </div>
  )
}
