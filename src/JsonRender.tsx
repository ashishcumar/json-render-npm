import useExpandHook from "./CustomHook/useExpandHook";
import Keys from "./Components/Keys";
import ObjectValuesWrapper from "./Components/ObjectValuesWrapper";
import ArrayValuesWrapper from "./Components/ArrayValuesWrapper";

interface IProps {
  json: any;
  keyColor: string;
  valueColor: string;
  background: string;
  hideTypes?: boolean;
}
function JsonRender(props: Readonly<IProps>) {
  const { json, keyColor, valueColor, background, hideTypes } = props;
  const { handleExpand, isExpanded } = useExpandHook();
  return (
    <div
      style={{
        padding: "24px",
        background: background || "#f7f7f7",
      }}
    >
      {Object.entries(json).map(([key, value], i, currArr) => {
        if (Array.isArray(value) && value?.length) {
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
                {...(!hideTypes ? {} : { hideTypes: hideTypes })}
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
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "start",
                paddingLeft: "12px",
              }}
            >
              <div
                style={{
                  color: "#0A0A0A",
                  wordBreak: "keep-all",
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {key} <span style={{ color: "grey" }}> : </span>
              </div>
              <div style={{ color: "#333333" }}>
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

                {`${value}`}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default JsonRender;
