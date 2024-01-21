import React, { useState } from "react";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import TRowHelpRequests from "@components/NewTable/TRowHelpRequests";
import ModalHelpRequests from "@modals/ModalHelpRequests";
import Tbody from "@components/NewTable/Tbody";

export default function TableHelpRequest({ data, isPending }) {
  // Ary Title Header Table
  const tHeadTable = [
    "Name",
    "Category",
    "Status",
    "Valid Until",
    "Location",
    " ",
  ];
  // State Modal
  const [activeModal, setActiveModal] = useState(false);
  function handlerActiveModal(type, id) {
    setActiveModal({ type, id });
  }

  return (
    <div>
      <Table typeTable="helpRequests">
        <Thead dataHead={tHeadTable} />
        <Tbody isPending={isPending}>
          {!isPending && data.map((dataRow, i) => {
            return (
              <TRowHelpRequests
                key={i}
                handlerActiveId={handlerActiveModal}
                body={dataRow}
              />
            );
          })}
        </Tbody>
      </Table>
      <ModalHelpRequests
        handlerActiveModal={handlerActiveModal}
        activeModal={activeModal}
      />
    </div>
  );
}
