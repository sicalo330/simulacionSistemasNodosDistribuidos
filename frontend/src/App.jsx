// src/App.jsx
import { useFileProcessor } from './hooks/useFileProcessor';
import Button from './components/ui/Button';
import FilePicker from './components/upload/FilePicker';
import FileStats from './components/upload/FileStats';
import SectionList from './components/results/SectionList'; // Nuevo componente
import ErrorModal from './components/feedback/ErrorModal';

function App() {
  const { 
    file, 
    sections, 
    isLoading, 
    isProcessed, 
    showError, 
    setShowError, 
    handleFileSelect, 
    clearFile, 
    processFile 
  } = useFileProcessor();

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-12 font-sans text-slate-900">
      
      {/* TÍTULO PRINCIPAL */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-black text-blue-600 tracking-tight">
          Text divider
        </h1>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* --- LADO IZQUIERDO: CONTROL DE CARGA Y ENVÍO --- */}
        <section className="flex flex-col items-center w-full">
          {!file ? (
            /* Estado inicial: Esperando archivo */
            <FilePicker onFileSelect={handleFileSelect} />
          ) : (
            /* Estado: Archivo listo o Procesando */
            <div className="w-full flex flex-col items-center gap-8 relative animate-in zoom-in duration-300">
              
              {/* Botón X de cancelación */}
              <button 
                onClick={clearFile} 
                disabled={isLoading} 
                className="absolute -top-4 -right-2 bg-red-500 text-white p-2 rounded-full shadow-xl hover:scale-110 active:scale-95 disabled:opacity-30 z-20 transition-all"
                title="Quitar archivo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Icono de Estado Dinámico */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-inner transition-colors duration-500 ${isProcessed ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isProcessed ? (
                    /* Check de éxito */
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  ) : (
                    /* Icono de documento */
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  )}
                </svg>
              </div>

              <div className="text-center space-y-1">
                <h2 className="text-3xl font-bold text-slate-800">
                  {isProcessed ? "¡Procesado!" : "Archivo listo"}
                </h2>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
                  Simulación de Sistema Distribuido
                </p>
              </div>

              {/* Información del archivo (Nombre y Peso) */}
              <FileStats file={file} />

              {/* Botón de Acción Principal */}
              <Button 
                onClick={processFile} 
                disabled={isLoading || isProcessed} 
                className="w-full max-w-sm shadow-2xl shadow-blue-200"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Distribuyendo...
                  </>
                ) : isProcessed ? "Procesamiento finalizado" : "Procesar y dividir"}
              </Button>
            </div>
          )}
        </section>

        {/* --- LADO DERECHO: COMPONENTE DE LISTADO --- */}
        <SectionList sections={sections} />

      </main>

      {/* MODAL DE ERROR PARA ARCHIVOS NO .TXT */}
      <ErrorModal 
        isOpen={showError} 
        onClose={() => setShowError(false)} 
        message="El formato del archivo debe ser estrictamente .txt para esta simulación distribuida."
      />
      
    </div>
  );
}

export default App;