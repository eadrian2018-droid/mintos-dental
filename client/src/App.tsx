import QRCodePaciente from "./components/QRCodePaciente";

function App() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>MintOS Dental</h1>

      <QRCodePaciente />
    </div>
  );
}

export default App;