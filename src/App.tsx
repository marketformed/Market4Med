/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MissionPillars from './components/MissionPillars';
import ProgramsSection from './components/ProgramsSection';
import EventsSection from './components/EventsSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import ResourcesSection from './components/ResourcesSection';
import ChaptersSection from './components/ChaptersSection';
import PartnersSection from './components/PartnersSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import HomeOverview from './components/HomeOverview';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Modals from './components/Modals';
import BrandKitModal from './components/BrandKitModal';
import BackupDuplicateModal from './components/BackupDuplicateModal';
import SiteModeBanner from './components/SiteModeBanner';
import AdminAuthModal from './components/AdminAuthModal';
import { Program, EventItem, Opportunity, ResourceItem, PageTab } from './types';
import { CHAPTER_APPLICATION_FORM_URL } from './data/links';

export default function App() {
  // Navigation Page Tab state
  const [currentTab, setCurrentTab] = useState<PageTab>('home');

  // Website Mode: 'current' (100% accurate founding state) vs 'vision' (future expansion preview)
  const [siteMode, setSiteMode] = useState<'current' | 'vision'>('current');

  // Founder / Admin Authentication (Restricts vision roadmap and site controls)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('market4med_admin_auth') === 'true';
    }
    return false;
  });
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);

  // Admin banner visibility (only visible if admin is authenticated)
  const [showAdminBanner, setShowAdminBanner] = useState<boolean>(false);

  // Check URL query on mount: if ?admin=true or ?mode=vision, check authentication
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const wantsAdmin = params.get('admin') === 'true' || params.get('mode') === 'vision';
      if (wantsAdmin) {
        if (!isAdminAuthenticated) {
          setAuthModalOpen(true);
        } else {
          setShowAdminBanner(true);
          if (params.get('mode') === 'vision') setSiteMode('vision');
        }
      }
    }
  }, [isAdminAuthenticated]);

  const handleHideBanner = () => {
    setShowAdminBanner(false);
  };

  const handleToggleBanner = () => {
    if (!isAdminAuthenticated) {
      setAuthModalOpen(true);
    } else {
      setShowAdminBanner((prev) => !prev);
    }
  };

  const handleLockAdmin = () => {
    setIsAdminAuthenticated(false);
    setShowAdminBanner(false);
    setSiteMode('current');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('market4med_admin_auth');
      const url = new URL(window.location.href);
      url.searchParams.delete('admin');
      url.searchParams.delete('mode');
      window.history.replaceState({}, '', url.pathname);
    }
  };

  const handleAuthSuccess = () => {
    setIsAdminAuthenticated(true);
    setShowAdminBanner(true);
  };

  // Keyboard shortcut: Ctrl+Shift+V or Cmd+Shift+V to toggle Vision & Admin mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        if (!isAdminAuthenticated) {
          setAuthModalOpen(true);
        } else {
          setShowAdminBanner((prev) => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdminAuthenticated]);

  const handleToggleSiteMode = (mode: 'current' | 'vision') => {
    setSiteMode(mode);
    // If switching to current mode while on a hidden tab, redirect to home
    if (mode === 'current') {
      const allowedInCurrent: PageTab[] = ['home', 'about', 'opportunities', 'chapters', 'contact'];
      if (!allowedInCurrent.includes(currentTab)) {
        setCurrentTab('home');
      }
    }
  };

  // If in current mode and user is on a future tab (programs/events/resources/partners), redirect to home
  useEffect(() => {
    if (siteMode === 'current') {
      const allowedInCurrent: PageTab[] = ['home', 'about', 'opportunities', 'chapters', 'contact'];
      if (!allowedInCurrent.includes(currentTab)) {
        setCurrentTab('home');
      }
    }
  }, [siteMode, currentTab]);

  // Modal states
  const [activeModal, setActiveModal] = useState<'rsvp' | 'syllabus' | 'apply' | 'chapter' | 'resource' | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('General Inquiry');
  const [brandKitOpen, setBrandKitOpen] = useState<boolean>(false);
  const [duplicateModalOpen, setDuplicateModalOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRSVP = (event: EventItem) => {
    setSelectedEvent(event);
    setActiveModal('rsvp');
  };

  const handleOpenSyllabus = (program: Program) => {
    setSelectedProgram(program);
    setActiveModal('syllabus');
  };

  const handleOpenApply = (opportunity?: Opportunity) => {
    if (opportunity) {
      setSelectedOpportunity(opportunity);
    } else {
      setSelectedOpportunity(null);
    }
    setActiveModal('apply');
  };

  const handleOpenChapterModal = () => {
    const url =
      typeof window !== 'undefined'
        ? localStorage.getItem('market4med_chapter_form_url') || CHAPTER_APPLICATION_FORM_URL
        : CHAPTER_APPLICATION_FORM_URL;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenResource = (resource: ResourceItem) => {
    setSelectedResource(resource);
    setActiveModal('resource');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSelectedEvent(null);
    setSelectedProgram(null);
    setSelectedOpportunity(null);
    setSelectedResource(null);
  };

  const handlePartnerInquiry = () => {
    setContactSubject('Sponsorship / Partnership');
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleContact = (roleType: string) => {
    setContactSubject(roleType);
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="market4med-app" className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#FF66C4] selection:text-white">
      {/* Top Admin & Mode Control Banner (Can be hidden completely for public domain visitors) */}
      {showAdminBanner && (
        <SiteModeBanner
          siteMode={siteMode}
          onToggleSiteMode={handleToggleSiteMode}
          onOpenDuplicateModal={() => setDuplicateModalOpen(true)}
          onHideBanner={handleHideBanner}
          onLockAdmin={handleLockAdmin}
        />
      )}

      {/* Navigation */}
      <Navbar
        siteMode={siteMode}
        activeTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenChapterModal={handleOpenChapterModal}
        onOpenApplyModal={() => handleOpenApply()}
        onOpenBrandKitModal={() => setBrandKitOpen(true)}
      />

      {/* Main Tabbed Page View */}
      <main className="flex-1">
        {/* Tab 1: HOME */}
        {currentTab === 'home' && (
          <div>
            <Hero
              siteMode={siteMode}
              onExplorePrograms={() => handleSelectTab('programs')}
              onExploreAbout={() => handleSelectTab('about')}
              onOpenChapterModal={handleOpenChapterModal}
              onOpenApplyModal={() => handleOpenApply()}
            />
            {/* Curated, engaging discovery hub guiding visitors across the site without duplicating full pages */}
            <HomeOverview
              onNavigateTab={handleSelectTab}
              onOpenChapterModal={handleOpenChapterModal}
            />
          </div>
        )}

        {/* Tab 2: ABOUT & MISSION */}
        {currentTab === 'about' && (
          <div>
            <AboutSection />
            <MissionPillars />
          </div>
        )}

        {/* Tab 5: OPPORTUNITIES & LEADERSHIP PATHWAYS */}
        {currentTab === 'opportunities' && (
          <div>
            <OpportunitiesSection
              siteMode={siteMode}
              onApply={(opp) => handleOpenApply(opp)}
            />
          </div>
        )}

        {/* Tab 7: CHAPTERS */}
        {currentTab === 'chapters' && (
          <ChaptersSection onOpenChapterModal={handleOpenChapterModal} />
        )}

        {/* Tab 9: CONTACT */}
        {currentTab === 'contact' && (
          <ContactSection defaultSubject={contactSubject} />
        )}

        {/* FUTURE / VISION TABS (Rendered only when siteMode === 'vision') */}
        {siteMode === 'vision' && (
          <>
            {/* Tab 3: PROGRAMS & WORKSHOPS */}
            {currentTab === 'programs' && (
              <ProgramsSection
                onSelectProgram={handleOpenSyllabus}
                onApply={() => handleOpenApply()}
              />
            )}

            {/* Tab 4: EVENTS */}
            {currentTab === 'events' && (
              <EventsSection
                siteMode={siteMode}
                onRSVP={handleOpenRSVP}
              />
            )}

            {/* Tab 6: RESOURCES */}
            {currentTab === 'resources' && (
              <ResourcesSection onReadResource={handleOpenResource} />
            )}

            {/* Tab 8: PARTNERS & COLLABORATIONS */}
            {currentTab === 'collaborations' && (
              <PartnersSection onPartnerInquiry={handlePartnerInquiry} />
            )}
          </>
        )}
      </main>

      {/* Footer with page tab switcher and duplication access */}
      <Footer
        siteMode={siteMode}
        activeTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBrandKitModal={() => setBrandKitOpen(true)}
        onOpenDuplicateModal={() => setDuplicateModalOpen(true)}
        onToggleAdmin={handleToggleBanner}
      />

      {/* Interactive Unified Modals */}
      <Modals
        activeModal={activeModal}
        onClose={handleCloseModal}
        selectedEvent={selectedEvent}
        selectedProgram={selectedProgram}
        selectedOpportunity={selectedOpportunity}
        selectedResource={selectedResource}
      />

      {/* Brand Identity & Asset Guidelines Modal */}
      <BrandKitModal
        isOpen={brandKitOpen}
        onClose={() => setBrandKitOpen(false)}
      />

      {/* Website Duplicate & Backup Modal */}
      <BackupDuplicateModal
        isOpen={duplicateModalOpen}
        onClose={() => setDuplicateModalOpen(false)}
        siteMode={siteMode}
        onToggleSiteMode={handleToggleSiteMode}
      />
      {/* Founder & Admin Passcode Verification Modal */}
      <AdminAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
