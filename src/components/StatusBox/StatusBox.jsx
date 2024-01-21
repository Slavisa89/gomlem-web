import BoxTypeOne from "./BoxTypeOne";
import BoxTypeTwo from "./BoxTypeTwo";
import BoxTypeThree from "./BoxTypeThree";
import BoxTypeFour from "./BoxTypeFour";
export default function StatusBox(props) {
  const boxType = {
    boxTypeOne: BoxTypeOne,
    boxTypeTwo: BoxTypeTwo,
    boxTypeThree: BoxTypeThree,
    boxTypeFour: BoxTypeFour,
  };
  const Box = boxType[props.typeBox];

  const colorTypes = {
    red: { bgBox: "bg-red-200", bgIcon: "bg-red-300" },
    green: { bgBox: "bg-light-300", bgIcon: "bg-green-100" },
    blue: { bgBox: "bg-blue-100", bgIcon: "bg-blue-200" },
    orange: { bgBox: "bg-red-200", bgIcon: "bg-red-300" },
    error: { bgBox: "bg-red-bg", bgIcon: "bg-red" },
  };

  const color = colorTypes[props.color];

  return <Box className="-z-10" {...props} color={color} />;
}
