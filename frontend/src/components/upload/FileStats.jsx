const FileStats = ({ file }) => {
  if (!file) return null;

  // Cálculo de peso: Bytes a KB o MB
  const sizeInBytes = file.size;
  const sizeFormatted = sizeInBytes < 1024 * 1024 
    ? `${(sizeInBytes / 1024).toFixed(1)} KB` 
    : `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;

  return (
    <div className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-2xl bg-white w-full max-w-sm shadow-sm">
      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 012-2h4.586A1 1 0 0111 2.707l7 7a1 1 0 01.293.707V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
        </svg>
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="font-semibold text-slate-700 truncate">{file.name}</span>
        <span className="text-xs text-slate-400 uppercase font-extrabold">{sizeFormatted} - TXT</span>
      </div>
    </div>
  );
};

export default FileStats;