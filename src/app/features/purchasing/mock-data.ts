import { PurchaseOrder, Requisition } from './models';

export const MOCK_PURCHASE_ORDERS: PurchaseOrder[] = [
  { id: 1, poNumber: 'PO-2024-089', supplierId: 1, supplierName: 'Acme Parts Ltd', status: 'approved', orderDate: '2026-05-28', expectedDate: '2026-06-10', totalAmount: 3450.00, notes: 'Urgent order', lines: [
    { id: 1, productSku: 'SKU-00100', productName: 'Industrial Bearing 6205', quantity: 100, unitPrice: 12.50, total: 1250.00, receivedQty: 0 },
    { id: 2, productSku: 'SKU-00114', productName: 'Coupling Jaw Type 42', quantity: 35, unitPrice: 62.00, total: 2170.00, receivedQty: 0 },
  ]},
  { id: 2, poNumber: 'PO-2024-088', supplierId: 2, supplierName: 'HydroTech Corp', status: 'rejected', orderDate: '2026-05-25', expectedDate: '2026-06-05', totalAmount: 2280.00, notes: 'Budget exceeded', lines: [] },
  { id: 3, poNumber: 'PO-2024-087', supplierId: 3, supplierName: 'FastFix Supply', status: 'received', orderDate: '2026-05-20', expectedDate: '2026-05-30', totalAmount: 540.00, notes: '', lines: [] },
  { id: 4, poNumber: 'PO-2024-086', supplierId: 4, supplierName: 'ElectroPower Inc', status: 'pending', orderDate: '2026-06-01', expectedDate: '2026-06-15', totalAmount: 4800.00, notes: 'Awaiting manager approval', lines: [] },
  { id: 5, poNumber: 'PO-2024-085', supplierId: 1, supplierName: 'Acme Parts Ltd', status: 'approved', orderDate: '2026-05-15', expectedDate: '2026-05-28', totalAmount: 1890.00, notes: '', lines: [] },
  { id: 6, poNumber: 'PO-2024-084', supplierId: 5, supplierName: 'PipeMaster Ltd', status: 'received', orderDate: '2026-05-10', expectedDate: '2026-05-22', totalAmount: 875.00, notes: '', lines: [] },
  { id: 7, poNumber: 'PO-2024-083', supplierId: 6, supplierName: 'LubeCo', status: 'draft', orderDate: '2026-06-03', expectedDate: '2026-06-20', totalAmount: 660.00, notes: 'In progress', lines: [] },
  { id: 8, poNumber: 'PO-2024-082', supplierId: 7, supplierName: 'SafeGuard Supplies', status: 'approved', orderDate: '2026-05-08', expectedDate: '2026-05-18', totalAmount: 325.00, notes: '', lines: [] },
  { id: 9, poNumber: 'PO-2024-081', supplierId: 2, supplierName: 'HydroTech Corp', status: 'received', orderDate: '2026-05-01', expectedDate: '2026-05-12', totalAmount: 5400.00, notes: '', lines: [] },
  { id: 10, poNumber: 'PO-2024-080', supplierId: 8, supplierName: 'ConveyTech', status: 'received', orderDate: '2026-04-25', expectedDate: '2026-05-05', totalAmount: 2940.00, notes: '', lines: [] },
  { id: 11, poNumber: 'PO-2024-079', supplierId: 9, supplierName: 'FilterPro', status: 'approved', orderDate: '2026-05-30', expectedDate: '2026-06-12', totalAmount: 756.00, notes: '', lines: [] },
  { id: 12, poNumber: 'PO-2024-078', supplierId: 1, supplierName: 'Acme Parts Ltd', status: 'pending', orderDate: '2026-06-02', expectedDate: '2026-06-18', totalAmount: 1240.00, notes: 'Awaiting approval', lines: [] },
  { id: 13, poNumber: 'PO-2024-077', supplierId: 3, supplierName: 'FastFix Supply', status: 'received', orderDate: '2026-04-15', expectedDate: '2026-04-28', totalAmount: 340.00, notes: '', lines: [] },
  { id: 14, poNumber: 'PO-2024-076', supplierId: 4, supplierName: 'ElectroPower Inc', status: 'approved', orderDate: '2026-05-12', expectedDate: '2026-05-25', totalAmount: 7200.00, notes: '', lines: [] },
  { id: 15, poNumber: 'PO-2024-075', supplierId: 5, supplierName: 'PipeMaster Ltd', status: 'draft', orderDate: '2026-06-03', expectedDate: '2026-06-25', totalAmount: 0, notes: 'New order', lines: [] },
];

export const MOCK_REQUISITIONS: Requisition[] = [
  { id: 1, reqNumber: 'REQ-2024-112', requestedBy: 'Alice Brown', department: 'Production', status: 'pending', requestDate: '2026-06-02', requiredDate: '2026-06-15', description: 'Hydraulic seal kits for Line 3 maintenance', estimatedCost: 450.00 },
  { id: 2, reqNumber: 'REQ-2024-111', requestedBy: 'Tom Wilson', department: 'Maintenance', status: 'approved', requestDate: '2026-05-30', requiredDate: '2026-06-10', description: 'Bearings and couplings for pump overhaul', estimatedCost: 890.00 },
  { id: 3, reqNumber: 'REQ-2024-110', requestedBy: 'Sarah Lee', department: 'Safety', status: 'approved', requestDate: '2026-05-28', requiredDate: '2026-06-05', description: 'PPE restock for Q2', estimatedCost: 320.00 },
  { id: 4, reqNumber: 'REQ-2024-109', requestedBy: 'Mike Johnson', department: 'Engineering', status: 'rejected', requestDate: '2026-05-20', requiredDate: '2026-06-01', description: 'New control panel for Building C', estimatedCost: 3500.00 },
  { id: 5, reqNumber: 'REQ-2024-108', requestedBy: 'Alice Brown', department: 'Production', status: 'draft', requestDate: '2026-06-03', requiredDate: '2026-06-25', description: 'Filter elements for monthly change', estimatedCost: 190.00 },
  { id: 6, reqNumber: 'REQ-2024-107', requestedBy: 'John Doe', department: 'Admin', status: 'approved', requestDate: '2026-05-15', requiredDate: '2026-05-25', description: 'Office supplies and stationery', estimatedCost: 120.00 },
  { id: 7, reqNumber: 'REQ-2024-106', requestedBy: 'Tom Wilson', department: 'Maintenance', status: 'pending', requestDate: '2026-06-01', requiredDate: '2026-06-20', description: 'V-belts and pulleys for conveyor B2', estimatedCost: 580.00 },
  { id: 8, reqNumber: 'REQ-2024-105', requestedBy: 'Jane Smith', department: 'Warehouse', status: 'approved', requestDate: '2026-05-25', requiredDate: '2026-06-08', description: 'Racking labels and tags', estimatedCost: 85.00 },
  { id: 9, reqNumber: 'REQ-2024-104', requestedBy: 'Sarah Lee', department: 'Safety', status: 'approved', requestDate: '2026-05-10', requiredDate: '2026-05-20', description: 'Fire extinguisher refills', estimatedCost: 240.00 },
  { id: 10, reqNumber: 'REQ-2024-103', requestedBy: 'Mike Johnson', department: 'Engineering', status: 'draft', requestDate: '2026-06-03', requiredDate: '2026-07-01', description: 'Sensors for conveyor monitoring project', estimatedCost: 2800.00 },
  { id: 11, reqNumber: 'REQ-2024-102', requestedBy: 'Alice Brown', department: 'Production', status: 'rejected', requestDate: '2026-05-05', requiredDate: '2026-05-18', description: 'Additional welding equipment', estimatedCost: 4200.00 },
  { id: 12, reqNumber: 'REQ-2024-101', requestedBy: 'Tom Wilson', department: 'Maintenance', status: 'approved', requestDate: '2026-04-28', requiredDate: '2026-05-10', description: 'Gaskets and O-rings for Q2 maintenance', estimatedCost: 340.00 },
];
