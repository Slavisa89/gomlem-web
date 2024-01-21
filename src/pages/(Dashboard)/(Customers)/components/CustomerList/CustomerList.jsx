import SortBy from "../SortBy";
import SearchTable from "@components/SearchTable";
import { useEffect, useState } from "react";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import useCustomers from "@hooks/useCustomers";
import TRowCustomerList from "@components/NewTable/TRowCustomerList";
import { Link } from "react-router-dom";
export default function CustomerList() {
  const TheadTitle = [
    "Name",
    "number",
    "Email",
    "Date Joined",
    "Location",
    "Trips",
  ];
  const [sortBy, setSortBy] = useState("NewToOld");
  function handlerSortBy(sort) {
    setSortBy(sort);
  }

  const [searchArea, setSearchArea] = useState("");
  const [param, setParam] = useState({
    Page: "1",
    Size: "10",
    SortOrder: sortBy,
    Text: "",
  });
  function handlerChange(value) {
    setSearchArea(value);
  }
  function handlerSubmit() {
    setParam({
      ...param,
      Text: searchArea,
    });
  }
  useEffect(() => {
    setParam({
      ...param,
      SortOrder: sortBy,
    });
  }, [sortBy]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      handlerSubmit();
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchArea]);
  const {
    newCustomers,
    newCustomersPending,
    newCustomersMessageError,
    // newCustomersError,
  } = useCustomers({
    param,
  });

  return (
    <div>
      <div className="flex flex-col mr-[132px] mt-11  border border-light-100 rounded-t-2xl">
        <div className="flex justify-between  py-[33px] pl-[27px] pr-[59px]">
          <span className="text-xl font-semibold">Customer List</span>
          <div className="flex items-center gap-[18px]">
            <SearchTable
              searchBoxHandler={{
                searchInput: searchArea,
                handlerChange: handlerChange,
                handlerSubmit: handlerSubmit,
                placeHolder: "Search by name or area",
                useDebounce: true,
              }}
            />

            <SortBy handlerSortBy={handlerSortBy} />
          </div>
        </div>

        <Table typeTable="CustomerList">
          <Thead dataHead={TheadTitle} />
          <Tbody isPending={newCustomersPending || newCustomersMessageError}>
            {!newCustomersPending &&
              !newCustomersMessageError &&
              newCustomers.map((rowData, i) => {
                return (
                  <Link key={rowData.id} to={`./opened/${rowData.id}`}>
                    <TRowCustomerList key={i} body={rowData} />
                  </Link>
                );
              })}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
