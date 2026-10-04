import { Children, createContext } from "react";
import { useState } from "react";
export const FavContext = createContext();

export const FavProvider = ({children}) => {
    //1.danh sach yeu thich (co the thay doi)
    const [fav, setFav] = useState([{"id":1, "name":"banhflan"}]);
    //2.ham xu ly them vao danh sach yeu thich 
    const addToFav = (item) => {
        //sinh vien tu xy ly them cac truong hop khac
        //check trung lap, check xem item co ton tai trong fav hay khong, neu co roi thi ko them nua 
        
        const favList = [...fav, item]
        //... la lay toan bo phan tu trong mang fav roi them item vao cuoi//spread operator
        setFav(favList)
    }
    return (
        <FavContext.Provider value={{fav, addToFav}}>
            {children}
        </FavContext.Provider>
    )
}
