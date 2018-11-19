import { Component, OnInit } from '@angular/core';

import { DevService } from './dev.service';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.component.html',
    styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
    devs: any = [];

    constructor(private devService: DevService) {}

    ngOnInit() {
        this.devService.getAllDevs().subscribe((devs) => (this.devs = devs));
    }

    delete(id: string, index: number): void {
        this.devService.deleteDev(id).subscribe((res) => {
            console.log('Success');

            this.devs.splice(index, 1);
        });
    }
}
