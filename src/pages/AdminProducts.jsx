import { useMemo, useState } from 'react';
import productsData from '../data/products.js';

function AdminProducts() {
  const [items, setItems] = useState(productsData);
  const [editingId, setEditingId] = useState(null);
  const [formState, setFormState] = useState({ name: '', category: '', price: '', badge: '', image: '' });

  const activeItem = useMemo(
    () => items.find((item) => item.id === editingId) ?? null,
    [items, editingId]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingId) {
      setItems((current) =>
        current.map((product) =>
          product.id === editingId ? { ...product, ...formState, price: Number(formState.price) } : product
        )
      );
    } else {
      const newProduct = {
        id: `luna-${Date.now()}`,
        ...formState,
        price: Number(formState.price),
        rating: 4.5,
        reviews: 0,
        image: formState.image || 'https://images.unsplash.com/photo-1510557880182-3d4d3c2b7034?auto=format&fit=crop&w=900&q=80',
        discount: 0,
        description: 'New admin-added product.',
        details: ['Custom product', 'Admin listing']
      };
      setItems((current) => [newProduct, ...current]);
    }

    setEditingId(null);
    setFormState({ name: '', category: '', price: '', badge: '', image: '' });
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormState({
      name: product.name,
      category: product.category,
      price: product.price,
      badge: product.badge || '',
      image: product.image
    });
  };

  const handleDelete = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <section className="admin-page container">
      <div className="section-heading">
        <span>Product manager</span>
        <h2>Add, edit, or delete products</h2>
      </div>
      <div className="admin-form-grid">
        <form className="card-panel admin-form" onSubmit={handleSubmit}>
          <h3>{editingId ? 'Edit product' : 'Add new product'}</h3>
          <label>
            Name
            <input name="name" value={formState.name} onChange={handleChange} required />
          </label>
          <label>
            Category
            <input name="category" value={formState.category} onChange={handleChange} required />
          </label>
          <label>
            Price
            <input name="price" value={formState.price} onChange={handleChange} type="number" required />
          </label>
          <label>
            Badge
            <input name="badge" value={formState.badge} onChange={handleChange} placeholder="Flash Sale" />
          </label>
          <label>
            Image URL
            <input name="image" value={formState.image} onChange={handleChange} placeholder="https://..." />
          </label>
          <button type="submit" className="button-primary">
            {editingId ? 'Save changes' : 'Add product'}
          </button>
        </form>
        <div className="card-panel admin-products-list">
          <h3>Product catalog</h3>
          <ul>
            {items.map((product) => (
              <li key={product.id} className="admin-item">
                <div>
                  <strong>{product.name}</strong>
                  <span>${product.price}</span>
                </div>
                <div className="item-actions">
                  <button type="button" className="text-button" onClick={() => handleEdit(product)}>
                    Edit
                  </button>
                  <button type="button" className="text-button danger" onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdminProducts;
