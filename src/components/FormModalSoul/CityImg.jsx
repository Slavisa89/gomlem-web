import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Img from "@components/Img";
import Icon from "@components/Icon";
import { useState } from "react";

// View the selected image before the comments are enabled

export default function CityImg({ error, handlerChange, value }) {
  const [previewCityImg, setPreviewCityImg] = useState(value);
  //   const [previousValue, setPreviousValue] = useState("");
  function removeImg() {
    setPreviewCityImg("");
    handlerChange("imgCity");
  }
  useEffect(() => {
    // Prevent the initial execution of this section of the code if there is an image
    if (typeof value == "string") return;
    try {
      const url = window.URL.createObjectURL(value);
      setPreviewCityImg(url);
      if (error) throw new Error();
    } catch (error) {
      //   setPreviewCityImg(previousValue);
      setPreviewCityImg("");
    }
  }, [value, error]);
  useEffect(() => {}, [previewCityImg]);

  //   useEffect(() => {
  //     setPreviousValue(previewCityImg);
  //   }, [previewCityImg]);
  return (
    <>
      <div className="w-[336px] h-[227px] mb-4 rounded-[20px] relative overflow-hidden">
        <label htmlFor="imgCity">
          {previewCityImg ? (
            <img
              src={previewCityImg}
              className="absolute top-0 left-0 w-full h-full rounded-[20px]"
              alt=""
            />
          ) : (
            <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full rounded-[20px] bg-light-100">
              <Img src="noImg" className="w-8 h-8" />
            </div>
          )}
          {previewCityImg && (
            <div
              onClick={(e) => {
                e.preventDefault();
                removeImg();
              }}
              className="absolute flex items-center justify-center w-10 h-10 rounded-full cursor-pointer top-2 right-2 bg-white/20"
            >
              <Icon name="trash" className="w-4 h-4" />
            </div>
          )}
        </label>
      </div>

      <label className="relative block">
        <input
          type="file"
          className="hidden"
          name="imgCity"
          id="imgCity"
          accept="image/jpeg, image/png, image/webp"
          onChange={(e) => {
            const file = e.currentTarget.files[0];
            if (file) {
              handlerChange("imgCity", file);
            }
          }}
        />
        <div
          className={twMerge(
            "justify-center text-center w-full hover:text-white border-text-softGary hover:bg-text-softGary p-3 text-xs border rounded-[20px] duration-300 transition-all",
            error && "text-red border-red hover:bg-red"
          )}
        >
          {previewCityImg ? "Replace Photo" : "Add Photo"}
        </div>
        {error && (
          <p className="absolute text-xs transition-all duration-200 -bottom-5 left-2 text-red">
            <span>{error}</span>
          </p>
        )}
      </label>
    </>
  );
}
