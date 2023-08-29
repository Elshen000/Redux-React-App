import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
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

  console.log(data, "data");
  const contentModal = (
    <>
      <Input
        type={"text"}
        placeholder={"Mehsul elave et"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type={"text"}
        placeholder={"Qiymetini elave et"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Sekilini elave et"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />

      <Button btnText={"Mehsul yarat"} onClick={buttonFunc} />
    </>
  );
  return (
    <div>
      <div className="flex items-center flex-wrap">
        {
        data?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))
        }
      </div>

      {modal && <Modal content={contentModal} title={"Mehsul Yarat"} />}
    </div>
  );
};
export default Product;
