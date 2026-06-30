// Placeholder imagery uses picsum seeds so the build is self-contained (no asset shipping).
const img = (seed) => `https://picsum.photos/seed/${seed}/800/1000`

export const CATEGORIES = [
  { slug: 'shirts', label: "Men", cover: 'https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { slug: 'dresses', label: "Sale", cover: img('outfit-dresses-hero') },
  { slug: 'women', label: "Women", cover: 'https://images.unsplash.com/photo-1756483510802-0acac24ab4e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { slug: 'Accesories', label: 'Accesories', cover: 'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
]

export const SHIRT_SUBCATEGORIES = {
  shirts: [
    { slug: 'executive-formal-shirts', label: 'Executive Formal Shirts', cover: 'https://images.unsplash.com/photo-1603251578711-07f1707ce338?w=600&auto=format&fit=crop&q=60' },
    { slug: 'smart-casual-shirts', label: 'Smart Casual Shirts', cover: 'https://images.unsplash.com/photo-1596631066410-fbf667266251?w=600&auto=format&fit=crop&q=60' },
    { slug: 'classic-check-shirts', label: 'Classic Check Shirts', cover: 'https://images.unsplash.com/photo-1598033129519-c90900bc9de1?w=600&auto=format&fit=crop&q=60' },
    { slug: 'premium-denim-shirts', label: 'Premium Denim Shirts', cover: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=60' },
    { slug: 'signature-printed-shirts', label: 'Signature Printed Shirts', cover: 'https://images.unsplash.com/photo-1606155692474-3055e5a15636?w=600&auto=format&fit=crop&q=60' },
    { slug: 'luxury-corduroy-shirts', label: 'Luxury Corduroy Shirts', cover: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f790?w=600&auto=format&fit=crop&q=60' },
    { slug: 'imported-premium-shirts', label: 'Imported Premium Shirts', cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60' },
    { slug: 'pure-linen-shirts', label: 'Pure Linen Shirts', cover: 'https://images.unsplash.com/photo-1602033473980-2b64b719a45b?w=600&auto=format&fit=crop&q=60' },
    { slug: 'party-wear-shirts', label: 'Party Wear Shirts', cover: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
    { slug: 'office-wear-shirts', label: 'Office Wear Shirts', cover: 'https://images.unsplash.com/photo-1596215565297-2af6e5e1eb3b?w=600&auto=format&fit=crop&q=60' },
  ],
  tshirts: [
    { slug: 'polo-half-sleeve', label: 'Polo T-Shirts (Half Sleeve)', cover: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=60' },
    { slug: 'polo-full-sleeve', label: 'Polo T-Shirts (Full Sleeve)', cover: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60' },
    { slug: 'oversized-drop-shoulder', label: 'Oversized Drop Shoulder T-Shirts', cover: 'https://images.unsplash.com/photo-1617638924702-92d37f439220?w=600&auto=format&fit=crop&q=60' },
    { slug: 'half-sleeve-tshirts', label: 'Half Sleeve T-Shirts', cover: 'https://images.unsplash.com/photo-1502716216588-48f0062cd553?w=600&auto=format&fit=crop&q=60' },
    { slug: 'full-sleeve-tshirts', label: 'Full Sleeve T-Shirts', cover: 'https://images.unsplash.com/photo-1503342394128-c894fdbb1d4e?w=600&auto=format&fit=crop&q=60' },
    { slug: 'graphic-printed-tshirts', label: 'Graphic Printed T-Shirts', cover: 'https://images.unsplash.com/photo-1614008375890-cb53b6c5f8d5?w=600&auto=format&fit=crop&q=60' },
    { slug: 'performance-dryfit', label: 'Performance Dry-Fit T-Shirts', cover: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60' },
  ]
}

export const PANTS_SUBCATEGORIES = {
  jeans: [
    { slug: 'balloon-fit-jeans', label: 'Balloon Fit Jeans', cover: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&auto=format&fit=crop&q=60' },
    { slug: 'baggy-fit-jeans', label: 'Baggy Fit Jeans', cover: 'https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=600&auto=format&fit=crop&q=60' },
    { slug: 'mom-fit-jeans', label: 'Mom Fit Jeans', cover: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&auto=format&fit=crop&q=60' },
    { slug: 'regular-fit-jeans', label: 'Regular Fit Jeans', cover: 'https://images.unsplash.com/photo-1582418702059-53c19a28292c?w=600&auto=format&fit=crop&q=60' },
    { slug: 'cargo-fit-jeans', label: 'Cargo Fit Jeans', cover: 'https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=600&auto=format&fit=crop&q=60' },
  ],
  pants: [
    { slug: 'linen-pants', label: 'Linen Pants', cover: 'https://images.unsplash.com/photo-1473966143519-71f63c5d26df?w=600&auto=format&fit=crop&q=60' },
    { slug: 'imported-premium-pants', label: 'Imported Premium Pants', cover: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
    { slug: 'korean-fit-pants', label: 'Korean Fit Pants', cover: 'https://images.unsplash.com/photo-1473966143519-71f63c5d26df?w=600&auto=format&fit=crop&q=60' },
    { slug: 'cotton-pants', label: 'Cotton Pants', cover: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&auto=format&fit=crop&q=60' },
    { slug: 'cargo-pants', label: 'Cargo Pants', cover: 'https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=600&auto=format&fit=crop&q=60' },
  ],
  trousers: [
    { slug: 'formal-trousers', label: 'Formal Trousers', cover: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
    { slug: 'gurkha-trousers', label: 'Gurkha Trousers', cover: 'https://images.unsplash.com/photo-1473966143519-71f63c5d26df?w=600&auto=format&fit=crop&q=60' },
  ],
  shorts: [
    { slug: 'cotton-shorts', label: 'Cotton Shorts', cover: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=60' },
    { slug: 'denim-shorts', label: 'Denim Shorts', cover: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&auto=format&fit=crop&q=60' },
    { slug: 'performance-dryfit-shorts', label: 'Performance Dry-Fit Shorts', cover: 'https://images.unsplash.com/photo-1614008375890-cb53b6c5f8d5?w=600&auto=format&fit=crop&q=60' },
  ]
}

export const ACCESSORIES_SUBCATEGORIES = {
  watches: [
    { slug: 'analog-watches', label: 'Analog Watches', cover: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60' },
    { slug: 'digital-watches', label: 'Digital Watches', cover: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60' },
    { slug: 'smart-watches', label: 'Smart Watches', cover: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60' },
    { slug: 'luxury-watches', label: 'Luxury Watches', cover: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60' },
  ],
  chains: [
    { slug: 'gold-chains', label: 'Gold Chains', cover: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop&q=60' },
    { slug: 'silver-chains', label: 'Silver Chains', cover: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop&q=60' },
    { slug: 'pendant-chains', label: 'Pendant Chains', cover: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop&q=60' },
    { slug: 'stainless-steel-chains', label: 'Stainless Steel Chains', cover: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop&q=60' },
  ]
}

const mk = (id, name, brand, category, price, original, rating, colors, sizes, collection, gender = 'unisex') => ({
  id, name, brand, category, price, original, rating, gender,
  reviews: 20 + (id * 7) % 180,
  discount: original ? Math.round((1 - price / original) * 100) : 0,
  colors, sizes, collection,
  image: img('outfit-' + id), gallery: [img('outfit-'+id), img('outfit-'+id+'-b'), img('outfit-'+id+'-c'), img('outfit-'+id+'-d')],
  stock: 3 + (id * 5) % 40,
  description: `Crafted from premium materials with a refined silhouette, the ${name} balances modern minimalism with everyday versatility.`,
  specs: [['Material','Premium cotton blend'],['Fit','Regular'],['Origin','Imported'],['SKU','OUT-'+String(id).padStart(4,'0')]],
  care: ['Machine wash cold','Do not bleach','Iron low heat','Dry flat'],
})

const C = ['Black','White','Beige','Navy','Olive']
const Sapp = ['S','M','L','XL']
const Sshoe = ['7','8','9','10','11']

const shirtsImg = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F9025c0174a6544bc99736c677ca2d55e?format=webp&width=800&height=1200'
const dressImg1 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F7342b4aff6f1468781395187b1a8156d?format=webp&width=800&height=1200'
const dressImg2 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F922c9fe6402a4cc3b0695d0f6df3fc34?format=webp&width=800&height=1200'
const watchImg1 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F8399294c79214c6bad3f0c0f16e6d801?format=webp&width=800&height=1200'
const watchImg2 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fa8d981edf0224f6faf7e69cb8fe49e9c?format=webp&width=800&height=1200'
const watchImg3 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fd29e88bb2c264386a5fefd0932385e72?format=webp&width=800&height=1200'
const shoeImg1 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fffd3ab09a2d545bbb961ba9e5f854920?format=webp&width=800&height=1200'
const shoeImg2 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2Fbaf524073afd4ff58f2a2760bbdde679?format=webp&width=800&height=1200'
const shoeImg3 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F90557b2b573f473e8f04514cb815763f?format=webp&width=800&height=1200'
const pantsImg1 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F13d3b6ff527947a397b4b03a3790e6ed?format=webp&width=800&height=1200'
const pantsImg2 = 'https://cdn.builder.io/api/v1/image/assets%2Fd804a884d1294eac9363b52e819be07b%2F20f56da543f24224bc0660e47ecd1f77?format=webp&width=800&height=1200'

export const PRODUCTS = [
  {...mk(1, 'Classic Leather Oxford', 'OUTFIT', 'shoes', 4500, 6000, 4.8, ['Black', 'Brown'], Sshoe, 'Formal', 'men'), image: shoeImg1, gallery: [shoeImg1, shoeImg1, shoeImg1, shoeImg1]},
  {...mk(2, 'Premium Running Sneaker', 'OUTFIT', 'shoes', 3800, 5500, 4.7, ['White', 'Navy', 'Black'], Sshoe, 'Sports', 'men'), image: shoeImg2, gallery: [shoeImg2, shoeImg2, shoeImg2, shoeImg2]},
  {...mk(3, 'Casual Canvas Low-Top', 'OUTFIT', 'shoes', 2200, 3500, 4.6, ['Beige', 'White', 'Olive'], Sshoe, 'Casual', 'women'), image: shoeImg3, gallery: [shoeImg3, shoeImg3, shoeImg3, shoeImg3]},
  {...mk(4, 'Elegant Analog Watch', 'OUTFIT', 'Accesories', 8999, 12000, 4.9, ['Black', 'Silver'], ['One Size'], 'Luxury', 'men'), image: watchImg1, gallery: [watchImg1, watchImg1, watchImg1, watchImg1]},
  {...mk(5, 'Minimalist Steel Watch', 'OUTFIT', 'Accesories', 5499, 8000, 4.8, ['Silver'], ['One Size'], 'Modern', 'women'), image: watchImg2, gallery: [watchImg2, watchImg2, watchImg2, watchImg2]},
  {...mk(6, 'Classic Leather Watch', 'OUTFIT', 'Accesories', 3999, 6500, 4.7, ['Brown', 'Black'], ['One Size'], 'Classic', 'unisex'), image: watchImg3, gallery: [watchImg3, watchImg3, watchImg3, watchImg3]},
]

export const byCategory = (slug) => {
  const category = slug === 'women-dresses' ? 'dresses' : slug
  return PRODUCTS.filter(p => p.category === category)
}
export const byCollection = (name) => PRODUCTS.filter(p => p.collection === name)
export const getProduct = (id) => PRODUCTS.find(p => p.id === Number(id))
export const related = (p) => PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4)

export const REVIEWS = [
  { name:'Aarav Mehta', photo:'https://i.pravatar.cc/120?img=11', rating:5, text:'The fabric quality is exceptional. Easily the most refined shirt I own.' },
  { name:'Sofia Rossi', photo:'https://i.pravatar.cc/120?img=32', rating:5, text:'Beautiful packaging and the dress fits like it was tailored for me.' },
  { name:'Liam Carter', photo:'https://i.pravatar.cc/120?img=15', rating:4, text:'Premium feel throughout. Fast delivery and easy returns.' },
  { name:'Maya Singh', photo:'https://i.pravatar.cc/120?img=45', rating:5, text:'OUTFIT has become my go-to for minimalist luxury basics.' },
]

export const GALLERY = Array.from({length:6}, (_,i)=>`https://picsum.photos/seed/outfit-gram-${i}/500/500`)
