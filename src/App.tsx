import { useState, useEffect, useCallback, useMemo } from 'react';
import Layout from './components/Layout';
import InternalDocs from './pages/InternalDocs';
import ClientDocs from './pages/ClientDocs';
import { internalSections } from './data/internalSections';
import { clientSections } from './data/clientSections';
import type { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('internal');
  const [activeSection, setActiveSection] = useState<string>('int-overview');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sections = activeTab === 'internal' ? internalSections : clientSections;
  const accentColor = activeTab === 'internal' ? 'blue' as const : 'green' as const;

  const filteredSections = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return sections;
    }

    return sections
      .map((group) => {
        const groupMatch = group.group.toLowerCase().includes(query);
        const filteredItems = group.items.filter((item) =>
          item.label.toLowerCase().includes(query)
        );

        return {
          ...group,
          items: groupMatch ? group.items : filteredItems,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [searchQuery, sections]);

  // Reset scroll and active section on tab switch
  useEffect(() => {
    const defaultSection = activeTab === 'internal' ? 'int-overview' : 'cl-overview';
    setActiveSection(defaultSection);
    setSearchQuery('');
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSearchSubmit = useCallback(() => {
    const firstMatch = filteredSections[0]?.items[0];
    if (firstMatch) {
      handleNavClick(firstMatch.id);
    }
  }, [filteredSections, handleNavClick]);

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      activeSection={activeSection}
      sections={filteredSections}
      accentColor={accentColor}
      onNavClick={handleNavClick}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSearchSubmit={handleSearchSubmit}
    >
      {activeTab === 'internal' ? <InternalDocs /> : <ClientDocs />}
    </Layout>
  );
}
