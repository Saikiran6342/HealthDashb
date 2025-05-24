export const calendarDays = [
  // Week 1
  { day: 25, isCurrentMonth: false, hasAppointment: false },
  { day: 26, isCurrentMonth: false, hasAppointment: false },
  { day: 27, isCurrentMonth: false, hasAppointment: false },
  { day: 28, isCurrentMonth: false, hasAppointment: false },
  { day: 29, isCurrentMonth: false, hasAppointment: false },
  { day: 30, isCurrentMonth: false, hasAppointment: false },
  { day: 1, isCurrentMonth: true, hasAppointment: false },
  
  // Week 2
  { day: 2, isCurrentMonth: true, hasAppointment: false },
  { day: 3, isCurrentMonth: true, hasAppointment: false },
  { day: 4, isCurrentMonth: true, hasAppointment: false },
  { day: 5, isCurrentMonth: true, hasAppointment: false },
  { day: 6, isCurrentMonth: true, hasAppointment: false },
  { day: 7, isCurrentMonth: true, hasAppointment: false },
  { day: 8, isCurrentMonth: true, hasAppointment: false },
  
  // Week 3
  { day: 9, isCurrentMonth: true, hasAppointment: false },
  { day: 10, isCurrentMonth: true, hasAppointment: false },
  { day: 11, isCurrentMonth: true, hasAppointment: false },
  { day: 12, isCurrentMonth: true, hasAppointment: true },
  { day: 13, isCurrentMonth: true, hasAppointment: false },
  { day: 14, isCurrentMonth: true, hasAppointment: false },
  { day: 15, isCurrentMonth: true, hasAppointment: false },
  
  // Week 4
  { day: 16, isCurrentMonth: true, hasAppointment: false },
  { day: 17, isCurrentMonth: true, hasAppointment: false },
  { day: 18, isCurrentMonth: true, hasAppointment: false },
  { day: 19, isCurrentMonth: true, hasAppointment: false },
  { day: 20, isCurrentMonth: true, hasAppointment: true },
  { day: 21, isCurrentMonth: true, hasAppointment: true },
  { day: 22, isCurrentMonth: true, hasAppointment: false },
  
  // Week 5
  { day: 23, isCurrentMonth: true, hasAppointment: false },
  { day: 24, isCurrentMonth: true, hasAppointment: false },
  { day: 25, isCurrentMonth: true, hasAppointment: false },
  { day: 26, isCurrentMonth: true, hasAppointment: false },
  { day: 27, isCurrentMonth: true, hasAppointment: false },
  { day: 28, isCurrentMonth: true, hasAppointment: false },
  { day: 29, isCurrentMonth: true, hasAppointment: false },
  
  // Week 6
  { day: 30, isCurrentMonth: true, hasAppointment: false },
  { day: 31, isCurrentMonth: true, hasAppointment: false },
  { day: 1, isCurrentMonth: false, hasAppointment: false },
  { day: 2, isCurrentMonth: false, hasAppointment: false },
  { day: 3, isCurrentMonth: false, hasAppointment: false },
  { day: 4, isCurrentMonth: false, hasAppointment: false },
  { day: 5, isCurrentMonth: false, hasAppointment: false }
];

export const appointments = [
  {
    title: 'Dentist',
    doctor: 'Dr. Williams',
    date: 'Thu, Oct 12',
    time: '09:00 AM',
    type: 'dentist'
  },
  {
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Thompson',
    date: 'Sat, Oct 21',
    time: '11:00 AM',
    type: 'physio'
  }
];

export const upcomingAppointments = [
  {
    day: 'Thursday',
    title: 'Health checkup complete',
    time: '09:00 AM',
    status: 'green' as const,
    type: 'checkup' as const
  },
  {
    day: 'Thursday',
    title: 'Ophthalmologist',
    time: '11:00 AM',
    status: 'yellow' as const,
    type: 'eye' as const
  },
  {
    day: 'Saturday',
    title: 'Cardiologist',
    time: '01:00 PM',
    status: 'green' as const,
    type: 'heart' as const
  },
  {
    day: 'Saturday',
    title: 'Neurologist',
    time: '03:00 PM',
    status: 'red' as const,
    type: 'brain' as const
  }
];

export const activityData = [
  { name: 'Mon', percentage: 20 },
  { name: 'Tue', percentage: 40 },
  { name: 'Wed', percentage: 30 },
  { name: 'Thu', percentage: 70 },
  { name: 'Fri', percentage: 50 },
  { name: 'Sat', percentage: 90 },
  { name: 'Sun', percentage: 10 }
];
