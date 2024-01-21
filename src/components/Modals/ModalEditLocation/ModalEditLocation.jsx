import { useState } from "react";
import FormEditLocation from "@components/FormModalSoul/FormEditLocation";
import SkeletonLoading from "@components/FormModalSoul/SkeletonLoading";

export default function ModalEditLocation({ cityId, handlerActiveModal }) {
  const editLocationData = {
    name: "Florence Synagogue",
    address: "Example Address, Florence,Italy 10833",
    website: "Website.com",
    imgCity:
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AWU5eFg3RoueN7D1AaoTUAyCbuM5Vgo51Ph5VyWzwPfh_zVTrt-WyvGVD1oNcQdPNOPcXmOU5kPS5ikdROS-lfm_vZxFa4pyvlLmDCtBZKSTL9AjKdKjlBLDQs70SkQaidciWqPV7Ns5iJyGzxObtnryT05RnDqWZLqnpkIo9lCUUvs36sT8&key=AIzaSyBVkAnJ2IvdB3RWX48QBJ-6QszUOU2iwxA",
  };
  const [editLocationPending, setPending] = useState(true);
  const editLocationError = false;

  setTimeout(() => {
    setPending(false);
  }, 1000);
  return (
    <div className="w-[410px] h-[550px] px-9 py-12 overflow-x-hidden overflow-y-scroll">
      {!editLocationPending && !editLocationError ? (
        <FormEditLocation data={editLocationData} />
      ) : (
        <SkeletonLoading />
      )}
    </div>
  );
}
