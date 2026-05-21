export default function FormularioPacientePublico() {

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-teal-700 mb-8 text-center">
          Historial Clínico Dental
        </h1>

        <div className="mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Datos Personales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Nombre completo"
              className="border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Teléfono"
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              placeholder="Edad"
              className="border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Sexo"
              className="border rounded-xl p-3"
            />

          </div>

        </div>

        <div className="mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Historial Médico
          </h2>

          <textarea
            placeholder="Alergias, enfermedades, medicamentos..."
            className="w-full border rounded-xl p-4 h-40"
          />

        </div>

        <div className="mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Consentimiento
          </h2>

          <label className="flex items-center gap-3">

            <input type="checkbox" />

            Confirmo que la información es correcta.

          </label>

        </div>

        <div className="mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Firma
          </h2>

          <input
            type="text"
            placeholder="Escriba su nombre completo"
            className="w-full border rounded-xl p-3"
          />

        </div>

        <button
          className="
            bg-teal-600
            hover:bg-teal-700
            text-white
            px-8
            py-4
            rounded-2xl
            font-bold
            w-full
          "
        >
          Enviar Formulario
        </button>

      </div>

    </div>

  );

}