import ProductTable from "@/components/adminComp/ProductTable";

const dummyProducts = [
  {
    _id: '1',
    name: 'Herbal Hair Oil',
    slug: 'herbal-hair-oil',
    description: 'A natural blend of oils that nourishes your scalp and strengthens hair roots.',
    price: 1200,
    discountPrice: 999,
    category: 'Hair Care',
    isSale: true,
    inStock: true,
    size: '200ml',
    isNewArrival: true,
    mainImage: '/images/hair-oil-1.jpg',
    ingredients: ['Amla', 'Coconut Oil', 'Castor Oil'],
    benefits: ['Reduces hair fall', 'Promotes growth'],
    createdAt: '2025-10-09T10:00:00Z',
  },
  {
    _id: '2',
    name: 'Aloe Vera Shampoo',
    slug: 'aloe-vera-shampoo',
    description: 'Gentle cleansing shampoo enriched with aloe vera extract.',
    price: 850,
    category: 'Hair Care',
    isSale: false,
    inStock: false,
    size: '250ml',
    isNewArrival: false,
    mainImage: '/images/shampoo.jpg',
    ingredients: ['Aloe Vera', 'Vitamin E'],
    benefits: ['Hydrates scalp', 'Adds shine'],
    createdAt: '2025-10-08T09:30:00Z',
  },
];

export default function AdminProductsPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <ProductTable products={dummyProducts} />
    </div>
  );
}
