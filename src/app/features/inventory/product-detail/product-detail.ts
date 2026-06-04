import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  form!: FormGroup;
  activeTab = 0;

  constructor(
    private route: ActivatedRoute,
    private service: InventoryService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProduct(id).subscribe(p => {
      this.product = p;
      this.buildForm();
    });
  }

  buildForm(): void {
    this.form = this.fb.group({
      sku:          [this.product?.sku, Validators.required],
      name:         [this.product?.name, Validators.required],
      category:     [this.product?.category, Validators.required],
      status:       [this.product?.status, Validators.required],
      unitPrice:    [this.product?.unitPrice, [Validators.required, Validators.min(0)]],
      reorderLevel: [this.product?.reorderLevel, [Validators.required, Validators.min(0)]],
      supplier:     [this.product?.supplier],
    });
  }

  save(): void { /* mock save */ }
  cancel(): void { window.history.back(); }
}
