import { useState } from 'react'
import { X } from 'lucide-react'
import './filter-modal.css'

export default function FilterModal({ isOpen, onClose, products, onFilter }) {
  const [priceRange, setPriceRange] = useState([0, 20000])

  const priceRanges = [
    { label: 'Under ₹2,000', min: 0, max: 2000 },
    { label: '₹2,000 - ₹5,000', min: 2000, max: 5000 },
    { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
    { label: '₹10,000+', min: 10000, max: 50000 },
  ]

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max])
    applyFilters([min, max])
  }

  const applyFilters = (price) => {
    const filtered = products.filter(p => {
      if (p.price < price[0] || p.price > price[1]) return false
      return true
    })
    onFilter(filtered)
  }

  const clearFilters = () => {
    setPriceRange([0, 20000])
    onFilter(products)
  }

  return (
    <>
      {isOpen && <div className="filter-modal-overlay" onClick={onClose} />}
      <motion.div className={`filter-modal ${isOpen ? 'open' : ''}`}>
        <div className="filter-modal-header">
          <h2>Filter</h2>
          <button onClick={onClose} className="filter-close">
            <X size={24} />
          </button>
        </div>

        <div className="filter-modal-content">
          {/* Price Filter */}
          <div className="filter-group">
            <h3>Price</h3>
            <div className="filter-options">
              {priceRanges.map((range, idx) => (
                <label key={idx} className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[0] === range.min && priceRange[1] === range.max}
                    onChange={() => handlePriceChange(range.min, range.max)}
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="filter-modal-footer">
          {(priceRange[0] > 0 || priceRange[1] < 20000) && (
            <button className="btn-secondary" onClick={clearFilters}>Clear Filters</button>
          )}
        </div>
      </motion.div>
    </>
  )
}

import { motion } from 'framer-motion'
