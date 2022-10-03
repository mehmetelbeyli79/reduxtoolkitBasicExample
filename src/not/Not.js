import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notEkle, selectNot, notSil,notGuncelle } from "./notSlice";
function Not() {
  const value = useSelector(selectNot);
  const dispatch = useDispatch();
  const [deger, setDeger] = useState("");
  const [gncId,setGncId]=useState(4);
  return (
    <div className="flex flex-col w-96">
      <div className="mb-3 pt-0">
        <input
          onChange={(e) => {
            setDeger(e.target.value);
          }}
          id={gncId}
          value={deger}
          type="text"
          placeholder="Eklenecek Notu Giriniz"
          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <button
        onClick={() => dispatch(notEkle(deger))}
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Not Ekle
      </button>
      <button
        onClick={() => dispatch(notGuncelle([deger,gncId]))}
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Not Güncelle
      </button>
      <div>
        <ul>
          {value.map((val, index) => {
            return (
              <li onClick={(e)=>{setDeger(val);setGncId(index)}} key={index}>
                {val}
                <span
                 className="px-4"
                  onClick={() => {
                    dispatch(notSil(index));
                  }}
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Not;
