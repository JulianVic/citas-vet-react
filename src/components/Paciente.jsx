const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminarPaciente = () => {
    const respuesta = confirm("¿Estás seguro de eliminar el paciente?");
    if(respuesta){
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mx-5 mb-10 mt bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-7">
        <button
            type="button"
            className="uppercase text-xs font-bold bg-indigo-600 hover:bg-indigo-700 px-10 py-2 rounded-md text-white shadow-md"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            type="button"
            className="uppercase text-xs font-bold bg-red-600 hover:bg-red-700 px-10 py-2 rounded-md text-white shadow-md"
            onClick={handleEliminarPaciente}
          >
            Eliminar
          </button>
      </div>

    </div>
  );
};

export default Paciente;
