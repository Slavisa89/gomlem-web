import HeaderCustomer from "./HeaderCustomer";
import ListCustomers from "./ListCustomers";

import ItemSkeleton from "@skeleton/ItemSkeleton";
import useCustomers from "@hooks/useCustomers";
import LoadingSkeleton from "./LoadingSkelton";

export default function NewCustomers() {
  const {
    newCustomers,
    newCustomersPending,
    newCustomersError,
    // newCustomersMessageError
  } = useCustomers({
    param: {
      Page: "1",
      Size: "10",
      SortOrder: "NewToOld",
    },
  });

  return (
    <div className="flex flex-col py-9 px-[19px] shadow-boo-2 border border-light-100 rounded-2xl">
      <HeaderCustomer />
      {newCustomersPending || newCustomersError ? (
        <LoadingSkeleton count={5}/>
      ) : (
        <ListCustomers customers={newCustomers} />
      )}
    </div>
  );
}
//
