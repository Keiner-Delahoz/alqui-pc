export const validation_message = (tipoServicio, numeroDiasAdicionales) => {
  let mensajeCostoBase;
  let mensajeCostoAdicional;

  if (tipoServicio === "Fuera de la ciudad") {
    mensajeCostoBase = "Costo base (domicilio incluido):";
  } else if (tipoServicio === "Dentro del establecimiento") {
    mensajeCostoBase = "Costo base (desc 5% incluido):";
  } else {
    mensajeCostoBase = "Costo base:";
  }

  if (numeroDiasAdicionales > 1) {
    mensajeCostoAdicional = "Costo adicional (desc 2% incluido):";
  } else {
    mensajeCostoAdicional = "Costo adicional:";
  }

  return {
    mensajeCostoBase,
    mensajeCostoAdicional,
  };
};
