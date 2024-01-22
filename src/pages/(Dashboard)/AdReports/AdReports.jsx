import React from 'react'
import StatusBox from "@components/StatusBox";
import Statistics from "@components/Statistics";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";

export default function AdReports() {
  const dataHead = ["Customer name", "Date Paid", "Company Name", "Locations Targeted", "Amount Paid", "Ad Reports"];

  return (
    <div className="w-[70%]">
    <div className='flex gap-[26px]'>
      <StatusBox
            typeBox="boxTypeOne"
            color="red"
            icon="dollar"
            title="Total Revenue"
            number="$50,000"
            profit="12.76"
            lastSince="Since last month"
      />
      <StatusBox
            typeBox="boxTypeOne"
            color="green"
            icon="person"
            title="Total Paying Customers"
            number={7}
            profit="12.76"
            lastSince="Since last month"
      />
          <StatusBox
            typeBox="boxTypeTwo"
            color="blue"
            icon="setting"
            title="Ad Report Settings"
            fnViewTitle="View And Edit"
          />
    </div>
    <Statistics/>
    <Table typeTable="helpRequests">
        <Thead dataHead={dataHead} />
        <Tbody isPending={false}>
          
        </Tbody>
      </Table>
    </div>
  )
}
