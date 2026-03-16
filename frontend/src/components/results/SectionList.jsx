import { useState } from 'react';
import SectionItem from './SectionItem';
import DetailsModal from './DetailsModal';

const SectionList = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleView = (section) => {
    setSelectedSection(section);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border-2 border-white shadow-2xl min-h-[500px]">
        {/* ... (Cabecera igual que antes) */}
        
        <div className="space-y-4">
          {sections.length > 0 ? (
            sections.map((node) => (
              <SectionItem 
                key={node.id} 
                id={node.id} 
                title={node.title} 
                content={node.content} // Pasamos el contenido real
                onView={handleView}     // Pasamos la función para abrir el modal
              />
            ))
          ) : (
             <p className="text-center py-20 opacity-20 italic font-bold text-slate-400">
               Esperando respuesta del Nodo Maestro...
             </p>
          )}
        </div>
      </section>

      {/* El Modal vive aquí afuera */}
      <DetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        section={selectedSection} 
      />
    </>
  );
};

export default SectionList;