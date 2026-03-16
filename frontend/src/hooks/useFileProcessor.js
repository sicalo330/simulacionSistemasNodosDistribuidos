import { useState } from 'react';
import { uploadFile } from '../api';

export const useFileProcessor = () => {
  const [file, setFile] = useState(null);
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return;
    const isTxt = selectedFile.type === "text/plain" || selectedFile.name.endsWith('.txt');
    
    if (isTxt) {
      setFile(selectedFile);
      setIsProcessed(false);
      setSections([]);
      setShowError(false);
    } else {
      setFile(null);
      setShowError(true);
    }
  };

  const processFile = async () => {
    if (!file) return;
    setIsLoading(true);

    try {
      // 1. Llamada real al backend de tus compañeros
      const response = await uploadFile(file);
      console.log("Respuesta del Backend:", response);

      // 2. Mapeamos los 'resultados' del backend a nuestra estructura de la UI
      // El backend devuelve: { "resultados": [ { "nodo": 1, "datos": {...}, "status": 200 }, ... ] }
      if (response && response.resultados) {
        const realParts = response.resultados.map((res) => ({
          id: res.nodo,
          // Si el status es 200, mostramos éxito, si no, error
          title: `Nodo ${res.nodo} - ${res.status === 200 ? '✅ Online' : '❌ Error'}`,
          // Guardamos los datos recibidos (el JSON del nodo) para mostrarlo luego
          content: res.datos || res.error || "Sin datos"
        }));

        setSections(realParts);
        setIsProcessed(true);
      }
    } catch (error) {
      console.error("Error en la conexión con el Nodo Maestro:", error);
      alert("Error: No se pudo conectar con el servidor Django.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setSections([]);
    setIsProcessed(false);
    setIsLoading(false);
  };

  return { 
    file, sections, isLoading, isProcessed, showError, 
    setShowError, handleFileSelect, clearFile, processFile 
  };
};