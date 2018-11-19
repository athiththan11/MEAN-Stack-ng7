import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DevService } from '../dev.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    devForm: FormGroup;

    constructor(
        private router: Router,
        private devService: DevService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.devForm = this.formBuilder.group({
            name: [null, Validators.required],
            github: [null, Validators.required]
        });
    }

    onFormSubmit(form: NgForm): void {
        this.devService.postDev(form).subscribe(
            (res) => {
                console.log('Dev created successfully');
                this.router.navigate(['/dev']);
            },
            (err) => {
                console.error(err);
            }
        );
    }
}
