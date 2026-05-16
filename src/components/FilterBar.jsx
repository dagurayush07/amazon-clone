function FilterBar({ filters, selectedCategory, onCategoryChange, onPriceChange, onRatingChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="category-select">Category</label>
        <select id="category-select" value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="all">All</option>
          {filters.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price-select">Price</label>
        <select id="price-select" onChange={(event) => onPriceChange(event.target.value)}>
          <option value="all">All</option>
          <option value="low">Under $70</option>
          <option value="mid">$70 - $150</option>
          <option value="high">Above $150</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="rating-select">Rating</label>
        <select id="rating-select" onChange={(event) => onRatingChange(event.target.value)}>
          <option value="all">All</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
