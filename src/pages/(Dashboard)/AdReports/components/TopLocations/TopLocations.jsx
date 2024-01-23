import { useState } from 'react';
import Chart from '@/components/Statistics/Chart';
import SelectChart from '@components/SelectChart';
import BoxSkeleton from '@skeleton/BoxSkeleton';

import { faker } from '@faker-js/faker';
import useTripsData from '@hooks/useTripsData';

export default function TopLocations() {
  const [dataMode, setDataMode] = useState('monthlyData');

  const {
    tripsPending,
    trips,
    // tripsMessageError,
    tripsError,
  } = useTripsData();
  function handlerDataMode(data) {
    setDataMode(data);
  }
  // TODO: try to improve following
  let dataFromApi = [];
  if (!tripsPending && !tripsError) {
    dataFromApi = [
      {
        label: 'Trips',
        data: trips?.tripsChartsData[dataMode],
      },
      {
        label: 'Subscriptions',
        data: trips?.tripsChartsData[dataMode].map((item) => {
          return {
            name: item.name,
            value: item.value + faker.number.int({ min: 0, max: 5 }),
          };
        }),
      },
    ];
  }

  const topLocationList = [
    {
      name: 'Brooklyn',
      totalAdSpent: '$20.000',
    },
    {
      name: 'London',
      totalAdSpent: '$20.000',
    },
    {
      name: 'Zvornik',
      totalAdSpent: '$20.000',
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-between">
        <span className="font-semibold">Top Performing Locations</span>
        <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
      </div>
      {tripsPending || tripsError ? (
        <BoxSkeleton height={400} />
      ) : (
        topLocationList.map((locationItem) => (
          <>
            <div className="flex justify-between">
              <span className="font-semibold">{locationItem.name}</span>
              <span className="font-semibold">
                ${locationItem.totalAdSpent} total ad spent
              </span>
            </div>
            <Chart dataFromApi={dataFromApi} />
          </>
        ))
      )}
    </div>
  );
}
