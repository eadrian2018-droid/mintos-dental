const QRCodePaciente = () => {

  const urlFormulario =
    "https://mintos-dental-q77v-haqwpylhj-eadrian2018-droids-projects.vercel.app/";

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

      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(urlFormulario)}`}
        alt="QR"
        className="rounded-2xl"
      />

      <p
        className="
          mt-6
          text-gray-600
          text-center
        "
      >
        Escanee desde su celular
        <br />
        para llenar su historial clínico
      </p>

    </div>
  );
};

export default QRCodePaciente;