// Invoice.js
// import React from 'react';

// const Invoice = ({ formData }) => {
//   const costoDiario = 35000;
//   let costoAlquiler = costoDiario * formData.numero_dias_alquiler;

//   // Aplicar incremento por servicio de domicilio
//   if (formData.tipo_servicio === 'Fuera de la ciudad') {
//     costoAlquiler += costoAlquiler * 0.05; // Incremento del 5%
//   }

//   // Aplicar descuento adicional por alquiler dentro del establecimiento
//   if (formData.tipo_servicio === 'Dentro del establecimiento') {
//     costoAlquiler -= costoAlquiler * 0.05; // Descuento del 5%
//   }

//   // Calcular costo por días adicionales y aplicar descuento
//   const costoDiasAdicionales = costoDiario * formData.numero_dias_adicionales;
//   costoAlquiler += costoDiasAdicionales;

//   // Aplicar descuento por días adicionales (2% de descuento por día)
//   costoAlquiler -= costoDiasAdicionales * 0.02;

//   return (
//     <div>
//       <h1>Factura</h1>
//       <p>Nombre: {formData.nombre}</p>
//       <p>Correo Electrónico: {formData.email}</p>
//       <p>Tipo de Servicio: {formData.tipo_servicio}</p>
//       <p>Número de equipos alquilados: {formData.numero_alquiler_equipos}</p>
//       <p>Número de días de alquiler: {formData.numero_dias_alquiler}</p>
//       <p>Número de días adicionales: {formData.numero_dias_adicionales}</p>
//       <p>Costo total: ${costoAlquiler.toFixed(2)}</p>
//     </div>
//   );
// };

// export default Invoice;
