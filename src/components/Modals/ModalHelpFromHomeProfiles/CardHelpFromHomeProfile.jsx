import Label from "@components/Label/Label";
import { formatDate } from "@/script/script";
import { twMerge } from 'tailwind-merge';

export default function CardHelpFromHomeProfile({ data ,border}) {
    return (
      <li className={twMerge("pt-[14px] pb-[30px] w-[470px] rounded-[20px]",!border && " border border-text-softGary px-[14px]")}>
        <div className="flex justify-between items-center mb-[18px]">
          <Label size="big" theme="blueBlack">
            {data.expertise}
          </Label>
          <span className="text-xs font-semibold text-text-lighter">
            Created On {formatDate(data.createdOn)}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-normal ">{data.description}</p>
          <span className="text-[18px] font-semibold ">
            Profile Is Active In:
          </span>
          <ul className="flex gap-6">
            {data.cities.map((cityData) => {
              return (
                <li
                  key={cityData.id}
                  className="flex flex-col items-center gap-[6px]"
                >
                  <img
                    src={cityData.media}
                    className="w-[65px] h-[65px] rounded-[15px]"
                  />
                  <span className="text-xs font-semibold">{cityData.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
}
