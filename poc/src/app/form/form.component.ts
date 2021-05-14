import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  url :any;

  ngOnInit(): void {
  }

  onFileSelected(event:any)
  {
    console.log("file", event);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e:any)=>{
      this.url = e.target.result;
    }
  }

  upload()
  {

    alert("File Uploaded Successfully");
  }
}
