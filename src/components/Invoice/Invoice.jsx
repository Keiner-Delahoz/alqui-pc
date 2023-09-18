import { useLocation, Link } from "react-router-dom";
import "../../styles/Invoice.css";
import { calcularCostoTotal } from "./Calculations";
import { validation_message } from "./Validaton_message";

const Invoice = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const nombre = queryParams.get("nombre");
  const email = queryParams.get("email");
  const telefono = queryParams.get("telefono");
  const tipoServicio = queryParams.get("tipo_servicio");
  const numeroAlquilerEquipos = queryParams.get("numero_alquiler_equipos");
  const numeroDiasAlquiler = queryParams.get("numero_dias_alquiler");
  const numeroDiasAdicionales = queryParams.get("numero_dias_adicionales");

  const { costoBase, costoAdicional, costoTotal } =
    calcularCostoTotal(
      tipoServicio,
      numeroAlquilerEquipos,
      numeroDiasAlquiler,
      numeroDiasAdicionales
    );

    const {mensajeCostoBase, mensajeCostoAdicional} = validation_message(tipoServicio,costoAdicional);
    console.log(tipoServicio)
    console.log(mensajeCostoBase)

  return (
    <div className="contenedor">
      <div className="rows">
        <h1>Factura</h1>
        <div className="info">
          <h4 className="subtittle-info">Información personal <hr/></h4>
          <p className="titulo_negrita"><strong>Nombre:</strong> {nombre}</p>

          <p><strong>Email:</strong> {email}</p>
          <p><strong>Teléfono:</strong> {telefono}</p>
        </div>
        <div className="info">
          <h4 className="subtittle-info">Información del servicio<hr/></h4>
          <p><strong>Tipo de servicio:</strong> {tipoServicio}</p>
          <p><strong>Número de equipos:</strong> {numeroAlquilerEquipos}</p>
          <p><strong>Número de días de alquiler:</strong> {numeroDiasAlquiler}</p>
          <p><strong>Número de días adicionales:</strong> {numeroDiasAdicionales}</p>
          {/* <p><strong>Costo domicilio:</strong> $ {costoDomicilio}</p> */}
          <p><strong>{mensajeCostoBase}</strong> ${costoBase}</p>
          <p><strong>{mensajeCostoAdicional}</strong> $ {costoAdicional}</p>
          <hr />
        </div>
        <div className="info">
         <p><strong>Costo total:</strong> ${costoTotal}</p>
         </div>  
      </div>
      <div className="button-container">
        <Link to="/" className="button-link"> Volver </Link>
      </div>
    </div>
  );
};

export default Invoice;
