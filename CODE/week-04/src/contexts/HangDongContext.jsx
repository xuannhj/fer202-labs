//cave contain cuon bi kip 
//ai muon lay thi len do lay 
import React, { createContext } from 'react'
//xay dung context: giong nhu mot cho chua thong tin dung chung
//1. tao context
export const HangDongContext = createContext();
//2. tao provider: giong nhu cai tu de dung bi kip
export const HangDongProvider= ({children}) => {
    //cho khai bao thong tin can luu 
    const biKip = "cuu duong chan kinh";
    const biTich = "cuu am chan kinh";
    return (
        <HangDongContext.Provider value ={{biKip}}>
        {children} 

        </HangDongContext.Provider>
    )
}
