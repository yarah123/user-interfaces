import React, { useState } from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import { Room, BookingDetails } from '../types';

interface BookingModalProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
  onBook: (details: BookingDetails) => void;
}

export function BookingModal({ room, isOpen, onClose, onBook }: BookingModalProps) {
  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  // Get current time in HH:mm format
  const now = new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit'
  });

  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    meetingTitle: '',
    space: room.name,
    date: today,
    time: now,
    duration: '30',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook(bookingDetails);
  };

  const formatDuration = (time: string, duration: string) => {
    const formattedTime = new Date(`2000/01/01 ${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    return `${formattedTime} (${duration} minutes)`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Book a Room</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              className="w-full border rounded-md p-2"
              value={bookingDetails.meetingTitle}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, meetingTitle: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Space
            </label>
            <input
              type="text"
              disabled
              className="w-full border rounded-md p-2 bg-gray-50"
              value={bookingDetails.space}
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 mr-2" />
              Date
            </label>
            <input
              type="date"
              required
              className="w-full border rounded-md p-2"
              value={bookingDetails.date}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, date: e.target.value })
              }
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Clock className="w-4 h-4 mr-2" />
              Duration
            </label>
            <div className="relative">
              <select
                className="w-full border rounded-md p-2 appearance-none bg-white pr-10"
                value={`${bookingDetails.time}|${bookingDetails.duration}`}
                onChange={(e) => {
                  const [time, duration] = e.target.value.split('|');
                  setBookingDetails({ ...bookingDetails, time, duration });
                }}
              >
                {['30', '60', '90', '120'].map(duration => (
                  <option 
                    key={`${bookingDetails.time}|${duration}`} 
                    value={`${bookingDetails.time}|${duration}`}
                  >
                    {formatDuration(bookingDetails.time, duration)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-[#212245] text-white rounded-md hover:bg-opacity-90"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}