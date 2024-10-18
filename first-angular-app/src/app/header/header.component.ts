import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    //imports: [ CommonModule ], // Solo se usa cuando Standalone esta en true
})

export class HeaderComponent{
    
}