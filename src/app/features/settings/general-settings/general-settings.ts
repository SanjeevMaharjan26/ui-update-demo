import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'app-general-settings', standalone: false, templateUrl: './general-settings.html', styleUrl: './general-settings.scss' })
export class GeneralSettingsComponent implements OnInit {
  form!: FormGroup;
  saved = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      companyName:  ['Nexus Industrial Corp', Validators.required],
      companyEmail: ['admin@nexusindustrial.com', [Validators.required, Validators.email]],
      phone:        ['+1-555-000-1234'],
      address:      ['123 Industrial Blvd, Chicago, IL 60601'],
      currency:     ['USD'],
      dateFormat:   ['YYYY-MM-DD'],
      timezone:     ['America/Chicago'],
      lowStockAlerts:     [true],
      emailNotifications: [true],
      auditLogging:       [true],
      maintenanceMode:    [false],
    });
  }
  save(): void { this.saved = true; setTimeout(() => this.saved = false, 3000); }
}
