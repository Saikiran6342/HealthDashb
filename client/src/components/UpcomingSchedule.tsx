import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments } from '@/data/appointments';

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    const { day } = appointment;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(appointment);
    return acc;
  }, {} as Record<string, typeof upcomingAppointments>);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        {Object.entries(appointmentsByDay).map(([day, dayAppointments]) => (
          <div key={day}>
            <h3 className="text-sm font-medium text-neutral-dark mb-3">On {day}</h3>
            <div className="space-y-3">
              {dayAppointments.map((appointment, index) => (
                <SimpleAppointmentCard key={index} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
