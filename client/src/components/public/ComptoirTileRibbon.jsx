import React from 'react';

const ComptoirTileRibbon = () => {
  return (
    <div className="w-full overflow-hidden border-y-2 border-[#4A121A] py-1 bg-[#0D4744]">
      <div className="h-8 sm:h-10 w-full flex items-center justify-between overflow-hidden">
        {/* Repeating Floral / Diamond Tile Pattern */}
        <div className="flex shrink-0 gap-0 min-w-full justify-around">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3">
              {/* Outer Tile Diamond */}
              <div className="w-6 h-6 rotate-45 bg-[#E85A18] border border-[#FCE74C] flex items-center justify-center shadow-xs">
                <div className="w-3 h-3 bg-[#E62E6B] rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#FCE74C] rounded-full" />
                </div>
              </div>
              <div className="w-4 h-4 rotate-45 bg-[#009E96] border border-white/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComptoirTileRibbon;
