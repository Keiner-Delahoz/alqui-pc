import "../../styles/Form.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateForm from './Form_validation.js';

const Rental_form = () => {

   return (
      <div className="container">
         <h1>ALQUI-PC</h1>
         <p>Empresa de alquiler de computadores, alquilamos su pc.</p>

         <Formik
            initialValues={{
               nombre: "",
               email: "",
               telefono: "",
               tipo_servicio: "", // Puedes establecer un valor predeterminado aquí
               numero_alquiler_equipos: "",
               numero_dias_alquiler: "",
               numero_dias_adicionales: "0"
            }}

            validate={validateForm}
            onSubmit={(valores, {resetForm}) => {
               resetForm();
               console.log("Formulario enviado")
               console.log(valores)
            }}
         >
            {({ errors }) => (
               <Form className="formulario">
                  <div className="input-group">
                     <div className="row">
                        <div className="column input-box">
                           <label htmlFor="nombre">Nombre:</label>
                           <Field
                              type="text"
                              id="nombre"
                              name="nombre"
                              placeholder="Ingresa tu nombre aquí"
                           />
                           <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                        </div>
                        <div className="column input-box">
                           <label htmlFor="email">Correo Electrónico:</label>
                           <Field
                              type="text"
                              id="email"
                              name="email"
                              placeholder="Ingresa tu email aquí"
                           />
                           <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                        </div>
                     </div>
                     <div className="row">
                        <div className="column input-box">
                           <label htmlFor="telefono">Número de contacto:</label>
                           <Field
                              type="tel"
                              id="telefono"
                              name="telefono"
                              placeholder="Ingresa tu número de telefono aquí"
                           />

                           <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
                        </div>
                        <div></div>
                     </div>

                     <div className="row">
                        <div className="column input-box">
                           <label htmlFor="tipo_servicio">Tipo de servicio ofrecidos:</label>
                           <Field
                              name="tipo_servicio"
                              id="tipo_servicio"
                              as="select"
                           >
                              <option value="" disabled>Escoja una opción...</option>
                              <option value="value1">Dentro de la ciudad</option>
                              <option value="value2">Fuera de la ciudad</option>
                              <option value="value3">Dentro del establecimiento</option>
                           </Field>
                           <ErrorMessage name="tipo_servicio" component="div" className="error" />
                        </div>
                     </div>
                  </div>

                  <div className="row-numbers">
                     <div className="column input-box">
                        <label htmlFor="numero_alquiler_equipos">
                           N° de equipos que desea alquilar:
                        </label>
                        <Field
                           type="number"
                           id="numero_alquiler_equipos"
                           name="numero_alquiler_equipos"
                           placeholder="Ingresa el número de equipos"
                        />
                        <ErrorMessage name="numero_alquiler_equipos" component="div" className="error" />
                        {/* <ErrorMessage name="numero_alquiler_equipos" component={() => (<div className="error">{errors.numero_alquiler_equipos}</div>)} /> */}
                     </div>

                     <div className="column input-box">
                        <label htmlFor="numero_dias_alquiler">
                           N° de días que desea tomar el alquiler:
                        </label>
                        <Field
                           type="number"
                           id="numero_dias_alquiler"
                           name="numero_dias_alquiler"
                           placeholder="Ingresa el número de días a alquilar"
                        />
                        {/* <div className="error-container">
                           <ErrorMessage name="numero_dias_alquiler" component="div" className="error" />
                        </div> */}
                        {/* <ErrorMessage name="numero_dias_alquiler" component={() => (<div className="error">{errors.numero_dias_alquiler}</div>)} /> */}
                        <ErrorMessage name="numero_dias_alquiler" component="div" className="error" />
                     </div>

                     <div className="column input-box">
                        <label htmlFor="numero_dias_adicionales">
                           N° de días adicionales que toma el alquiler:
                        </label>
                        <Field
                           type="number"
                           id="numero_dias_adicionales"
                           name="numero_dias_adicionales"
                           placeholder="Ingresa el número de días adicionales"
                        />
                        <ErrorMessage name="numero_dias_adicionales" component="div" className="error" />
                     </div>
                  </div>

                  <div className="continue-button">
                     <button type="submit">Continuar</button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default Rental_form;

//Forma anterior de validar
/*{({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
   <div className="container">
      <h1>ALQUI-PC</h1>
      <p>Empresa de alquiler de computadores, alquilamos su pc.</p>
      <form onSubmit={handleSubmit} className="formulario">
         <div className="input-group">
            <div className="row">
               <div className="column input-box">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                     type="text"
                     id="nombre"
                     name="nombre"
                     placeholder="Ingresa tu nombre aquí"
                     value={values.nombre}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
                  {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
               </div>
               <div className="column input-box">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                     type="text"
                     id="email"
                     name="email"
                     placeholder="Ingresa tu email aquí"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
                  {touched.email && errors.email && <div className="error">{errors.email}</div>}
               </div>
            </div>
            <div className="row">
               <div className="column input-box">
                  <label htmlFor="telefono">Número de contacto:</label>
                  <input
                     type="tel"
                     id="telefono"
                     name="telefono"
                     placeholder="Ingresa tu número de telefono aquí"
                     value={values.telefono}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  />
               </div>
               <div></div>
            </div>

            <div className="row">
               <div className="column input-box">
                  <label htmlFor="tipo_servicio">Tipo de servicio ofrecidos:</label>
                  <select
                     name="tipo_servicio"
                     id="tipo_servicio"
                     value={values.tipo_servicio}
                     onChange={handleChange}
                     onBlur={handleBlur}
                  >
                     <option value="value1">Dentro de la ciudad</option>
                     <option value="value2">Fuera de la ciudad</option>
                     <option value="value3">Dentro del establecimiento</option>
                  </select>
               </div>
            </div>
         </div>
         <div className="row-numbers">

            <div className="column input-box">
               <label htmlFor="numero_alquiler_equipos">
                  N° de equipos que desea alquilar:
               </label>
               <input
                  type="number"
                  id="numero_alquiler_equipos"
                  name="numero_alquiler_equipos"
                  placeholder="Ingresa el número de equipos"
                  value={values.numero_alquiler_equipos}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
            </div>

            <div className="column input-box">
               <label htmlFor="numero_dias_alquiler">
                  N° de días que desea tomar el alquiler:
               </label>
               <input
                  type="number"
                  id="numero_dias_alquiler"
                  name="numero_dias_alquiler"
                  placeholder="Ingresa el número de días a alquilar"
                  value={values.numero_dias_alquiler}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
            </div>

            <div className="column input-box">
               <label htmlFor="numero_dias_adicionales">
                  N° de días adicionales que toma el alquiler:
               </label>
               <input
                  type="number"
                  id="numero_dias_adicionales"
                  name="numero_dias_adicionales"
                  placeholder="Ingresa el número de días adicionales"
                  value={values.numero_dias_adicionales}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
            </div>
         </div>

         <div className="continue-button">
            <button type="submit">Continuar</button>
         </div>
      </form>
   </div>
)}*/