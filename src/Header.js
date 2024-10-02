export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#de57de",
        display: "flex",
        color: "white",
        justifyContent: "center",
        alignItem: "center",
        fontSize: "20px",
        fontFamily: "system-ui",
        textTransform: "uppercase",
        boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px",
      }}
    >
      <h3>my header</h3>
    </header>
  );
}
