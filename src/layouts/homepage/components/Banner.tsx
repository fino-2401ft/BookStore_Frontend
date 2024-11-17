import React from "react";

function Banner(){
    return(
        <div className='p-2 mb-2 bg-dark'>
            <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-corner'>
                <div>
                    <h2 className='display-5 fw-bold'>
                        Đọc sách chính là hộ chiếu <br/> cho vô số cuộc phiêu lưu
                    </h2>
                    <p className=''>Mary Pope Orsborne</p>
                    <button className='btn btn-primary btn-lg text-white float-end'>Khám phá sách tại TITV.vn</button>
                </div>
            </div>
        </div>
    );
}

export default Banner