import { Component } from '@angular/core';
import { BlankComponent } from '../blank/blank.component';
import { SectionComponent } from '../section/section.component';
import { SharedModule } from '../../modules/shared.module';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor(
  //   private swal: SwalService
  // ){
  //   this.swal.callSwal("Kaydı Sil","Kaydı Silmek İstiyor Musunuz?",()=>{
  //     alert("Silme işlemi başarılı")
  //   });
  // }
}
