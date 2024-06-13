export interface Course {
    id: number;
    name: string;
    description: string;
    instructor: string;
    duration: number; 
    startDate: Date;
    endDate: Date;
    location: string;
    maxCapacity: number;
  }