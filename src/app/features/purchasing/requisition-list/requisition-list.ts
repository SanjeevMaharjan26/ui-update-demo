import { Component, OnInit } from '@angular/core';
import { Requisition } from '../models';
import { PurchasingService } from '../purchasing.service';
import { GridColumn } from '../../../shared/components/nx-data-grid/nx-data-grid';

@Component({ selector: 'app-requisition-list', standalone: false, templateUrl: './requisition-list.html', styleUrl: './requisition-list.scss' })
export class RequisitionListComponent implements OnInit {
  requisitions: Requisition[] = [];
  columns: GridColumn[] = [
    { key: 'reqNumber', header: 'Req #', sortable: true, width: '140px' },
    { key: 'description', header: 'Description', sortable: false },
    { key: 'requestedBy', header: 'Requested By', sortable: true, width: '140px' },
    { key: 'department', header: 'Department', sortable: true, width: '120px' },
    { key: 'status', header: 'Status', type: 'status', sortable: true, width: '110px' },
    { key: 'requestDate', header: 'Date', sortable: true, width: '110px' },
    { key: 'estimatedCost', header: 'Est. Cost', type: 'currency', sortable: true, width: '120px' },
  ];
  constructor(private service: PurchasingService) {}
  ngOnInit(): void { this.service.getRequisitions().subscribe(r => this.requisitions = r); }
}
