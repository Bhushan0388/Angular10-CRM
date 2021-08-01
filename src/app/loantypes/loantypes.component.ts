import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loantypes',
  templateUrl: './loantypes.component.html',
  styleUrls: ['./loantypes.component.scss']
})
export class LoantypesComponent implements OnInit, OnChanges {

  addLoadTypeForm!: FormGroup;
  userdata: any;

  get users(): FormArray {
    return this.addLoadTypeForm.get('users') as FormArray;
  }

  constructor(private formbuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

    this.userdata = {
      test: 100
    }
    console.log(this.userdata);
    console.warn("testing23");
    console.error("testing2");
    // this.addLoadTypeForm= new FormGroup({ 
    //   'loanName':new FormControl(),
    //   'loanDescription':new FormControl(),
    //   'loantype':new FormControl()
    // })

    // ***************************** Direct way of setting  values 
    // this.addLoadTypeForm=this.formbuilder.group({
    //   'loanName': new FormControl('Testing'),
    //   'loanDescription': new FormControl('New Testing'),
    //   'loantype': new FormControl('Type 1')
    // })


    // *********************************FormArray Example
    // Use Case 1 defining FormArray
    let user = new FormArray([
      new FormControl('Bhushan'),
      new FormControl('KHaladakr')
    ]);

    console.log(user);
    console.log(user.value);

    // *********************************FormArray Example

    //********************* From Builder */


    this.addLoadTypeForm = this.formbuilder.group({
      'loanName': new FormControl('', [
        Validators.required,
        Validators.minLength(10)]),
      'loanDescription': new FormControl('', [
        Validators.required,
        Validators.maxLength(20)]),
      'loantype': new FormControl(''),
      // users: new FormArray([
      //   new FormControl('test'),
      //   new FormControl('Testing')
      // ])
      'users': new FormArray([
        this.formbuilder.group({
          'name': new FormControl('sss'),
          'age': new FormControl('ssasas'),
          'dept': new FormControl('2222')
        })
      ])
    })


    const newLoanObj = {
      'loanName': 'My Loan',
      'loantype': 'testing',
      'loanDescription': 'Hello '
    }

    //************************ */ Another way of setting values
    this.addLoadTypeForm.setValue(newLoanObj);


    //*****************************path Values */
    this.addLoadTypeForm.patchValue(newLoanObj)

  }



  addLoanType() {
    // read reactive forms values 
    console.log(this.addLoadTypeForm.value);

    // to read specific field
    console.log(this.addLoadTypeForm.get('loanName')?.value);

    // for value change we have to subscibe it
    this.addLoadTypeForm.valueChanges.subscribe(data => {
      console.log(data);
    })
    console.log(this.addLoadTypeForm);

    console.log(this.addLoadTypeForm.valid);
    console.log(this.addLoadTypeForm.pristine);
    console.log(this.addLoadTypeForm.dirty);
    console.log(this.addLoadTypeForm.pending);


  }

  addUser() {
    let userArr = this.addLoadTypeForm.get('users') as FormArray;
    let newUser = this.formbuilder.group({
      'name': 'sss',
      'age': '222',
      'dept': '2333'
    })
    alert("")
    userArr.push(newUser);
  }

  removeUser(i:any) {
    alert(i)
    let arr = this.addLoadTypeForm.get('users') as FormArray;

    arr.removeAt(i);
  }

  resetform() {
    this.addLoadTypeForm.reset();
  }


}
