interface IProps {
  keyName: string | number;
  isExpanded: boolean;
  handleExpand: () => void;
  keyColor: string;
}
function Keys(data: Readonly<IProps>) {
  const { keyName, isExpanded, handleExpand, keyColor } = data;

  return (
    <div style={{ display: "flex", alignItems: "start" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => handleExpand()}
      >
        <div
          style={{
            height: "fit-content",
            width: "fit-content",
            fontSize: "10px",
          }}
        >
          <div style={{ marginRight: "8px" }} id="icon">
            {!isExpanded ? "▼" : "▶"}
          </div>
        </div>
        <div
          style={{
            color: keyColor ? keyColor : "#0A0A0A",
            fontWeight: "600",
            display: "flex",
            wordBreak: "keep-all",
          }}
        >
          {keyName} <span style={{ color: "grey" }}> : </span>
        </div>
      </div>
    </div>
  );
}

export default Keys;
