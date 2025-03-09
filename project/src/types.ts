export interface Room {
  id: string;
  name: string;
  imageUrl: string;
  capacity: number;
  location: string;
  type: 'conference' | 'meeting' | 'office' | 'event';
  isFavorite: boolean;
  isBooked: boolean;
  bookings: BookingDetails[];
}

export interface FilterOptions {
  capacity: number | null;
  type: string | null;
  date: string | null;
  time: string | null;
  showFavorites: boolean;
  searchQuery: string;
  location?: string | null;
}

export interface BookingDetails {
  meetingTitle: string;
  space: string;
  date: string;
  time: string;
  duration: string;
}