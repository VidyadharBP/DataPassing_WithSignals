import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserDetailsService {
  dataArray: WritableSignal<any[]> = signal([]);
  booleanFlag : WritableSignal<boolean> = signal(false)

  addData(newData: any) {
    this.dataArray.update(value => [...value, newData]); // Append to the array
  }

  setBooleanData(newValue: boolean) {
    this.booleanFlag.set(newValue);
  }

}
