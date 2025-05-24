import React from 'react';
import { ChevronLeft, ChevronRight, Torus, HeartPulse } from 'lucide-react';
import { calendarDays, appointments } from '@/data/appointments';

const CalendarView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">October 2023</h2>
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-light">
            <ChevronLeft className="text-neutral-dark text-xs w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-light">
            <ChevronRight className="text-neutral-dark text-xs w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-6">
        {/* Days of the week */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className="text-center text-xs text-neutral-dark font-medium">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {calendarDays.map((day, index) => (
          <div 
            key={index} 
            className={`calendar-cell text-center py-2 text-sm ${day.isCurrentMonth ? '' : 'text-neutral-dark'} ${day.hasAppointment ? 'has-appointment' : ''}`}
          >
            {day.day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {appointments.map((appointment, index) => (
          <div key={index} className="bg-neutral-light p-4 rounded-lg">
            <div className="flex items-start">
              <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                {appointment.type === 'dentist' ? (
                  <Torus className="text-primary h-4 w-4" />
                ) : (
                  <HeartPulse className="text-primary h-4 w-4" />
                )}
              </div>
              <div>
                <h3 className="font-medium">{appointment.title}</h3>
                <p className="text-xs text-neutral-dark">{appointment.doctor}</p>
                <p className="text-xs mt-2">{appointment.date} • {appointment.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
