import React from 'react';
import { X, Search } from 'lucide-react';
import { FilterOptions } from '../types';

interface AdvancedFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function AdvancedFilters({
  isOpen,
  onClose,
  filters,
  onFilterChange,
}: AdvancedFiltersProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Select room size</h3>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="capacity"
                  className="form-radio h-4 w-4 text-[#212245] border-[#212245] focus:ring-[#212245]"
                  checked={filters.capacity === 2}
                  onChange={() => onFilterChange({ ...filters, capacity: 2 })}
                />
                <span className="ml-2 text-sm text-gray-700">Min. 2 people</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="capacity"
                  className="form-radio h-4 w-4 text-[#212245] border-[#212245] focus:ring-[#212245]"
                  checked={filters.capacity === 4}
                  onChange={() => onFilterChange({ ...filters, capacity: 4 })}
                />
                <span className="ml-2 text-sm text-gray-700">Min. 4 people</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="capacity"
                  className="form-radio h-4 w-4 text-[#212245] border-[#212245] focus:ring-[#212245]"
                  checked={filters.capacity === 10}
                  onChange={() => onFilterChange({ ...filters, capacity: 10 })}
                />
                <span className="ml-2 text-sm text-gray-700">Min. 10 people</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Level</h3>
            <select
              className="w-full border rounded-md p-2 text-sm"
              value={filters.location || ''}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  location: e.target.value || null,
                })
              }
            >
              <option value="">All levels</option>
              <option value="Area 2071">Area 2071</option>
              <option value="DFA">DFA</option>
               onChange={(e) =>
                  onFilterChange({ ...filters, showFavorites: e.target.checked })
                }
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-[#212245] border-[#212245] rounded focus:ring-[#212245]"
                checked={filters.showFavorites}
                onChange={(e) =>
                  onFilterChange({ ...filters, showFavorites: e.target.checked })
                }
              />
              <span className="text-sm text-gray-700">Favorites</span>
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#212245] text-white rounded-md hover:bg-opacity-90"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}