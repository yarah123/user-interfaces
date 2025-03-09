import React, { useState, useMemo, useEffect } from 'react';
import { Room, FilterOptions, BookingDetails } from './types';
import { RoomCard } from './components/RoomCard';
import { Filters } from './components/Filters';
import { AdvancedFilters } from './components/AdvancedFilters';
import { BookingModal } from './components/BookingModal';
import { SuccessModal } from './components/SuccessModal';
import { Search } from 'lucide-react';
import { placeOSApi, PlaceOSRoom } from './services/placeOS';

function App() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    capacity: null,
    type: null,
    date: new Date().toISOString().split('T')[0],
    time: null,
    showFavorites: false,
    searchQuery: '',
    location: null
  });
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [lastBookingDetails, setLastBookingDetails] = useState<BookingDetails | null>(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const placeOSRooms = await placeOSApi.getRooms();
      const transformedRooms = placeOSRooms.map((room: PlaceOSRoom): Room => ({
        id: room.id,
        name: room.name,
        imageUrl: room.image_url || '/rooms/default-room.jpg',
        capacity: room.capacity,
        location: `${room.building} - ${room.level}`,
        type: 'meeting',
        isFavorite: false,
        isBooked: !room.bookable,
        bookings: []
      }));
      setRooms(transformedRooms);
    } catch (err) {
      setError('Failed to fetch rooms. Please try again later.');
      console.error('Error fetching rooms:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = (id: string) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, isFavorite: !room.isFavorite } : room
      )
    );
  };

  const handleBookingClick = async (room: Room) => {
    try {
      const isAvailable = await placeOSApi.getRoomAvailability(room.id, filters.date || '');
      if (isAvailable) {
        setSelectedRoom(room);
        setIsBookingModalOpen(true);
      } else {
        setError('This room is not available for the selected time.');
      }
    } catch (err) {
      setError('Failed to check room availability. Please try again.');
      console.error('Error checking room availability:', err);
    }
  };

  const handleBookingSubmit = async (details: BookingDetails) => {
    try {
      const booking = await placeOSApi.createBooking({
        room_id: selectedRoom!.id,
        user_id: 'current_user_id', // Replace with actual user ID
        title: details.meetingTitle,
        start_time: `${details.date}T${details.time}`,
        end_time: `${details.date}T${details.time}`, // Add duration to end time
      });

      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.id === selectedRoom?.id
            ? {
                ...room,
                bookings: [...room.bookings, details],
                isBooked: true
              }
            : room
        )
      );

      setLastBookingDetails(details);
      setIsBookingModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      console.error('Error creating booking:', err);
    }
  };

  const filteredRooms = useMemo(() => {
    return rooms
      .filter((room) => {
        if (filters.showFavorites && !room.isFavorite) return false;
        if (
          filters.searchQuery &&
          !room.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
        )
          return false;
        if (filters.capacity && room.capacity < filters.capacity) return false;
        if (filters.type && room.type !== filters.type) return false;
        if (filters.location && room.location !== filters.location) return false;
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [rooms, filters]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#212245]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
        <div className="flex justify-center mb-4">
          <img 
            src="/rooms/DFF_Logo_Light.jpeg" 
            alt="Dubai Future Foundation"
            className="h-8 sm:h-12"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-left text-gray-900 mb-6 sm:mb-8">Room Booking</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
            <button 
              onClick={() => setError(null)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search rooms..."
              className="w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              value={filters.searchQuery}
              onChange={(e) =>
                setFilters({ ...filters, searchQuery: e.target.value })
              }
            />
          </div>
        </div>
        
        <div className="mb-6 sm:mb-8">
          <Filters
            filters={filters}
            onFilterChange={setFilters}
            onOpenAdvancedFilters={() => setIsAdvancedFiltersOpen(true)}
          />
        </div>

        <div className="space-y-4">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onFavorite={handleFavorite}
              onBook={handleBookingClick}
            />
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-base sm:text-lg">
              No rooms found matching your criteria
            </p>
          </div>
        )}

        <AdvancedFilters
          isOpen={isAdvancedFiltersOpen}
          onClose={() => setIsAdvancedFiltersOpen(false)}
          filters={filters}
          onFilterChange={setFilters}
        />

        {selectedRoom && (
          <BookingModal
            room={selectedRoom}
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
            onBook={handleBookingSubmit}
          />
        )}

        {lastBookingDetails && (
          <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={() => {
              setIsSuccessModalOpen(false);
              setLastBookingDetails(null);
            }}
            bookingDetails={lastBookingDetails}
          />
        )}
      </div>
    </div>
  );
}

export default App;