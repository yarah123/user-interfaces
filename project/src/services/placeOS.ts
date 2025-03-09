import axios from 'axios';

const API_KEY = 'ef60424ff75cf24552ab5664c932e73b.CQkOSDedfAzx1fuwbLMXc6Jo56DJ0Kcj7QfdzToZQNo';
const BASE_URL = 'https://smartoffice.dubaifuture.ae/';
const ZONE_ID = 'zone-I9Ylr7NW4e';
const TYPE = 'conference';

const placeOSClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-Key': API_KEY,
    'Content-Type': 'application/json',
  },
});

export interface PlaceOSRoom {
  id: string;
  name: string;
  capacity: number;
  building: string;
  level: string;
  features: string[];
  bookable: boolean;
  image_url?: string;
}

export interface PlaceOSBooking {
  id: string;
  room_id: string;
  user_id: string;
  title: string;
  start_time: string;
  end_time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export const placeOSApi = {
  getRooms: async (): Promise<PlaceOSRoom[]> => {
    try {
      const now = new Date();
      const periodStart = now.toISOString();
      const periodEnd = new Date(now.setHours(now.getHours() + 24)).toISOString();

      const response = await placeOSClient.get('/api/staff/v1/place', {
        params: {
          zone_id: ZONE_ID,
          type: TYPE,
          period_start: periodStart,
          period_end: periodEnd
        }
      });

      if (!response.data || !Array.isArray(response.data.results)) {
        throw new Error('Invalid response format from PlaceOS API');
      }

      return response.data.results.map((room: any) => ({
        id: String(room.id || ''),
        name: String(room.display_name || room.name || ''),
        capacity: Number(room.capacity) || 0,
        building: String(room.building || ''),
        level: String(room.level || ''),
        features: Array.isArray(room.features) ? room.features.map(String) : [],
        bookable: Boolean(room.bookable !== false),
        image_url: room.image_url ? String(room.image_url) : undefined
      }));
    } catch (error) {
      console.error('PlaceOS API Error:', error);
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch rooms');
      }
      throw new Error('Failed to fetch rooms');
    }
  },

  getRoomAvailability: async (roomId: string, date: string): Promise<boolean> => {
    try {
      const response = await placeOSClient.get(`/api/staff/v1/systems/${roomId}/availability`, {
        params: { 
          zone_id: ZONE_ID,
          period_start: `${date}T00:00:00Z`,
          period_end: `${date}T23:59:59Z`
        }
      });
      return Boolean(response.data?.available);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to check room availability');
      }
      throw new Error('Failed to check room availability');
    }
  },

  createBooking: async (booking: Omit<PlaceOSBooking, 'id' | 'status'>): Promise<PlaceOSBooking> => {
    try {
      const response = await placeOSClient.post('/api/staff/v1/bookings', {
        ...booking,
        zone_id: ZONE_ID,
        system_id: String(booking.room_id),
        user_id: String(booking.user_id),
        title: String(booking.title),
        booking_start: String(booking.start_time),
        booking_end: String(booking.end_time)
      });
      return {
        id: String(response.data.id),
        room_id: String(response.data.system_id),
        user_id: String(response.data.user_id),
        title: String(response.data.title),
        start_time: String(response.data.booking_start),
        end_time: String(response.data.booking_end),
        status: response.data.status as PlaceOSBooking['status']
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to create booking');
      }
      throw new Error('Failed to create booking');
    }
  },

  cancelBooking: async (bookingId: string): Promise<void> => {
    try {
      await placeOSClient.delete(`/api/staff/v1/bookings/${bookingId}`, {
        params: {
          zone_id: ZONE_ID
        }
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to cancel booking');
      }
      throw new Error('Failed to cancel booking');
    }
  }
};