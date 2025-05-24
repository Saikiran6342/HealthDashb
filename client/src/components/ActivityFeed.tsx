import React from 'react';
import { activityData } from '@/data/appointments';

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Activity</h2>
        <p className="text-xs text-primary font-medium">3 appointments on this week</p>
      </div>
      
      <div className="flex items-end justify-between h-32 px-2">
        {activityData.map((day, index) => (
          <div key={index} className="relative activity-bar">
            <div 
              className="activity-bar-fill" 
              style={{ height: `${day.percentage}%` }}
            ></div>
            <p className="text-xs text-center mt-2">{day.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
