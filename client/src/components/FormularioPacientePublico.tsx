export default function FormularioPacientePublico() {

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-teal-700 mb-8 text-center">
          Historial Clínico Dental
        </h1>

        {/* DATOS PERSONALES */}

        <div className="mb-10">

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

        {/* HISTORIAL MÉDICO */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold mb-4">
            Historial Médico
          </h2>

          <textarea
            placeholder="Describa enfermedades, alergias, medicamentos, etc."
            className="w-full border rounded-xl p-4 h-40"
          />

        </div>

        {/* CONSENTIMIENTO */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold mb-4">
            Consentimiento
          </h2>

          <p className="text-gray-700 mb-4">
            Autorizo el tratamiento dental y confirmo que la información proporcionada es correcta.
          </p>

          <label className="flex items-center gap-3">

            <input type="checkbox" />

            Acepto el consentimiento

          </label>

        </div>

        {/* FIRMA */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold mb-4">
            Firma
          </h2>

          <input
            type="text"
            placeholder="Escriba su nombre completo como firma"
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
            text-xl
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