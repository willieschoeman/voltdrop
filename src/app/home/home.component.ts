import { OnInit, Component, AfterViewInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  firstCounter: number
  secondCounter: number
  thirdCounter: number
  fourtCounter: number
  private timerOne
  private timerTwo
  private timerThree
  private timerFour

  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.firstCounter = 1
    this.secondCounter = 1
    this.thirdCounter = 1
    this.fourtCounter = 1
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
   })

  }

  ngAfterViewInit() {
    this.timerOne = setInterval(() => {
      this.firstCounter++

      if (this.firstCounter === 889) {
        this.cancel(this.timerOne)
      }

    }, 50)


    this.timerTwo = setInterval(() => {
      this.secondCounter++

      if (this.secondCounter === 12212) {
        this.cancel(this.timerTwo)
      }

    }, 20)

    this.timerThree = setInterval(() => {
      this.thirdCounter++

      if (this.thirdCounter === 21476) {
        this.cancel(this.timerThree)
      }

    }, 20)

    this.timerFour = setInterval(() => {
      this.fourtCounter++

      if (this.fourtCounter === 540) {
        this.cancel(this.timerFour)
      }

    }, 50)
  }
  
  get f() { return this.contactForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.contactForm.invalid) {
          return;
      }

      console.log(this.contactForm.value)

  }

  cancel(timer) {
    clearInterval(timer)
  }

}
