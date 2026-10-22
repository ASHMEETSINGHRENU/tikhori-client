import React, { useState, useEffect } from 'react';
import { Users, Mail, Copy, CheckCircle2, Download } from 'lucide-react';
import { api } from '../../services/api';

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    api.getSubscribers().then(setSubscribers);
  }, []);

  const handleCopyEmails = () => {
    const emails = subscribers.map((s) => s.email).join(', ');
    navigator.clipboard.writeText(emails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D9A441]/20">
        <div>
          <span className="text-[10px] tracking-[0.25em] font-bold text-[#D9A441] uppercase block">
            AUDIENCE & NEWSLETTER
          </span>
          <h1 className="font-display font-black text-3xl text-[#F8F1E5]">
            Spice Club Subscribers ({subscribers.length})
          </h1>
        </div>

        <button
          onClick={handleCopyEmails}
          className="btn-pill-gold py-2.5 px-5 text-xs font-bold flex items-center gap-2"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-[#281006]" /> : <Copy className="w-4 h-4 text-[#281006]" />}
          <span>{copied ? 'Copied to Clipboard!' : 'Copy All Emails'}</span>
        </button>
      </div>

      <div className="bg-[#402011] rounded-3xl border border-[#D9A441]/30 overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#281006] text-[10px] uppercase tracking-wider text-[#D9A441] border-b border-[#D9A441]/20">
              <tr>
                <th className="py-4 px-4">Subscriber Email</th>
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Origin / Campaign</th>
                <th className="py-4 px-4">Date Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9A441]/10 text-[#F8F1E5]">
              {subscribers.map((s) => (
                <tr key={s.id} className="hover:bg-[#281006]/40 transition-colors">
                  <td className="py-4 px-4 font-mono font-bold text-[#D9A441]">{s.email}</td>
                  <td className="py-4 px-4">{s.name || 'Friend of Tikhori'}</td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] bg-[#281006] text-[#F8F1E5] border border-[#D9A441]/30">
                      {s.source}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#F8F1E5]/70">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSubscribers;
