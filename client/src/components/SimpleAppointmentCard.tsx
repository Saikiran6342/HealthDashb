import React from 'react';
import { Stethoscope, Eye, Heart, Brain } from 'lucide-react';

interface AppointmentProps {
  appointment: {
    title: string;
    time: string;
    status: 'green' | 'yellow' | 'red';
    type: 'checkup' | 'eye' | 'heart' | 'brain';
  };
}

const SimpleAppointmentCard: React.FC<AppointmentProps> = ({ appointment }) => {
  const getIcon = () => {
    switch (appointment.type) {
      case 'checkup':
        return <Stethoscope className="text-primary h-4 w-4" />;
      case 'eye':
        return <Eye className="text-primary h-4 w-4" />;
      case 'heart':
        return <Heart className="text-primary h-4 w-4" />;
      case 'brain':
        return <Brain className="text-primary h-4 w-4" />;
      default:
        return <Stethoscope className="text-primary h-4 w-4" />;
    }
  };

  const getStatusColor = () => {
    switch (appointment.status) {
      case 'green':
        return 'bg-accent-green';
      case 'yellow':
        return 'bg-accent-yellow';
      case 'red':
        return 'bg-accent-red';
      default:
        return 'bg-accent-green';
    }
  };

  return (
    <div className="flex items-center p-3 bg-neutral-light rounded-lg">
      <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
        {getIcon()}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{appointment.title}</h4>
        <p className="text-xs text-neutral-dark">{appointment.time}</p>
      </div>
      <div className={`w-2 h-2 ${getStatusColor()} rounded-full`}></div>
    </div>
  );
};

export default SimpleAppointmentCard;
