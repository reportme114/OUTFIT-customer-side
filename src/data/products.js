// Placeholder imagery uses picsum seeds so the build is self-contained (no asset shipping).
const img = (seed) => `https://picsum.photos/seed/${seed}/800/1000`

export const CATEGORIES = [
  { slug: 'shirts', label: "Men's Shirts", cover: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop' },
  { slug: 'pants', label: "Men's Pants", cover: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=1000&fit=crop' },
  { slug: 'dresses', label: "Women's Dresses", cover: 'https://images.unsplash.com/photo-1595777707802-f3ee0865ba9d?w=800&h=1000&fit=crop' },
  { slug: 'shoes', label: 'Shoes', cover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop' },
  { slug: 'watches', label: 'Watches', cover: 'https://images.unsplash.com/photo-1523170335684-f042f1b5eca7?w=800&h=1000&fit=crop' },
]

const mk = (id, name, brand, category, price, original, rating, colors, sizes, collection) => ({
  id, name, brand, category, price, original, rating,
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

export const PRODUCTS = []

export const byCategory = (slug) => PRODUCTS.filter(p => p.category === slug)
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
