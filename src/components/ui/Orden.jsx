import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../firebase";

const Orden = ({ orden }) => {
  const { firebase } = useContext(FirebaseContext);
  const [tiempoEntrega, setTiempoEntrega] = useState(0);

  const definirTiempo = (id) => {
    try {
      firebase.db.collection("ordenes").doc(id).update({
        tiempoEntrega,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const completarOrden = (id) => {
    try {
      firebase.db.collection("ordenes").doc(id).update({
        completado: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
      <div className="p-3 shadow-md bg-white">
        <h1 className="text-yellow-600 text-lg font-bols">{orden.id}</h1>
        {orden.orden.map((platillos) => (
          <p className="text-gray-600" key={platillos.id}>
            {platillos.cantidad} - {platillos.nombre}
          </p>
        ))}
        <p className="text-gray-700 font-bold">Total a pagar: ${orden.total}</p>

        {orden.tiempoEntrega === 0 && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tiempo de Entrega: {orden.tiempoEntrega}
            </label>
            <input
              type="number"
              min="0"
              max="20"
              placeholder="20"
              value={tiempoEntrega}
              onChange={(e) => setTiempoEntrega(parseInt(e.target.value))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:out"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 w-full mt-5 p-2 text-white font-bold"
              onClick={() => definirTiempo(orden.id)}
            >
              Definir Tiempo
            </button>
          </div>
        )}

        {orden.tiempoEntrega > 0 && orden.tiempoEntrega > 0 && (
          <p className="text-gray-700">
            Tiempo de entrega:
            <span className="font-bold"> {orden.tiempoEntrega} Minutos</span>
          </p>
        )}

        {!orden.completado && (
          <button
            onClick={() => completarOrden(orden.id)}
            type="button"
            className="bg-blue-800 hover:bg-blue-800 w-full mt-5 p-2 text-white font-bold"
          >
            Marcar como lista
          </button>
        )}
      </div>
    </div>
  );
};

export default Orden;
