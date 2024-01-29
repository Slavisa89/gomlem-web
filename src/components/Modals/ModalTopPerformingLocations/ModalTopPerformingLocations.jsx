import { useMemo, useState } from "react";
import SelectChart from "@components/SelectChart";
import AnimBox from "@animation/AnimBox";
import Icon from "@components/Icon";
import CloseButton from "@components/CloseButton";
import LocationReportChartBox from "./components/LocationReportChartBox";
import useCustomerInfoData from "@hooks/useCustomerInfoData";
import SearchBox from "@components/SearchBox";

export default function ModalTopPerformingLocations({ isOpen }) {
  const [dataMode, setDataMode] = useState("monthlyData");
  const [searchArea, setSearchArea] = useState("");
  const [isActiveModalChart, setIsActiveModalChart] = useState(false);

  function handlerActiveModal() {
    setIsActiveModalChart(!isActiveModalChart);
  }

  function handlerDataMode(data) {
    setDataMode(data);
  }

  function handleCloseModals() {
    setIsActiveModalChart(false);
    handlerModal(false);
  }

  const [activeModal, setActiveModal] = useState(false);
  function handlerModal(id = false) {
    setActiveModal(id);
  }

  function handlerChange(value) {
    setSearchArea(value);
  }

  function handlerSubmit() {
    handlerActiveModal();
    console.log(searchArea);
  }

  const {
    customersInfoData,
    customersInfoPending,
    customersInfoError,
    // customersInfoMessageError,
  } = useCustomerInfoData();

  return (
    <div>
      <h1>MODAL MODAL MODAL</h1>
      <h1>MODAL MODAL MODAL</h1>
      <h1>MODAL MODAL MODAL</h1>
      <h1>MODAL MODAL MODAL</h1>
    </div>
  );
}
