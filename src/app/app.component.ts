import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet,PopupComponent,DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openusDetails(){
    const dialogRef = this.dialog.open(DetailsComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

