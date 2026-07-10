import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Shield, Code, Edit2, ChevronDown } from 'lucide-react';

const SettingsPage = ({ initialTab = 'profile' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'general', label: 'General Settings', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'api', label: 'API Management', icon: Code },
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#111827] tracking-tight mb-2">
          Account & Preferences
        </h1>
        <p className="text-sm font-medium text-[#6B7280]">
          Manage your personal information, AI goals, and security settings.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Inner Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    active 
                      ? 'bg-[#EFF6FF] text-[#2563EB]' 
                      : 'text-[#4B5563] hover:bg-white hover:text-[#111827]'
                  }`}
                >
                  <tab.icon size={18} className={active ? 'text-[#2563EB]' : 'text-[#6B7280]'} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8"
            >
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#F8FAFC] shadow-sm bg-[#E0E7FF] flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="Alex Rivera" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full flex items-center justify-center text-white shadow-md transition-colors cursor-pointer border-2 border-white">
                    <Edit2 size={14} />
                  </button>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-[#111827] mb-1">Alex Rivera</h2>
                  <p className="text-sm font-medium text-[#6B7280] mb-3">alex.rivera@enterprise-ai.com</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#EFF6FF] text-[#2563EB] text-[11px] font-bold rounded-full border border-[#BFDBFE]">
                      Verified User
                    </span>
                    <span className="px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[11px] font-bold rounded-full border border-[#DDD6FE]">
                      Enterprise Tier
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border-[#E5E7EB] mb-8" />

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#4B5563] mb-2 tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] text-[#111827] text-sm font-medium focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#4B5563] mb-2 tracking-wide">Current Role</label>
                    <input 
                      type="text" 
                      defaultValue="Senior Product Designer"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] text-[#111827] text-sm font-medium focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-2 tracking-wide">Target Role (AI Optimization Goal)</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] text-[#111827] text-sm font-medium appearance-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all cursor-pointer">
                      <option>Principal Product Designer</option>
                      <option>Lead UI/UX Engineer</option>
                      <option>Design Director</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="px-6 py-3 bg-[#0051C9] hover:bg-[#0042A5] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer">
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {activeTab !== 'profile' && (
            <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8 flex items-center justify-center h-64">
              <p className="text-[#6B7280] font-medium text-sm">
                This section is under construction.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
