import { HomeSlicer } from "@/redux/slicer/homeSlicer";
import { Store } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";
import {useRef, useEffect} from 'react';
const Input = ({ value, disabled }: { value: string; disabled: boolean;}) => {
  let uuid = uuidv4();
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();  
    }
  },[])
  return (
    <div className="grow-1">
      <input
        ref={inputRef}
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
