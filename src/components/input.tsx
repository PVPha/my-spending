import { HomeSlicer } from "@/redux/slicer/homeSlicer";
import { Store } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";
const Input = ({ value, disabled }: { value: string; disabled: boolean }) => {
  let uuid = uuidv4();
  return (
    <div>
      <input
        type="text"
        className="border-none"
        defaultValue={value}
        disabled={disabled}
        autoFocus
        onKeyDown={(event) => {
          let target = event.target as HTMLInputElement;
          if (event.key === "Enter") {
            if (target.value === "cls") {
              Store.dispatch(HomeSlicer.actions.clearScreen(""));
            } else {
              Store.dispatch(
                HomeSlicer.actions.addCommand({
                  id: uuid,
                  value: target.value.trim(),
                })
              );
              Store.dispatch(
                HomeSlicer.actions.addResult({
                  id: uuid,
                  value: "test result",
                })
              );
            }
            target.value = "";
          }
        }}
      />
    </div>
  );
};

export default Input;
