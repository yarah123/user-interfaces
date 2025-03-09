import React from 'react';
import { Heart, Users, MapPin } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onFavorite: (id: string) => void;
  onBook: (room: Room) => void;
}

export function RoomCard({ room, onFavorite, onBook }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.01]">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-64 h-48 flex-shrink-0">
          <img
            src={room.imageUrl}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-grow p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{room.name}</h3>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 text-sm sm:text-base">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Capacity: {room.capacity} people</span>
                </div>
                
                <div className="flex items-center text-gray-600 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{room.location}</span>
                </div>
              </div>

              <button
                onClick={() => onBook(room)}
                disabled={room.isBooked}
                className={`mt-4 py-2 px-4 sm:px-6 rounded-md transition-colors w-full sm:w-auto ${
                  room.isBooked
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-[#212245] text-white hover:bg-opacity-90'
                }`}
              >
                {room.isBooked ? 'Booked' : 'Book'}
              </button>
            </div>

            <div className="ml-4 flex-shrink-0">
              <button
                onClick={() => onFavorite(room.id)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <Heart
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    room.isFavorite ? 'fill-[#212245] stroke-[#212245]' : 'stroke-gray-400'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}