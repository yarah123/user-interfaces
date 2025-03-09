import React from 'react';
import { Calendar, Clock, SlidersHorizontal } from 'lucide-react';
import { FilterOptions } from '../types';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onOpenAdvancedFilters: () => void;
}

export function Filters({ filters, onFilterChange, onOpenAdvancedFilters }: FiltersProps) {
  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Format time to 12-hour format
  const formatTime = (time: string | null) => {
    if (!time) return '';
    const date = new Date(`2000/01/01 ${time}`);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            Date
          </label>
          <input
            type="date"
            className="w-full border rounded-md p-2 text-sm"
            value={filters.date || today}
            min={today}
            onChange={(e) =>
              onFilterChange({ ...filters, date: e.target.value || today })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Clock className="w-4 h-4 mr-2" />
            Time
          </label>
          <input
            type="time"
            className="w-full border rounded-md p-2 text-sm"
            value={filters.time || ''}
            onChange={(e) => {
              const timeValue = e.target.value;
              onFilterChange({ ...filters, time: timeValue });
            }}
          />
          {filters.time && (
            <div className="text-sm text-gray-600">
              {formatTime(filters.time)}
            </div>
          )}
        </div>

        <button
          onClick={onOpenAdvancedFilters}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm w-full"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
        </button>
      </div>
    </div>
  );
}