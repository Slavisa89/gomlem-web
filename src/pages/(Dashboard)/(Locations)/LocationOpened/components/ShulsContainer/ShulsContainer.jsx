import React, { useState } from "react";
import Cards from "./Cards";
import LoadingSkeleton from "./LoadingSkeleton";
import Header from "./Header";
import ModalEditLocation from "@modals/ModalEditLocation";

const ShuleData = [
  {
    media: "poster4",
    cityId: "1",
    cityName: "Florence Synagogue",
    location: "Example Address, Florence, Italy, 10833 ",
    phone: "000 000 0000",
    website: "Website.com",
  },
  {
    media: "poster4",
    cityId: "2",
    cityName: "Florence Synagogue",
    location: "Example Address, Florence, Italy, 10833 ",
    phone: "000 000 0000",
    website: "Website.com",
  },
  {
    media: "poster4",
    cityId: "2",
    cityName: "Florence Synagogue",
    location: "Example Address, Florence, Italy, 10833 ",
    phone: "000 000 0000",
    website: "Website.com",
  },
  {
    media: "poster4",
    cityId: "2",
    cityName: "Florence Synagogue",
    location: "Example Address, Florence, Italy, 10833 ",
    phone: "000 000 0000",
    website: "Website.com",
  },
  {
    media: "poster4",
    cityId: "2",
    cityName: "Florence Synagogue",
    location: "Example Address, Florence, Italy, 10833 ",
    phone: "000 000 0000",
    website: "Website.com",
  },
  {
    media: "poster4",
    cityId: "2",
    cityName: "Florence Synagogue",
    location: "Example Address, Florence, Italy, 10833 ",
    phone: "000 000 0000",
    website: "Website.com",
  },
];

export default function ShulsContainer() {
  const [activeModalEditCity, setActiveModalEditCity] = useState(false);
  function handlerModalEditCity(cityId) {
    setActiveModalEditCity(cityId);
  }

  const [ShulePending, setPending] = useState(true);
  const ShuleError = false;
  setTimeout(() => {
    setPending(false);
  }, 5000);
  return (
    <div>
      <Header />
      {!ShulePending && !ShuleError && ShuleData ? (
        <Cards data={ShuleData} handelModal={handlerModalEditCity} />
      ) : (
        <LoadingSkeleton count={5} />
      )}
      {ShuleData?.length > 0 && (
        <ModalEditLocation
          activeModal={activeModalEditCity}
          handlerActiveModal={handlerModalEditCity}
        />
      )}
    </div>
  );
}
