import QRCode from "react-qr-code";

const QRCodePaciente = () => {

  const urlFormulario =
    "https://mintos-dental-q77v.vercel.app";

  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        p-8
        mb-10
        flex
        flex-col
        items-center
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-teal-700
          mb-6
          text-center
        "
      >
        Escanee para llenar historial clínico
      </h2>

      <QRCode
        value={urlFormulario}
        size={180}
      />

      <h3
        className="
          text-4xl
          font-bold
          text-slate-600
          mt-6
          text-center
        "
      >
        Escanee desde su celular
      </h3>

      <p
        className="
          mt-4
          text-gray-600
          text-center
        "
      >
        Abra la cámara de su celular y escanee el código QR.
      </p>
    </div>
  );
};

export default QRCodePaciente;