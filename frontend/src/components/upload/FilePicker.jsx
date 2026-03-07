// src/components/upload/FilePicker.jsx
import Card from '../ui/Card';

const FilePicker = ({ onFileSelect }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
    // TRUCO: Limpiamos el valor para que deje volver a intentar con el mismo archivo
    e.target.value = ""; 
  };

  return (
    <Card className="w-full aspect-video border-dashed border-2 border-blue-300 bg-blue-50/50 flex flex-col items-center justify-center relative hover:bg-blue-100/50 transition-colors cursor-pointer">
      <input 
        type="file" 
        accept=".txt" // Esto ayuda a que el sistema operativo filtre los archivos
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleChange}
      />
      
      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-slate-800">Agregue archivo .txt</h3>
      <p className="text-slate-400 text-center mt-2 px-8 text-sm">
        Haz clic o arrastra un archivo de texto aquí
      </p>
    </Card>
  );
};

export default FilePicker;