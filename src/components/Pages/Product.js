import React from 'react'

const Product = () => (
    <div className="content-main">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="content__box">
                        <div className="bg-overlay"></div>
                        <img className="img-responsive" src="../images/img-1.webp" alt="" />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content__box">
                        <div className="bg-overlay"></div>
                        <img className="img-responsive" src="../images/img-2.webp" alt="" />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content__box">
                        <div className="bg-overlay"></div>
                        <img className="img-responsive" src="../images/img-3.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Product;