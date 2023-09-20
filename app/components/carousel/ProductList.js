'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'

export default function ProductList() {
  let productData = [
    { name: 'Redish', price: 2, amount: 500 },
    { name: 'Potatos', price: 1, amount: 1000 },
    { name: 'Tomatos', price: 0.30, amount : 300},
    { name: 'Broccoli', price: 1.50, amount : 100 },
    { name: 'Green Beans', price: 1, amount: 3000 },
    { name: 'Redish', price: 2, amount: 500 },
    { name: 'Potatos', price: 1, amount: 1000 },
    { name: 'Tomatos', price: 0.30, amount : 300},
    { name: 'Broccoli', price: 1.50, amount : 100 },
    { name: 'Green Beans', price: 1, amount: 3000 }
  ]

  // 먄약에 productData[i].amount 값이 1000 작으면 + 'g', 1000 이상 10000 미만이면  productData[i].amount 값 / 1000 +'kg'
  // 킬로그램 = 그램 나누기 1000
  // 그램 = 킬로그램 곱하기 1000

  // if (productData[i].amount < 1000) {
  //   productData[i].amount + 'g'
  // } else if (1000 < productData[i].amount > 10000) {
  //   productData[i].amount + 'kg'
  // }
  
  return (
    <ul className="product-list">
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={5}
        navigation
        // navigation={1200 > 768 ? true : false}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          "--swiper-navigation-color": "transparent",
        }}
        breakpoints={{
          957: {
            width: 957,
            slidesPerView: 4,
          },
          768: {
            navigation: { enabled: false }
          },
          714: {
            width: 714,
            slidesPerView: 3, 
            navigation: { enabled: false }
          },
          471: {
            width: 471,
            slidesPerView: 2,
            navigation: { enabled: false }
          },
          228: {
            width: 228,
            slidesPerView: 1,
            navigation: { enabled: false }
          },
        }}
      >
        {
          productData.map((k, i) => {
            return (
              <SwiperSlide key={i}>
                <li className="product-item">
                  <div className="product-image">
                      <img src={`/image_product_${i}.png`} />
                  </div>
                    <div className="product-text">
                    <h4 className="product-title">
                      {productData[i].name} {
                        productData[i].amount < 1000
                        ? productData[i].amount + 'g'
                        : ( 1000 <= productData[i].amount > 10000 
                            ? productData[i].amount / 1000 + 'kg'
                            : productData[i].amount / 1000 + 'kg' // 이렇게 중복 삼항자말고 if문을 써서 할 수 없을까?
                          )
                      }
                    </h4>
                      <div className="flex-row">
                        <strong className="product-price">${productData[i].price}</strong>
                        <Link className="button-cart" href="/cart">
                          <i className="icon-cart">
                            <img src="/icon_cart.png" />
                          </i>
                          Add
                        </Link>
                      </div>
                    </div>
                  </li>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </ul>
   
  );
};