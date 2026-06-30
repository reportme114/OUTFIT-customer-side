import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CATEGORIES, byCategory, SHIRT_SUBCATEGORIES } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import './category.css'

const MEN_SUBCATEGORIES = [
  {
    label: 'Casual wears',
    slug: 'mens-casual',
    image: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?w=600&auto=format&fit=crop&q=60'
  },
  {
    label: 'Formals wears',
    slug: 'mens-formals',
    image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=670&auto=format&fit=crop'
  },
  {
    label: 'Party wears',
    slug: 'mens-party',
    image: 'https://images.unsplash.com/photo-1741709846033-67a45021fcb2?w=600&auto=format&fit=crop&q=60'
  },
  {
    label: 'Street wears',
    slug: 'mens-street',
    image: 'https://images.unsplash.com/photo-1587715362716-f55bde292cd7?w=600&auto=format&fit=crop&q=60'
  },
  {
    label: 'Traditional wears',
    slug: 'mens-traditional',
    image: 'https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?w=600&auto=format&fit=crop&q=60'
  },
]

const WOMEN_SUBCATEGORIES = [
  {
    label: 'Tops, jeans',
    slug: 'womens-tops',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1974&auto=format&fit=crop'
  },
  {
    label: 'Kurta and kurta sets',
    slug: 'womens-kurta',
    image: 'https://images.unsplash.com/photo-1604436607823-d721dfe2df46?w=600&auto=format&fit=crop&q=60'
  },
  {
    label: 'Dresses and jumpsuits',
    slug: 'womens-dresses',
    image: 'https://images.unsplash.com/photo-1651047454187-a7a066e5ad8d?w=600&auto=format&fit=crop&q=60'
  },
  {
    label: 'Party wears',
    slug: 'womens-party',
    image: 'https://images.unsplash.com/photo-1604384294297-7362af7ea2d9?w=600&auto=format&fit=crop&q=60'
  },
  {
    label: 'Active wear',
    slug: 'womens-active',
    image: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&auto=format&fit=crop&q=60'
  },
]

const ACCESSORIES_SUBCATEGORIES = [
  {
    label: 'Watches',
    slug: 'accessories-watches',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60'
  },
  {
    label: 'Chains',
    slug: 'accessories-chains',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop&q=60'
  },
]

export default function Category() {
  const { slug } = useParams()

  const meta = CATEGORIES.find(c => c.slug === slug)
  const products = byCategory(slug)

  const showMenSubcategories = slug === 'shirts'
  const showWomenSubcategories = slug === 'women-dresses'
  const showAccessoriesSubcategories = slug === 'accessories'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <div className="cat-hero">
        <div className="container">
          <nav className="crumbs">
            <Link to="/">Home</Link> / <span>{meta?.label || slug}</span>
          </nav>

          <h1>{meta?.label || 'Products'}</h1>
        </div>
      </div>

      {slug === 'shirts' && (
        <div className="cat-subcategories">
          <div className="container">
            <div className="subcategory-section">
              <h2 className="section-title">Shirts</h2>
              <div className="subcategory-grid">
                {SHIRT_SUBCATEGORIES.shirts.map(sub => (
                  <Link key={sub.slug} to={`/products/shirts/${sub.slug}`} className="subcategory-card">
                    <img src={sub.cover} alt={sub.label} className="subcategory-image" />
                    <h3 className="subcategory-label">{sub.label}</h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="subcategory-section">
              <h2 className="section-title">T-Shirts</h2>
              <div className="subcategory-grid">
                {SHIRT_SUBCATEGORIES.tshirts.map(sub => (
                  <Link key={sub.slug} to={`/products/shirts/${sub.slug}`} className="subcategory-card">
                    <img src={sub.cover} alt={sub.label} className="subcategory-image" />
                    <h3 className="subcategory-label">{sub.label}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {products.length > 0 && slug !== 'shirts' && (
        <div className="cat-products">
          <div className="container">
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
