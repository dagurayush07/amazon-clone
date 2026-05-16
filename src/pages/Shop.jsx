import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import FilterBar from '../components/FilterBar.jsx';
import categories from '../data/categories.js';
import { useShop } from '../context/ShopContext.jsx';

function Shop() {
  const { products } = useShop();
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const searchTerm = searchParams.get('query') || '';

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        category === 'all' ? true : product.category.toLowerCase() === category.toLowerCase()
      )
      .filter((product) => {
        if (!searchTerm) return true;
        return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .filter((product) => {
        if (priceFilter === 'low') return product.price < 70;
        if (priceFilter === 'mid') return product.price >= 70 && product.price <= 150;
        if (priceFilter === 'high') return product.price > 150;
        return true;
      })
      .filter((product) => {
        if (ratingFilter === '4') return product.rating >= 4;
        if (ratingFilter === '4.5') return product.rating >= 4.5;
        return true;
      });
  }, [products, category, priceFilter, ratingFilter, searchTerm]);

  return (
    <div className="shop-page container">
      <div className="section-heading">
        <span>Shop</span>
        <h2>Discover curated products</h2>
      </div>
      <FilterBar
        filters={{ categories }}
        selectedCategory={category}
        onCategoryChange={setCategory}
        onPriceChange={setPriceFilter}
        onRatingChange={setRatingFilter}
      />
      {searchTerm && <p className="search-meta">Showing results for “{searchTerm}”</p>}
      <div className="grid product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="empty-state">
            <h3>No products match your filters</h3>
            <p>Try a new search term or reset the filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
