const dashboardData = {
  metrics: [
    { label: 'Weekly sales', value: '$9.8K', trend: '+18%' },
    { label: 'New customers', value: '172', trend: '+12%' },
    { label: 'Active carts', value: '42', trend: '+7%' },
    { label: 'Stock alerts', value: '6', trend: '-9%' }
  ],
  chartSeries: [
    { name: 'Orders', data: [52, 68, 87, 74, 96, 110, 126] },
    { name: 'Revenue', data: [4200, 5300, 6100, 5800, 7200, 8000, 9100] }
  ],
  recentOrders: [
    { id: 'ORD-3295', email: 'hannah@luna.com', amount: '$215', status: 'Delivered' },
    { id: 'ORD-3301', email: 'max@luna.com', amount: '$98', status: 'Processing' },
    { id: 'ORD-3308', email: 'sara@luna.com', amount: '$412', status: 'Shipped' }
  ]
};

export default dashboardData;
