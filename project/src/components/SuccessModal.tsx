import React from 'react';
import { X } from 'lucide-react';
import { BookingDetails } from '../types';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: BookingDetails;
}

export function SuccessModal({
  isOpen,
  onClose,
  bookingDetails,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-center">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <img 
            src="/rooms/success-icon.png" 
            alt="Success" 
            className="w-24 h-24"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Room booked!</h2>

        <p className="text-gray-600 mb-6">
          Room booking for {bookingDetails.space} has been successfully booked for{' '}
          {bookingDetails.date} at {bookingDetails.time}. <br /> Please allow 5 minutes
          for your booking to be approved.
        </p>

        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-[#212245] text-white rounded-md hover:bg-opacity-90"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}