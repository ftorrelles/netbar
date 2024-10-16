import React from "react";
import { Alert } from "react-bootstrap"; // Importa Alert de react-bootstrap
import "../styles/alertSection.css"; // Asegúrate de tener el archivo de estilos

const AlertSection = () => {
  return (
    <div className="alert-section">
      <Alert variant="warning" className="alert-custom">
        <h4>🚨 Aviso Importante 🚨</h4>
        <p>
          Si estás utilizando un router de 1 banda (2.4 GHz), es posible que no
          estés recibiendo las actualizaciones necesarias. Esto puede afectar tu
          experiencia de conexión. Te recomendamos reiniciar tu router (no
          resetear) cada 2 días durante 2 minutos para liberar memoria y mejorar
          su rendimiento.
        </p>

        <p>
          Recuerda que en nuestra oficina solo se aceptan pagos en divisa física
          o bolívares en efectivo.
        </p>
      </Alert>
    </div>
  );
};

export default AlertSection;
