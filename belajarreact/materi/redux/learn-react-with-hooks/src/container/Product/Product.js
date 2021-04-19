import React, { Component, Fragment } from 'react'


class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://selerasa.com/wp-content/uploads/2015/05/images_daging_rendang-ayam-pedas.JPG" alt="gambar makanan" />
                    </div>
                    <p className="product-title">Ayam Rendang Kasuari</p>
                    <p className="product-price">Rp 34.000,-</p>
                    <div className="counter">
                        <button className="minus">-</button>
                        <input type="text" value={3} />
                        <button className="plus">+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product