import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Phone, Calendar, CheckCircle } from 'lucide-react';
import { api } from '../../services/api';

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    api.getEnquiries().then(setEnquiries);
  }, []);

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="pb-6 border-b border-[#D9A441]/20">
        <span className="text-[10px] tracking-[0.25em] font-bold text-[#D9A441] uppercase block">
          INCOMING COMMUNICATIONS
        </span>
        <h1 className="font-display font-black text-3xl text-[#F8F1E5]">
          Customer & B2B Inquiries ({enquiries.length})
        </h1>
      </div>

      <div className="space-y-4">
        {enquiries.map((enq) => (
          <div
            key={enq.id}
            className="p-6 rounded-3xl bg-[#402011] border border-[#D9A441]/30 space-y-3 shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9A441]/20 pb-3">
              <div>
                <h3 className="font-display font-bold text-lg text-[#F8F1E5]">
                  {enq.subject || 'Store Inquiry'}
                </h3>
                <span className="text-xs text-[#D9A441]">From: {enq.name}</span>
              </div>
              <span className="text-[11px] text-[#F8F1E5]/60 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
                {enq.date}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F8F1E5]/90 leading-relaxed font-light bg-[#281006] p-4 rounded-xl border border-[#D9A441]/20">
              "{enq.message}"
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#F8F1E5]/75 pt-1">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D9A441]" />
                <a href={`mailto:${enq.email}`} className="text-[#D9A441] hover:underline">
                  {enq.email}
                </a>
              </span>
              {enq.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>{enq.phone}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEnquiries;
