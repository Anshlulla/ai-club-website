
import React from "react";
import { Book } from "lucide-react";

const AibyssCard: React.FC<{ session: string; speaker?: string; img?: string }> = ({
  session,
  speaker,
  img,
}) => (
  <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center border border-indigo-100 w-72 min-h-[250px] snap-center shrink-0 hover:scale-105 transition-transform">
    <span className="inline-block rounded-full bg-gradient-to-br from-violet-600 via-indigo-200 to-violet-400 p-3 mb-2">
      <Book className="text-white" size={28} />
    </span>
    <span className="font-bold text-violet-900">{session}</span>
    {speaker && <span className="text-xs text-slate-600">Speaker: {speaker}</span>}
    {img && (
      <img
        src={img}
        alt="AIBYSS session"
        className="h-20 w-full object-cover rounded shadow mt-2"
      />
    )}
  </div>
);

export default AibyssCard;
