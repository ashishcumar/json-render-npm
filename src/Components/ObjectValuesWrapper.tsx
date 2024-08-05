import ObjectComponent from "./ObjectComponent";

interface IProps {
  value: any;
  isExpanded: boolean;
  isLast: boolean;
  keyColor: string;
  valueColor: string;
  hideTypes?: boolean;
}
function ObjectValuesWrapper(data: Readonly<IProps>) {
  const { value, isExpanded, isLast, keyColor, valueColor, hideTypes } = data;
  return (
    <div>
      {!isExpanded ? (
        <div>
          <div style={{ paddingLeft: "8px" }}>
            {hideTypes ? null : (
              <span
                style={{ fontSize: "12px", margin: "0 4px" }}
              >{`(object)`}</span>
            )}

            {`{`}
          </div>
          <div style={{ paddingLeft: "12px" }}>
            <ObjectComponent
              data={value}
              valueColor={valueColor}
              keyColor={keyColor}
              {...(!hideTypes ? {} : { hideTypes: hideTypes })}
            />
          </div>
          <div>{`}` + (isLast ? "" : ",")}</div>
        </div>
      ) : (
        <div>
          {hideTypes ? null : (
            <span style={{ fontSize: "12px", margin: "0 4px" }}>{`object(${
              Object.keys(value).length
            })`}</span>
          )}
          {"{...}"}
        </div>
      )}
    </div>
  );
}

export default ObjectValuesWrapper;
