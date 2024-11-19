import React from "react";
import SachModel from "../models/SachModel";
import { my_request } from "./my_request";

export async function laySach(endpoint:string): Promise<SachModel[]>
{
    const ketQua: SachModel[] = [];

    // Gọi phương thức request
    const response = await my_request(endpoint);

    // Lấy ra json sach
    const responseData = response._embedded.saches;
    console.log(responseData);

    for (const key in responseData) {
        ketQua.push({
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

    return ketQua;
}

export async function layToanBoSach(): Promise<SachModel[]> {
    return laySach('http://localhost:8080/sach?sort=maSach,desc');
}

export async function lay3SachMoiNhat(): Promise<SachModel[]> {
    return laySach('http://localhost:8080/sach?sort=maSach,desc&page=0&size=3');
}