import { LayoutDashboard, Target, Calendar, Bot, Zap, Users, TrendingUp, Gamepad2, Link2, Building2, FileText, Menu, Settings } from 'lucide-react';
import customLogo from '../assets/syncscript-logo.png';

export function Sidebar() {
  return (
    <div className="w-[140px] bg-[#1e2128] border-r border-gray-800 flex flex-col items-center py-6 space-y-8 backdrop-blur-sm">
      {/* Logo */}
      <div className="mb-6 transition-transform hover:scale-110 cursor-pointer">
        <img src={customLogo} alt="SyncScript Logo" className="w-16 h-16 object-contain" />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col items-center space-y-6 flex-1">
        <div className="flex flex-col items-center gap-1 text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-all group-hover:shadow-lg group-hover:shadow-teal-600/50 group-hover:scale-110">
            <LayoutDashboard className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Dashboard</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Target className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Tasks</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Calendar</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Bot className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">AI</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Zap className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Energy</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Users className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Team</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <TrendingUp className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Analytics</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Gamepad2 className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Gaming</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Link2 className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Integrations</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Building2 className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs transition-colors">Enterprise</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs text-center leading-tight transition-colors">Scripts &<br />Templates</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
          <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
            <Menu className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs text-center leading-tight transition-colors">All Features<br />Menu</span>
        </div>
      </nav>

      {/* Settings at bottom */}
      <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-white cursor-pointer group transition-all">
        <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-all group-hover:scale-110">
          <Settings className="w-4 h-4 transition-transform group-hover:scale-110" />
        </div>
        <span className="text-xs transition-colors">Settings</span>
      </div>
    </div>
  );
}
