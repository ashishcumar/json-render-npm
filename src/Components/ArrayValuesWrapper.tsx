import ArrayComponent from "./ArrayComponent";

interface IProps {
  value: any;
  isExpanded: boolean;
  isLast: boolean;
  keyColor: string;
  valueColor: string;
  hideTypes?: boolean;
}
function ArrayValuesWrapper(data: Readonly<IProps>) {
  const { value, isExpanded, isLast, keyColor, valueColor, hideTypes } = data;
  return (
    <div>
      {!isExpanded ? (
        <div>
          <div>
            {hideTypes ? null : (
              <span
                style={{ fontSize: "12px", margin: "0 4px" }}
              >{`(array)`}</span>
            )}
            {`[`}
          </div>
          <div style={{ paddingLeft: "12px" }}>
            <ArrayComponent
              data={value}
              keyColor={keyColor}
              valueColor={valueColor}
              {...(!hideTypes ? {} : { hideTypes: hideTypes })}
            />
          </div>
          <div>{`]` + (isLast ? "" : ",")}</div>
        </div>
      ) : (
        <div>
          {hideTypes ? null : (
            <span
              style={{ fontSize: "12px", margin: "0 4px" }}
            >{`array(${value.length})`}</span>
          )}
          [....]
        </div>
      )}
    </div>
  );
}

export default ArrayValuesWrapper;
