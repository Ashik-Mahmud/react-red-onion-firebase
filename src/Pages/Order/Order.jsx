import React from "react";
import "../Login/Styles/Styles.css";
import OrderItem from "./OrderItem/OrderItem";

const Order = () => {
  return (
    <section id="order" className="py-5 my-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <form action="" className="form-wrapper w-100">
              <h4 className="mb-2">Edit Delivery details</h4>
              <div className="my-2">
                <label htmlFor="system">Address</label>
                <input
                  type="text"
                  placeholder="where?"
                  className="form-control"
                />
              </div>
              <div className="my-2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Personal Phone Number"
                  className="form-control"
                />
              </div>
              <div className="my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  value={"ashik@gmail.com" || ""}
                  readOnly
                  className="form-control"
                />
              </div>
              <div className="my-3">
                <label htmlFor="home-address">Flat, Suit & Floor</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Flat, suit & Floor"
                />
              </div>
              <div className="my-3">
                <label htmlFor="home-address">Business name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="business name"
                />
              </div>
              <div className="my-3">
                <label htmlFor="home-address">Add delivery Instruction</label>
                <textarea
                  name="instruction"
                  id=""
                  cols="30"
                  placeholder="Add delivery Instruction"
                  rows="3"
                  className="form-control"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="btn btn-lg w-100 btn-danger d-block">
                  Save & Continue
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <p>
                  <strong>From:</strong> Gobindagonj, Gaibandha
                </p>
                <div className="ordered-items">
                  <OrderItem />
                  <OrderItem />
                  <OrderItem />
                </div>
                <div className="dashboard">
                  <table className="table mt-4">
                    <tbody>
                      <tr>
                        <th>SubTotal</th>
                        <td>434$</td>
                      </tr>
                      <tr>
                        <th>Tax</th>
                        <td>10$</td>
                      </tr>
                      <tr>
                        <th>Delivery fee</th>
                        <td>10$</td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td>1500$</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-danger btn-md w-100 mt-3">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
