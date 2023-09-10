import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation } from "react-router-dom";



const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data,keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [proInfo, setProInfo] = useState({ name: "", price: "", url: "" });
  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const buttonFunc = () => {
    dispatch(createDataFunc({...proInfo,id:data.length+1}));
    dispatch(modalFunc());
  };

  const contentModal = (
    <>
      <Input
      value={proInfo.name}
        type={"text"}
        placeholder={"Add Product"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
      value={proInfo.price}
        type={"text"}
        placeholder={"Add Price"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Add Photo"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />

      <Button btnText={"Create Product"} onClick={buttonFunc} />
    </>
  );
  const filteredItems=data.filter(dt=>dt.name.toLowerCase().includes(keyword));
  return (
    <div>
      <div className="flex items-center flex-wrap">
        {
        filteredItems?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))
        }
      </div>

      {modal && <Modal content={contentModal} title={"Create Product"} />}
    </div>
  );
};
export default Product;
