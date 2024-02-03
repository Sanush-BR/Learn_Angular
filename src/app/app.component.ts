import { Component, ElementRef, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  suggestUserName() {
    const suggestedName = 'Superuser';
    // setValue()
    // patchValue()
    // this method is used to update the forms set u need to pass whole form object
    // form gets populated this overrides all fields
    // this.formData.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   gender:'male',
    //   secret:'pet'
    // })
    // it only updates specific input element
    this.formData.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  secret:String = 'teacher';
  // @ViewChild() Accessing the local reference directly without passing data to function
  @ViewChild("f",{static:true})formData:NgForm;
  @ViewChild("email",{static:true})emailData:ElementRef;
  genders:string[] = ['male','female'];

  onSubmit(){
    // Will get a form object
    // console.log(this.formData)
    // console.log(this.emailData);
    console.log(this.formData.value);
  }

  // resetting the form u can call reset() on signUp form
  // this.formData.reset()

}
