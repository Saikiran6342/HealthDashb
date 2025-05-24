import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <AnatomySection />
          <CalendarView />
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
