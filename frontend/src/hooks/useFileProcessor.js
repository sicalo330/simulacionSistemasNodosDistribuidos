import { useState } from 'react';

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
      // Simulación de procesamiento en sistema distribuido (2.5 segundos)
      await new Promise(resolve => setTimeout(resolve, 2500));

      const simulatedParts = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        title: `Nodo ${String.fromCharCode(65 + i)} - Parte ${i + 1}`,
        content: `Contenido del fragmento ${i + 1} procesado exitosamente...`
      }));

      setSections(simulatedParts);
      setIsProcessed(true);
    } catch (error) {
      console.error("Error en la red:", error);
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