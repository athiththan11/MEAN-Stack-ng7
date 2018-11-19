import { Component, OnInit } from '@angular/core';

import { DevService } from '../dev.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    devForm: FormGroup;
    id = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private devService: DevService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.getDev(this.route.snapshot.params['id']);
        this.devForm = this.formBuilder.group({
            name: [null, Validators.required],
            github: [null, Validators.required]
        });
    }

    getDev(id: string): void {
        this.devService.getDev(id).subscribe((dev) => {
            this.id = dev._id;
            this.devForm.setValue({
                name: dev.name,
                github: dev.github
            });
        });
    }

    onFormSubmit(form: NgForm) {
        this.devService.updateDev(this.id, form).subscribe(
            (res) => {
                this.router.navigate(['/dev']);
            },
            (err) => {
                console.error(err);
            }
        );
    }
}
