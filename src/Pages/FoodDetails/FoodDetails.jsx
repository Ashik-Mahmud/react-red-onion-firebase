import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useFoods from "../../Hooks/useFoods";
const FoodDetails = () => {
  const { foodId, slug } = useParams();
  const { foods, loading } = useFoods(slug);
  const findFood = foods.find((food) => food.id === Number(foodId));
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    setImgURL(findFood?.image);
  }, [findFood]);
  if (!loading) {
    return (
      <div className="text-center py-5 my-5 d-flex gap-5 justify-content-center">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  } else {
    return (
      <section id="food-details" className="py-5 mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <h1>{findFood?.title}</h1>
              <p>{findFood?.desc}</p>
              <div className="d-flex align-items-center gap-4 my-2">
                <h1>${findFood?.price}</h1>
                <div className="counter d-flex align-items-center ">
                  <span className="decrease cursor-pointer px-2">-</span>
                  <input
                    type="number"
                    className=" border-0 text-center"
                    name="counter"
                    value={1 || ""}
                    id="counter"
                    readOnly
                  />
                  <span className="increase cursor-pointer px-3">+</span>
                </div>
              </div>

              <button className="btn-app d-flex">
                <AiOutlineShoppingCart />
                Add to cart
              </button>
              <Swiper
                dir="rtl"
                slidesPerView={3}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper my-5"
              >
                {findFood?.gallery?.map((image) => (
                  <SwiperSlide key={image} onClick={() => setImgURL(image)}>
                    <img
                      className="cursor-pointer"
                      src={image}
                      width={140}
                      alt="slideImage"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="col-lg-6">
              <img src={imgURL} alt={findFood?.title} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default FoodDetails;
