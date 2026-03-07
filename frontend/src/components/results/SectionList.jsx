// src/components/results/SectionList.jsx
import SectionItem from './SectionItem';

const SectionList = ({ sections }) => {
  return (
    <section className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border-2 border-white shadow-2xl min-h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-black text-slate-700 tracking-tight">Secciones divididas</h2>
        <span className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-black shadow-lg shadow-blue-200">
          {sections.length} Partes
        </span>
      </div>

      <div className="space-y-4 flex-1">
        {sections.length > 0 ? (
          sections.map((section) => (
            <SectionItem 
              key={section.id} 
              id={section.id} 
              title={section.title} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-20 opacity-20 italic font-bold text-center">
            <svg className="w-20 h-20 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-xl">Esperando señal de los nodos...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionList;