import React, { useState } from "react";
import moment from "moment";
import Head from "next/head";

export default function CalculadoraDeHoras() {
  const [horarioInicio, setHorarioInicio] = useState("");
  const [horarioTermino, setHorarioTermino] = useState("");
  const [totalHoras, setTotalHoras] = useState("");

  const calcularHoras = () => {
    const horarioInicioMoment = moment(horarioInicio, "HH:mm");
    const horarioTerminoMoment = moment(horarioTermino, "HH:mm");
    const totalHorasMoment = moment.duration(
      horarioTerminoMoment.diff(horarioInicioMoment)
    );

    setTotalHoras(
      totalHorasMoment.hours() +
        ":" +
        totalHorasMoment.minutes().toString().padStart(2, "0")
    );
  };

  return (
    <>

    <Head>
      <title>Calculadora de Horas</title>
    </Head>

    <div className="text-white p-4 md:p-0 rounded-lg h-screen flex flex-col justify-center items-center">
      <div className="items-left flex flex-col">
        <h1 className="text-3xl font-extrabold mb-8">Calculadora de Horas</h1>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Horário de início</label>
          <input
            className="p-2 rounded-md md:p-6 md:text-xl bg-stone-900 text-white"
            type="time"
            value={horarioInicio}
            onChange={(e) => setHorarioInicio(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Horário de término</label>
          <input
            className="p-2 md:p-6 md:text-xl rounded-md bg-stone-900 text-white"
            type="time"
            value={horarioTermino}
            onChange={(e) => setHorarioTermino(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-700 hover:bg-blue-600 cursor-pointer text-white font-bold px-4 py-2 rounded-md mb-4 md:px-16 md:py-4 md:text-2xl"
          onClick={calcularHoras}
        >
          Calcular
        </button>

        {totalHoras && (
          <div className="text-lg mb-10 text-center">
            Total de horas trabalhadas: {totalHoras}
          </div>
        )}
        <br />
      </div>
      <span className="text-white text-center text-stone-900">
        Criado por{" "}
        <a href="https://github.com/joseeugeniio" target="_blank" className="hover:underline">
          José Eugênio
        </a>
      </span>
    </div>
    </>
  )
}
