const SectionItem = ({ id, title, content, onView }) => {
  
  const handleCopy = () => {
    const textToCopy = typeof content === 'object' ? JSON.stringify(content) : content;
    navigator.clipboard.writeText(textToCopy);
    alert(`¡Contenido del Nodo ${id} copiado al portapapeles!`);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white/50 hover:bg-white rounded-2xl border border-transparent hover:border-blue-100 transition-all group">
      <div className="flex items-center gap-4">
        <span className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-500 rounded-xl font-black group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {id}
        </span>
        <div>
          <h4 className="font-bold text-slate-700">{title}</h4>
          <p className="text-xs text-slate-400 font-medium">Nodo de procesamiento {id}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {/* Botón Ver */}
        <button 
          onClick={() => onView({ id, title, content })}
          className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          title="Ver contenido"
        >
          👁️
        </button>
        {/* Botón Copiar */}
        <button 
          onClick={handleCopy}
          className="p-2.5 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
          title="Copiar contenido"
        >
          📋
        </button>
      </div>
    </div>
  );  
};

export default SectionItem;