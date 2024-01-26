import React from "react";
import StatusBox from "@components/StatusBox";

export default function StatusBoxContainer() {
  return (
    <div className="flex gap-[26px]">
      <StatusBox
        typeBox="boxTypeOne"
        color="red"
        icon="dollar"
        title="Total Revenue"
        isPending={false}
        number="$50,000"
        profit="12.76"
        lastSince="Since last month"
      />
      <StatusBox
        typeBox="boxTypeOne"
        color="green"
        icon="world"
        title="Total Revenue From Trips"
        isPending={false}
        number="$50,000"
        profit="12.76"
        lastSince="Since last month"
      />
      <StatusBox
        typeBox="boxTypeOne"
        color="blue"
        icon="card"
        title="Total Revenue From 
        Subscriptions"
        isPending={false}
        number="$50,000"
        profit="12.76"
        lastSince="Since last month"
      />
    </div>
  );
}
