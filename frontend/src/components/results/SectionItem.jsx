// src/components/results/SectionItem.jsx
const SectionItem = ({ id, title, onCopy, onView }) => {
  return (
    <div className="group flex items-center justify-between p-5 bg-white border-2 border-slate-50 rounded-2xl hover:border-blue-400 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
          <span className="text-slate-400 font-bold group-hover:text-blue-500">{id}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-700 group-hover:text-slate-900 leading-tight">
            {title}
          </span>
          <span className="text-xs text-slate-400 font-medium">Nodo de procesamiento {id}</span>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button 
          onClick={onView}
          className="p-2.5 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          title="Ver contenido"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
        <button 
          onClick={onCopy}
          className="p-2.5 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          title="Copiar fragmento"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SectionItem;