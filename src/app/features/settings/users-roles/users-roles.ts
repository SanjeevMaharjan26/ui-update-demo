import { Component } from '@angular/core';
import { TableColumn } from '../../../shared/components/data-display/nx-grid/nx-grid';

interface AppUser { id: number; name: string; email: string; role: string; status: string; lastLogin: string; }

@Component({ selector: 'app-users-roles', standalone: false, templateUrl: './users-roles.html', styleUrl: './users-roles.scss' })
export class UsersRolesComponent {
  users: AppUser[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@nexus.com', role: 'admin', status: 'active', lastLogin: '2026-06-03 09:00' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@nexus.com', role: 'manager', status: 'active', lastLogin: '2026-06-03 08:30' },
    { id: 3, name: 'Mike Johnson', email: 'mike.j@nexus.com', role: 'operator', status: 'active', lastLogin: '2026-06-02 17:00' },
    { id: 4, name: 'Alice Brown', email: 'alice.b@nexus.com', role: 'operator', status: 'active', lastLogin: '2026-06-03 07:45' },
    { id: 5, name: 'Tom Wilson', email: 'tom.w@nexus.com', role: 'viewer', status: 'active', lastLogin: '2026-06-01 14:00' },
    { id: 6, name: 'Sarah Lee', email: 'sarah.l@nexus.com', role: 'manager', status: 'active', lastLogin: '2026-05-30 10:30' },
    { id: 7, name: 'Bob Davis', email: 'bob.d@nexus.com', role: 'viewer', status: 'inactive', lastLogin: '2026-05-10 11:00' },
    { id: 8, name: 'Carol White', email: 'carol.w@nexus.com', role: 'operator', status: 'active', lastLogin: '2026-06-02 16:15' },
  ];
  columns: TableColumn[] = [
    { key: 'name', header: 'Name', width: '160px' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', type: 'badge', width: '100px' },
    { key: 'status', header: 'Status', type: 'status', width: '90px' },
    { key: 'lastLogin', header: 'Last Login', width: '150px' },
  ];
}
