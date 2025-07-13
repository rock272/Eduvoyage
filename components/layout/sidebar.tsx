'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useAuth } from '@/contexts/auth-context';
import {
  Home,
  Brain,
  Briefcase,
  Award,
  Video,
  User,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  BookOpen,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const { signOut } = useAuth();

  const navigation = [
    { name: t('dashboard'), href: '/dashboard', icon: Home },
    { name: 'AI Assistant', href: '/chat', icon: MessageCircle },
    { name: t('quiz'), href: '/quiz', icon: Brain },
    { name: t('careers'), href: '/careers', icon: Briefcase },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Certifications', href: '/certifications', icon: Award },
    { name: 'Webinars', href: '/webinars', icon: Video },
    { name: 'Mentors', href: '/mentors', icon: Users },
    { name: t('profile'), href: '/profile', icon: User },
    { name: t('parents'), href: '/parents', icon: Users },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden z-20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-30 flex flex-col bg-white border-r border-gray-200 transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <h1 className="text-xl font-bold text-blue-600">EduVoyage</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-1.5"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100',
                  collapsed && 'justify-center'
                )}
                onClick={() => setOpen(false)}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <Link
            href="/settings"
            className={cn(
              'flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors',
              collapsed && 'justify-center'
            )}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span className="ml-3">{t('settings')}</span>}
          </Link>
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start text-gray-700 hover:bg-gray-100',
              collapsed && 'justify-center'
            )}
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span className="ml-3">Sign Out</span>}
          </Button>
        </div>
      </div>
    </>
  );
}