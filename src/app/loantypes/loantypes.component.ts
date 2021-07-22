import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loantypes',
  templateUrl: './loantypes.component.html',
  styleUrls: ['./loantypes.component.scss']
})
export class LoantypesComponent implements OnInit {

  addLoadTypeForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    // this.addLoadTypeForm= new FormGroup({ 
    //   'loanName':new FormControl(),
    //   'loanDescription':new FormControl(),
    //   'loantype':new FormControl()
    // })

    this.addLoadTypeForm=this.formbuilder.group({
      'loanName': new FormControl(),
      'loanDescription': new FormControl(),
      'loantype': new FormControl()
    })

  }

  addLoanType(){
    console.log(this.addLoadTypeForm.value);
  
  }

}
