import useExpandHook from "../CustomHook/useExpandHook";
import ArrayValuesWrapper from "./ArrayValuesWrapper";
import Keys from "./Keys";
import ObjectValuesWrapper from "./ObjectValuesWrapper";

interface IProps {
  data: any;
  keyColor: string;
  valueColor: string;
  hideTypes?: boolean;
}
const ArrayComponent = (props: IProps) => {
  const { data, keyColor, valueColor, hideTypes } = props;
  const { handleExpand, isExpanded } = useExpandHook();
  return (
    <div>
      {data.map((item: any, i: number, currArr: any) => {
        if (Array.isArray(item) && item.length) {
          return (
            <div
              style={{
                display: "flex",
              }}
              key={i}
            >
              <Keys
                handleExpand={() => handleExpand(i)}
                keyName={i}
                isExpanded={isExpanded[i]}
                keyColor={keyColor}
              />
              <ArrayValuesWrapper
                isExpanded={isExpanded[i]}
                value={item}
                isLast={currArr.length - 1 === i}
                keyColor={keyColor}
                valueColor={valueColor}
                hideTypes={hideTypes}
              />
            </div>
          );
        } else if (
          item &&
          typeof item === "object" &&
          Object.keys(item).length
        ) {
          return (
            <div
              key={i}
              style={{
                display: "flex",
              }}
            >
              <Keys
                handleExpand={() => handleExpand(i)}
                keyName={i}
                isExpanded={isExpanded[i]}
                keyColor={keyColor}
              />
              <ObjectValuesWrapper
                isExpanded={isExpanded[i]}
                value={item}
                isLast={currArr.length - 1 === i}
                keyColor={keyColor}
                valueColor={valueColor}
                {...(!hideTypes ? {} : { hideTypes: hideTypes })}
              />
            </div>
          );
        } else {
          return (
            <p key={i} style={{ color: "#333333" }}>
              {`${item}`} {currArr.length - 1 === i ? "" : ","}
            </p>
          );
        }
      })}
    </div>
  );
};

export default ArrayComponent;
