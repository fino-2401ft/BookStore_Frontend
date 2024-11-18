import React from "react";
import HinhAnhModel from "../models/HinhAnhModel";
import my_request from "./Request";

export async function getListImage(maSach: number):Promise<HinhAnhModel[]>
{
    const result: HinhAnhModel[] = [];
    const endpoint: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;

    // request(endpoint).then().catch();
    const response = await my_request(endpoint);
     
    //Take json sach
    const responseData = response._embedded.hinhAnhs;
    console.log(responseData);
    
    for (const key in responseData) {
        result.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh?: responseData[key].tenHinhAnh,
            laIcon: responseData[key].laIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh
        });
    }

    return result;
}