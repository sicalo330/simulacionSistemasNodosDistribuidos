const DetailsModal = ({ isOpen, onClose, section }) => {
  if (!isOpen || !section) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200">
        {/* Cabecera */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-xl font-black text-slate-800">{section.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Respuesta del Nodo:</p>
          <pre className="bg-slate-900 text-green-400 p-6 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-inner">
            {typeof section.content === 'object' 
              ? JSON.stringify(section.content, null, 2) 
              : section.content}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all active:scale-95"
          >
            Cerrar vista
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;