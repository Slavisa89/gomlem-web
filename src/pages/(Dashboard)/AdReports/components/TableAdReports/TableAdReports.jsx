import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import TrowAdReports from "@components/NewTable/TRowAdReports";

const dummy = [
  {
    id: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
    fullName: "Slavisa Test",
    country: "USA",
    amountPaid: "5,000$",
    companyName: "Telegram",
    registeredOn: "2023-12-14T10:33:34.1148514",
    tripsCount: 7,
  },
];

const dataHead = [
  "Customer name",
  "Date Paid",
  "Company Name",
  "Locations Targeted",
  "Amount Paid",
  "Ad Reports",
];

export default function TableAdReports({ isPending }) {
  return (
    <>
      <span className="text-xl font-semibold">Advertises</span>
      <Table typeTable="helpRequests">
        <Thead dataHead={dataHead} />
        <Tbody isPending={false}>
          {!isPending &&
            dummy.map((dataRow, i) => {
              return (
                <TrowAdReports
                  key={i}
                  handlerActiveId={() => true}
                  body={dataRow}
                />
              );
            })}
        </Tbody>
      </Table>
    </>
  );
}
