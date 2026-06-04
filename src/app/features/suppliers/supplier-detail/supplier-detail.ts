import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../models';
import { SuppliersService } from '../suppliers.service';

@Component({ selector: 'app-supplier-detail', standalone: false, templateUrl: './supplier-detail.html', styleUrl: './supplier-detail.scss' })
export class SupplierDetailComponent implements OnInit {
  supplier: Supplier | undefined;
  form!: FormGroup;
  activeTab = 0;

  constructor(private route: ActivatedRoute, private service: SuppliersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getSupplier(id).subscribe(s => {
      this.supplier = s;
      this.form = this.fb.group({
        name:         [s?.name, Validators.required],
        category:     [s?.category],
        country:      [s?.country],
        city:         [s?.city],
        email:        [s?.email, Validators.email],
        phone:        [s?.phone],
        website:      [s?.website],
        paymentTerms: [s?.paymentTerms],
        currency:     [s?.currency],
        taxId:        [s?.taxId],
      });
    });
  }
  save(): void { /* mock save */ }
}
