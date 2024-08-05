import useExpandHook from "../CustomHook/useExpandHook";
import Keys from "./Keys";
import ObjectValuesWrapper from "./ObjectValuesWrapper";
import ArrayValuesWrapper from "./ArrayValuesWrapper";

interface IProps {
  data: any;
  keyColor: string;
  valueColor: string;
  hideTypes?: boolean;
}
const ObjectComponent = (props: IProps) => {
  const { data, keyColor, valueColor, hideTypes } = props;
  const { handleExpand, isExpanded } = useExpandHook();
  return (
    <div>
      {Object.entries(data).map(([key, value], i, currArr) => {
        if (Array.isArray(value) && value.length) {
          return (
            <div
              style={{
                display: "flex",
              }}
              key={key}
            >
              <Keys
                handleExpand={() => handleExpand(i)}
                keyName={key}
                isExpanded={isExpanded[i]}
                keyColor={keyColor}
              />
              <ArrayValuesWrapper
                isExpanded={isExpanded[i]}
                value={value}
                isLast={currArr.length - 1 === i}
                keyColor={keyColor}
                valueColor={valueColor}
                hideTypes={hideTypes}
              />
            </div>
          );
        } else if (
          value &&
          typeof value === "object" &&
          Object.keys(value).length
        ) {
          return (
            <div
              key={key}
              style={{
                display: "flex",
              }}
            >
              <Keys
                handleExpand={() => handleExpand(i)}
                keyName={key}
                isExpanded={isExpanded[i]}
                keyColor={keyColor}
              />
              <ObjectValuesWrapper
                isExpanded={isExpanded[i]}
                value={value}
                isLast={currArr.length - 1 === i}
                keyColor={keyColor}
                valueColor={valueColor}
                hideTypes={hideTypes}
              />
            </div>
          );
        } else {
          return (
            <div key={key} style={{ display: "flex", margin: "4px 0" }}>
              <p
                style={{
                  paddingLeft: "12px",
                  color: "#0A0A0A",
                  wordBreak: "keep-all",
                  fontWeight: 600,
                }}
              >
                {`${key}`}:
              </p>{" "}
              <p style={{ color: "#333333" }}>
                {hideTypes ? null : (
                  <span
                    style={{
                      fontSize: "12px",
                      margin: "0 4px",
                      color: "black",
                    }}
                  >
                    {`(${typeof value})`}
                  </span>
                )}
                {`${value}` + (currArr.length - 1 === i ? "" : " ,")}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ObjectComponent;
