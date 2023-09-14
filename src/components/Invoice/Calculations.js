export const calcularCostoTotal = (tipoServicio, numeroAlquilerEquipos, numeroDiasAlquiler, numeroDiasAdicionales) => {
   
   const valorPorDia = 35000;
   let costoBase = numeroAlquilerEquipos * numeroDiasAlquiler * valorPorDia;
 
   if (tipoServicio === 'Fuera de la ciudad') {
     costoBase *= 1.05;
   } else if (tipoServicio === 'Dentro del establecimiento') {
     costoBase *= 0.95;
   }
 
   const costoAdicional = numeroDiasAdicionales * valorPorDia * numeroAlquilerEquipos * 0.98;
   const costoTotal = costoBase + costoAdicional;
   const costoDomicilio = costoBase * 0.05;
 
   return {
     costoBase,
     costoAdicional,
     costoTotal,
     costoDomicilio
   };
 };
 