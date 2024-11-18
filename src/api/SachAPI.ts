import React from "react";
import SachModel from "../models/SachModel";
import request from "./Request";
import my_request from "./Request";

export async function getListBook():Promise<SachModel[]>
{
    const result: SachModel[] = [];
    const endpoint: string = 'http://localhost:8080/sach'

    // request(endpoint).then().catch();
    const response = await my_request(endpoint);
     
    //Take json sach
    const responseData = response._embedded.saches;
    console.log(responseData);
    
    for (const key in responseData) {
        result.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa:responseData[key].moTa,
            soLuong:responseData[key].soLuong,
            tenTacGia:responseData[key].tenTacGia,
            trungBinhXepHang:responseData[key].trungBinhXepHang
        });
    }

    return result;
}