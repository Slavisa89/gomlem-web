import React, { useState } from "react";
import TRowHelpRequests from "@components/NewTable/TRowHelpRequests";
import ModalHelpRequests from "@modals/ModalHelpRequests";
import useHelpRequestDetails from "@hooks/useHelpRequestDetails";
export default function TbodyHelpRequest({ isPending, data }) {
  const [activeId, setActiveId] = useState(false);
  function handlerActiveId(id) {
    setActiveId(id);
  }


  return (
    <>
      
      <div className="absolute">
        
      </div>
    </>
  );
}
