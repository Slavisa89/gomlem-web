import Icon from "@components/Icon";
import Label from "@components/Label";
import { formatDate } from "@/script/script";
import FadeOnScreen from "@animation/FadeOnScreen";

export default function TRowTypeOne({ body, handlerActiveModal }) {
  const dateForm = formatDate(body.from);
  const dateTo = formatDate(body.to);

  return (
    <FadeOnScreen time={0.2} x={-100}>
      <li key={body.id} className="items-center text-xs text-text-lighter">
        <div className="flex items-center gap-3">
          <Icon name="location2" className="w-3 h-[14px]" />
          <span className="uppercase">{body.location}</span>
        </div>
        <div>
          {dateForm} - {dateTo}
        </div>
        <div>
          <span className="text-black">{body.totalHelpRequests}</span>
          {body.activeHelpRequests > 0 ? (
            <Label theme="green" size="small">
              Active
            </Label>
          ) : (
            <Label theme="red" size="small">
              Inactive
            </Label>
          )}
        </div>
        <div>
          <button
            className="text-black underline uppercase"
            onClick={() => handlerActiveModal(body.id)}
          >
            View
          </button>
        </div>
      </li>
    </FadeOnScreen>
  );
}
