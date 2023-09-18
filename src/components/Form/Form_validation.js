const validateForm = (valores) => {
   let errores = {}

   //Validación nombre
   if (!valores.nombre) {
      errores.nombre = 'Por favor ingresa un nombre'
   } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
      errores.nombre = 'El nombre solo puede contener letras y espacios'
   }

   //Validación correo
   if (!valores.email) {
      errores.email = 'Por favor ingresa un correo electrónico'
   } else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
      errores.email = 'Ingresa un correo electrónico valido'
   }

   //Validación telefono
   if (!valores.telefono) {
      errores.telefono = 'Por favor ingresa un telefono de contacto'
   } else if (!/^[0-9]+$/.test(valores.telefono) || valores.telefono.length < 10 || valores.telefono.length > 14) {
      errores.telefono = 'Ingresa un número de teléfono válido entre 10-14 digitos'
   }

   //Validación telefono
   if (!valores.tipo_servicio) {
      errores.tipo_servicio = 'Por favor escoja una opción'
   }

   //Validación de numero de alquiler de equipos
   if (!valores.numero_alquiler_equipos) {
      errores.numero_alquiler_equipos = 'Por favor ingresa el valor de equipos a alquilar'
   } else if (valores.numero_alquiler_equipos < 2) {
      errores.numero_alquiler_equipos = 'Mínimo tienen que ser 2 equipos'
   }

   //Validación de numero de dias de alquiler
   if (!valores.numero_dias_alquiler) {
      errores.numero_dias_alquiler = 'Por favor ingresa el valor de días a alquilar'
   }

   //Validación de numero de dias adicionales
   if (valores.numero_dias_adicionales < 0) {
      errores.numero_dias_adicionales = 'Por favor ingresa un valor valido'
   }

   return errores;
}

export default validateForm;