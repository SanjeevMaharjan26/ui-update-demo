import { Product, Category, StockAdjustment } from './models';

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, sku: 'SKU-00100', name: 'Industrial Bearing 6205', category: 'Bearings', status: 'active', stockQty: 245, reorderLevel: 50, unitPrice: 12.50, supplier: 'Acme Parts Ltd', lastUpdated: '2026-06-01' },
  { id: 2, sku: 'SKU-00101', name: 'Hydraulic Seal Kit A4', category: 'Seals', status: 'active', stockQty: 38, reorderLevel: 40, unitPrice: 45.00, supplier: 'HydroTech Corp', lastUpdated: '2026-05-28' },
  { id: 3, sku: 'SKU-00102', name: 'Steel Hex Bolt M12x50', category: 'Fasteners', status: 'active', stockQty: 1200, reorderLevel: 200, unitPrice: 0.45, supplier: 'FastFix Supply', lastUpdated: '2026-05-30' },
  { id: 4, sku: 'SKU-00103', name: 'Electric Motor 2HP', category: 'Motors', status: 'active', stockQty: 12, reorderLevel: 5, unitPrice: 320.00, supplier: 'ElectroPower Inc', lastUpdated: '2026-06-02' },
  { id: 5, sku: 'SKU-00104', name: 'PVC Pipe 50mm x 2m', category: 'Piping', status: 'active', stockQty: 67, reorderLevel: 20, unitPrice: 8.75, supplier: 'PipeMaster Ltd', lastUpdated: '2026-05-25' },
  { id: 6, sku: 'SKU-00105', name: 'Lubricant Grease 1kg', category: 'Lubricants', status: 'active', stockQty: 88, reorderLevel: 30, unitPrice: 22.00, supplier: 'LubeCo', lastUpdated: '2026-06-01' },
  { id: 7, sku: 'SKU-00106', name: 'Safety Gloves L', category: 'Safety', status: 'active', stockQty: 150, reorderLevel: 50, unitPrice: 6.50, supplier: 'SafeGuard Supplies', lastUpdated: '2026-05-20' },
  { id: 8, sku: 'SKU-00107', name: 'Control Panel 24V', category: 'Electronics', status: 'inactive', stockQty: 5, reorderLevel: 2, unitPrice: 850.00, supplier: 'ElectroPower Inc', lastUpdated: '2026-04-15' },
  { id: 9, sku: 'SKU-00108', name: 'Conveyor Belt 5m', category: 'Conveyors', status: 'active', stockQty: 8, reorderLevel: 3, unitPrice: 420.00, supplier: 'ConveyTech', lastUpdated: '2026-05-18' },
  { id: 10, sku: 'SKU-00109', name: 'Filter Element F200', category: 'Filters', status: 'active', stockQty: 34, reorderLevel: 35, unitPrice: 18.90, supplier: 'FilterPro', lastUpdated: '2026-06-02' },
  { id: 11, sku: 'SKU-00110', name: 'Gear Pump GP-10', category: 'Pumps', status: 'active', stockQty: 6, reorderLevel: 3, unitPrice: 540.00, supplier: 'HydroTech Corp', lastUpdated: '2026-05-29' },
  { id: 12, sku: 'SKU-00111', name: 'Welding Rod 3.2mm', category: 'Welding', status: 'active', stockQty: 500, reorderLevel: 100, unitPrice: 0.80, supplier: 'WeldPro Ltd', lastUpdated: '2026-05-22' },
  { id: 13, sku: 'SKU-00112', name: 'Pressure Gauge 0-10 Bar', category: 'Instruments', status: 'draft', stockQty: 0, reorderLevel: 5, unitPrice: 35.00, supplier: 'InstruMeasure', lastUpdated: '2026-06-03' },
  { id: 14, sku: 'SKU-00113', name: 'V-Belt A75', category: 'Belts', status: 'active', stockQty: 22, reorderLevel: 10, unitPrice: 14.50, supplier: 'BeltDrive Co', lastUpdated: '2026-05-27' },
  { id: 15, sku: 'SKU-00114', name: 'Coupling Jaw Type 42', category: 'Couplings', status: 'active', stockQty: 30, reorderLevel: 10, unitPrice: 62.00, supplier: 'Acme Parts Ltd', lastUpdated: '2026-06-01' },
];

export const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: 'Bearings', description: 'Ball and roller bearings', productCount: 45 },
  { id: 2, name: 'Seals', description: 'Hydraulic and pneumatic seals', productCount: 32 },
  { id: 3, name: 'Fasteners', description: 'Bolts, nuts and washers', productCount: 180 },
  { id: 4, name: 'Motors', description: 'Electric motors', productCount: 28 },
  { id: 5, name: 'Piping', description: 'PVC and metal pipes', productCount: 56 },
  { id: 6, name: 'Lubricants', description: 'Oils and greases', productCount: 22 },
  { id: 7, name: 'Safety', description: 'PPE and safety equipment', productCount: 67 },
  { id: 8, name: 'Electronics', description: 'Control panels and sensors', productCount: 41 },
];

export const MOCK_ADJUSTMENTS: StockAdjustment[] = [
  { id: 1, productId: 2, productName: 'Hydraulic Seal Kit A4', type: 'decrease', quantity: 10, reason: 'Damaged goods', date: '2026-06-03', performedBy: 'Mike Johnson' },
  { id: 2, productId: 3, productName: 'Steel Hex Bolt M12x50', type: 'increase', quantity: 500, reason: 'Delivery received', date: '2026-06-02', performedBy: 'Jane Smith' },
  { id: 3, productId: 10, productName: 'Filter Element F200', type: 'decrease', quantity: 15, reason: 'Consumed in production', date: '2026-06-02', performedBy: 'Alice Brown' },
  { id: 4, productId: 6, productName: 'Lubricant Grease 1kg', type: 'increase', quantity: 40, reason: 'Delivery received', date: '2026-06-01', performedBy: 'John Doe' },
  { id: 5, productId: 7, productName: 'Safety Gloves L', type: 'decrease', quantity: 20, reason: 'Issued to department', date: '2026-05-31', performedBy: 'Mike Johnson' },
];
