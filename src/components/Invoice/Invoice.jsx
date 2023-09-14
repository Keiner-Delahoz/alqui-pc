import { useLocation, Link } from "react-router-dom";
import styles from "../../styles/Invoice.module.css";
import { calcularCostoTotal } from "./Calculations";

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

  const { costoBase, costoAdicional, costoTotal, costoDomicilio } =
    calcularCostoTotal(
      tipoServicio,
      numeroAlquilerEquipos,
      numeroDiasAlquiler,
      numeroDiasAdicionales
    );

  return (
    <div className={styles.contenedor}>
      <div className={styles.rows}>
        <h1>Factura</h1>
        <div className={styles.info}>
          <h4>Información personal</h4>
          <p className="titulo_negrita">Nombre: {nombre}</p>
          <p>Email: {email}</p>
          <p>Teléfono: {telefono}</p>
        </div>
        <div className={styles.info}>
          <h4>Información del servicio</h4>
          <p>Tipo de servicio: {tipoServicio}</p>
          <p>Número de equipos: {numeroAlquilerEquipos}</p>
          <p>Número de días de alquiler: {numeroDiasAlquiler}</p>
          <p>Número de días adicionales: {numeroDiasAdicionales}</p>
          <p>Costo domicilio: ${costoDomicilio}</p>
          <p>Costo base: ${costoBase}</p>
          <p>Costo adicional: ${costoAdicional}</p>
          <br />
          <hr />
          <p>Costo total: ${costoTotal}</p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center", // Para centrar el texto
          marginTop: "1rem",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-block",
            width: "40%",
            border: "none",
            padding: "0.62rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "0.99rem",
            fontWeight: "500",
            backgroundColor: "#6f6df4",
            color: "#fff",
            textDecoration: "none",
            textAlign: "center",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          Volver
        </Link>
      </div>

      {/* <div className={styles.backButton}>
            <button>
               <Link to="/">
                  Volver
               </Link>
            </button>
         </div> */}
    </div>
  );
};

export default Invoice;
