import { Supplier } from './models';

export const MOCK_SUPPLIERS: Supplier[] = [
  { id: 1, code: 'SUPP-001', name: 'Acme Parts Ltd', country: 'United States', city: 'Chicago', status: 'active', rating: 4, category: 'Industrial Parts', email: 'sales@acmeparts.com', phone: '+1-312-555-0100', website: 'www.acmeparts.com', taxId: 'US-123456789', paymentTerms: 'Net 30', currency: 'USD', onboardedDate: '2020-03-15', contacts: [
    { id: 1, supplierId: 1, name: 'Robert Smith', role: 'Account Manager', email: 'r.smith@acmeparts.com', phone: '+1-312-555-0101', primary: true },
    { id: 2, supplierId: 1, name: 'Carol White', role: 'Technical Support', email: 'c.white@acmeparts.com', phone: '+1-312-555-0102', primary: false },
  ]},
  { id: 2, code: 'SUPP-002', name: 'HydroTech Corp', country: 'Germany', city: 'Stuttgart', status: 'active', rating: 5, category: 'Hydraulics', email: 'info@hydrotech.de', phone: '+49-711-555-200', website: 'www.hydrotech.de', taxId: 'DE-987654321', paymentTerms: 'Net 45', currency: 'EUR', onboardedDate: '2018-07-22', contacts: [
    { id: 3, supplierId: 2, name: 'Hans Mueller', role: 'Sales Director', email: 'h.mueller@hydrotech.de', phone: '+49-711-555-201', primary: true },
  ]},
  { id: 3, code: 'SUPP-003', name: 'FastFix Supply', country: 'United Kingdom', city: 'Birmingham', status: 'active', rating: 3, category: 'Fasteners', email: 'orders@fastfix.co.uk', phone: '+44-121-555-0300', website: 'www.fastfix.co.uk', taxId: 'GB-246813579', paymentTerms: 'Net 30', currency: 'GBP', onboardedDate: '2021-01-10', contacts: [
    { id: 4, supplierId: 3, name: 'James Brown', role: 'Sales Rep', email: 'j.brown@fastfix.co.uk', phone: '+44-121-555-0301', primary: true },
  ]},
  { id: 4, code: 'SUPP-004', name: 'ElectroPower Inc', country: 'United States', city: 'San Jose', status: 'active', rating: 4, category: 'Electrical', email: 'sales@electropower.com', phone: '+1-408-555-0400', website: 'www.electropower.com', taxId: 'US-135792468', paymentTerms: 'Net 60', currency: 'USD', onboardedDate: '2019-05-14', contacts: [
    { id: 5, supplierId: 4, name: 'Lisa Chen', role: 'Account Executive', email: 'l.chen@electropower.com', phone: '+1-408-555-0401', primary: true },
    { id: 6, supplierId: 4, name: 'David Park', role: 'Technical Liaison', email: 'd.park@electropower.com', phone: '+1-408-555-0402', primary: false },
  ]},
  { id: 5, code: 'SUPP-005', name: 'PipeMaster Ltd', country: 'Australia', city: 'Melbourne', status: 'active', rating: 4, category: 'Piping', email: 'sales@pipemaster.com.au', phone: '+61-3-5555-0500', website: 'www.pipemaster.com.au', taxId: 'AU-111222333', paymentTerms: 'Net 30', currency: 'AUD', onboardedDate: '2020-11-08', contacts: [
    { id: 7, supplierId: 5, name: 'Mark Taylor', role: 'Sales Manager', email: 'm.taylor@pipemaster.com.au', phone: '+61-3-5555-0501', primary: true },
  ]},
  { id: 6, code: 'SUPP-006', name: 'LubeCo', country: 'Canada', city: 'Toronto', status: 'active', rating: 3, category: 'Lubricants', email: 'orders@lubeco.ca', phone: '+1-416-555-0600', website: 'www.lubeco.ca', taxId: 'CA-444555666', paymentTerms: 'Net 30', currency: 'CAD', onboardedDate: '2022-02-20', contacts: [
    { id: 8, supplierId: 6, name: 'Sophie Martin', role: 'Sales Rep', email: 's.martin@lubeco.ca', phone: '+1-416-555-0601', primary: true },
  ]},
  { id: 7, code: 'SUPP-007', name: 'SafeGuard Supplies', country: 'United States', city: 'Dallas', status: 'active', rating: 4, category: 'Safety', email: 'info@safeguard.com', phone: '+1-214-555-0700', website: 'www.safeguard.com', taxId: 'US-777888999', paymentTerms: 'Net 30', currency: 'USD', onboardedDate: '2021-08-30', contacts: [
    { id: 9, supplierId: 7, name: 'Kevin Adams', role: 'Account Manager', email: 'k.adams@safeguard.com', phone: '+1-214-555-0701', primary: true },
  ]},
  { id: 8, code: 'SUPP-008', name: 'ConveyTech', country: 'Italy', city: 'Milan', status: 'active', rating: 5, category: 'Conveyors', email: 'sales@conveytech.it', phone: '+39-02-555-0800', website: 'www.conveytech.it', taxId: 'IT-123123123', paymentTerms: 'Net 45', currency: 'EUR', onboardedDate: '2017-12-05', contacts: [
    { id: 10, supplierId: 8, name: 'Marco Rossi', role: 'Export Manager', email: 'm.rossi@conveytech.it', phone: '+39-02-555-0801', primary: true },
  ]},
  { id: 9, code: 'SUPP-009', name: 'FilterPro', country: 'Netherlands', city: 'Rotterdam', status: 'active', rating: 4, category: 'Filtration', email: 'orders@filterpro.nl', phone: '+31-10-555-0900', website: 'www.filterpro.nl', taxId: 'NL-456456456', paymentTerms: 'Net 30', currency: 'EUR', onboardedDate: '2020-06-18', contacts: [
    { id: 11, supplierId: 9, name: 'Anna Bakker', role: 'Sales Representative', email: 'a.bakker@filterpro.nl', phone: '+31-10-555-0901', primary: true },
  ]},
  { id: 10, code: 'SUPP-010', name: 'WeldPro Ltd', country: 'United Kingdom', city: 'Sheffield', status: 'active', rating: 3, category: 'Welding', email: 'sales@weldpro.co.uk', phone: '+44-114-555-1000', website: 'www.weldpro.co.uk', taxId: 'GB-789789789', paymentTerms: 'Net 30', currency: 'GBP', onboardedDate: '2022-09-14', contacts: [
    { id: 12, supplierId: 10, name: 'Steve Higgins', role: 'Sales Director', email: 's.higgins@weldpro.co.uk', phone: '+44-114-555-1001', primary: true },
  ]},
  { id: 11, code: 'SUPP-011', name: 'BeltDrive Co', country: 'United States', city: 'Detroit', status: 'inactive', rating: 2, category: 'Power Transmission', email: 'info@beltdrive.com', phone: '+1-313-555-1100', website: 'www.beltdrive.com', taxId: 'US-321654987', paymentTerms: 'Net 30', currency: 'USD', onboardedDate: '2019-04-22', contacts: [] },
  { id: 12, code: 'SUPP-012', name: 'InstruMeasure', country: 'Switzerland', city: 'Zurich', status: 'pending', rating: 0, category: 'Instruments', email: 'sales@instru.ch', phone: '+41-44-555-1200', website: 'www.instru.ch', taxId: 'CH-654321987', paymentTerms: 'Net 60', currency: 'CHF', onboardedDate: '2026-06-01', contacts: [] },
  { id: 13, code: 'SUPP-013', name: 'Pump Systems Inc', country: 'United States', city: 'Houston', status: 'active', rating: 4, category: 'Pumps', email: 'orders@pumpsystems.com', phone: '+1-713-555-1300', website: 'www.pumpsystems.com', taxId: 'US-963852741', paymentTerms: 'Net 45', currency: 'USD', onboardedDate: '2019-09-03', contacts: [] },
  { id: 14, code: 'SUPP-014', name: 'MechCoupling GmbH', country: 'Germany', city: 'Munich', status: 'active', rating: 4, category: 'Couplings', email: 'info@mechcoupling.de', phone: '+49-89-555-1400', website: 'www.mechcoupling.de', taxId: 'DE-147258369', paymentTerms: 'Net 30', currency: 'EUR', onboardedDate: '2021-03-15', contacts: [] },
  { id: 15, code: 'SUPP-015', name: 'Titan Instruments', country: 'Japan', city: 'Osaka', status: 'active', rating: 5, category: 'Instruments', email: 'export@titaninst.jp', phone: '+81-6-5551-500', website: 'www.titaninst.jp', taxId: 'JP-258147369', paymentTerms: 'Net 60', currency: 'JPY', onboardedDate: '2016-11-28', contacts: [] },
];
