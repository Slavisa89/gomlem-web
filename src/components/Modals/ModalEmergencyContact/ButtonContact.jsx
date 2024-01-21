import Icon from "@components/Icon";

export default function ButtonCountact({ emergencyContactsData }) {
  let multiEmail = [];
  let multiTel = [];
  if (emergencyContactsData.length == 0) return;
  emergencyContactsData.forEach(({ email, phoneNumber }, i) => {
    multiEmail.push(email);
    if (emergencyContactsData.length == 1) multiTel.push(`${phoneNumber}`);
    else if (i > 0) multiTel.push(`*${phoneNumber}#`);
    else {
      multiTel.push(`*${phoneNumber}*`);
    }
  });
  return (
    <div className="flex justify-center gap-5">
      <a href={`mailto:${multiEmail.join(",")}`}>
        <button className="_btn-error _btn-small _btn-error-solid justify-center items-center w-[180px] text-sm">
          <Icon name="message" className="svg-white w-[14px] h-[14px]" />
          <span>Email Both</span>
        </button>
      </a>
      <a href={`tel:${multiTel.join(",")}`}>
        <button className="_btn-error _btn-small _btn-error-solid justify-center items-center w-[180px] text-sm">
          <Icon name="phone" className="svg-white w-[14px] h-[14px]" />
          <span>Call Both</span>
        </button>
      </a>
    </div>
  );
}
