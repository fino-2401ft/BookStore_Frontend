import React, { useEffect } from "react";
import { useState } from "react";
import SachModel from "../../models/SachModel";
import SachProps from "./components/SachProps";
import { layToanBoSach } from "../../api/SachAPI";
import { error } from "console";

const DanhSachSanPham: React.FC = () => {
    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [baoLoi, setBaoLoi] = useState(null);

    useEffect(() => {
        layToanBoSach().then(
            sachData => {
                setDanhSachQuyenSach(sachData);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setBaoLoi(error.message);
            }
        );
    }, [])
    
    if(dangTaiDuLieu) 
    {
        return(
            <div>
                <h1>LOADING DATA......</h1>
            </div>
        );
    }
    
    if(baoLoi) 
        {
            return(
                <div>
                    <h1>ERROR: {baoLoi}</h1>
                </div>
            );
        }

        
    return (
        <div className='container'>
            <div className='row mt-4'>
                {
                    danhSachQuyenSach.map(sach => (
                            <SachProps key={sach.maSach} sach={sach}/>
                        ),
                    )
                }
            </div>
        </div>
    );
}

export default DanhSachSanPham;