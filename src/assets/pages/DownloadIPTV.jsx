import React from "react";
import { FaDownload, FaAndroid, FaQuestionCircle } from "react-icons/fa";
import "../styles/DownloadIPTV.css"; // Asegúrate de crear este archivo CSS

const DownloadIPTV = () => {
  // Datos del archivo APK (puedes modificarlos según tus necesidades)
  const apkData = {
    name: "interwireless_TV.apk",
    size: "68 MB",
    version: "1.0.0",
    downloadUrl: "/downloads/interwireless_TV.apk", // Ruta donde estará el archivo
    lastUpdated: "10/05/2023",
  };

  return (
    <div className="download-container">
      <div className="download-header">
        <h1>
          <FaAndroid /> Descarga la aplicación IPTV
        </h1>
        <p>Instala nuestra aplicación para disfrutar del mejor contenido</p>
      </div>

      <div className="download-card">
        <div className="file-info">
          <h2>{apkData.name}</h2>
          <div className="file-details">
            <p>
              <strong>Tamaño:</strong> {apkData.size}
            </p>
            <p>
              <strong>Versión:</strong> {apkData.version}
            </p>
            <p>
              <strong>Actualizado:</strong> {apkData.lastUpdated}
            </p>
          </div>
        </div>

        <div className="download-actions">
          <a
            href={apkData.downloadUrl}
            download={apkData.name}
            className="download-button"
          >
            <FaDownload /> Descargar APK
          </a>
        </div>
      </div>

      <div className="download-instructions">
        <h3>
          <FaQuestionCircle /> Instrucciones de instalación
        </h3>
        <ol>
          <li>Descarga el archivo APK haciendo clic en el botón superior</li>
          <li>
            Ve a Configuraciones &gt; Seguridad y activa "Fuentes desconocidas"
          </li>
          <li>Abre el archivo descargado para iniciar la instalación</li>
          <li>Sigue las instrucciones en pantalla</li>
          <li>¡Disfruta de la aplicación!</li>
        </ol>

        <div className="security-warning">
          <p>
            <strong>Nota de seguridad:</strong> Esta aplicación solo está
            disponible fuera de Google Play Store. Asegúrate de descargarla
            únicamente desde este sitio oficial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadIPTV;
