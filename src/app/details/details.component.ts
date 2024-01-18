import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  data = this.us.dataArray;
  booleanValue = this.us.booleanFlag;
  constructor(private us: UserDetailsService){}
  ngOnInit(): void {

    // this.data =this.us.user()
    // console.log("userdata :",this.data)
  }


}
