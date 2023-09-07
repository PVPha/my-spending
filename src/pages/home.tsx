import Input from "@/components/input";
import { Command, Result } from "@/redux/slicer/homeSlicer";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const listCommand = useSelector(
    (state: RootState) => state?.HomeSlicer?.command
  );
  const listResult = useSelector(
    (state: RootState) => state?.HomeSlicer?.result
  );
  useEffect(() => {
    if (listCommand) {
      const lastCmd: Command = listCommand[listCommand.length - 1];
      const cmd = lastCmd?.value?.split(/\s+/);
      console.log(cmd);
    }
  }, [listCommand]);
  return (
    <>
      <div
        onClick={() => {
          console.log("click focus");
        }}
      >
        {listCommand &&
          listCommand.map((cmd, index) => (
            <>
              <Input
                key={(cmd as Command)?.id}
                value={(cmd as Command)?.value || ""}
                disabled={true}
              />
              {listResult &&
                listResult
                  .filter(
                    (result) => (result as Result)?.id === (cmd as Command)?.id
                  )
                  ?.map((result) => (
                    <Input
                      key={(result as Result)?.id}
                      value={(result as Result)?.value || ""}
                      disabled={true}
                    />
                  ))}
            </>
          ))}
        <Input value={""} disabled={false} />
      </div>
    </>
  );
};

export default Home;
