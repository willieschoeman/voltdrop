import { OnInit, Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('emailModal') emailModal: ElementRef
  public modalRef: BsModalRef
  firstCounter: number
  secondCounter: number
  thirdCounter: number
  fourtCounter: number
  private timerOne
  private timerTwo
  private timerThree
  private timerFour
  emailMessage: string
  showEmail: boolean

  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
        private apiService: ApiService,
        private modalService: BsModalService
    ) {
    this.firstCounter = 1
    this.secondCounter = 1
    this.thirdCounter = 1
    this.fourtCounter = 1
    this.showEmail = false
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
   })

   this.showEmail = false

  }

  ngAfterViewInit() {
    this.timerOne = setInterval(() => {
      this.firstCounter++

      if (this.firstCounter === 341) {
        this.cancel(this.timerOne)
      }

    }, 100)


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

    }, 15)

    this.timerFour = setInterval(() => {
      this.fourtCounter++

      if (this.fourtCounter === 442) {
        this.cancel(this.timerFour)
      }

    }, 140)
  }
  
  get f() { return this.contactForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.showEmail = false;

      if (this.contactForm.invalid) {
          return;
      }

      let payload = {
        "name": this.contactForm.get("name").value,
        "email": this.contactForm.get("email").value,
        "subject": this.contactForm.get("subject").value,
        "message": this.contactForm.get("message").value
      }

      this.apiService.sendEmail(payload).subscribe(res => {
          this.emailMessage = 'Thank you for your email. We will be in contact.'
          this.showEmail = true
          this.showEmailModal()
      }, error => {
        this.emailMessage = 'Unable to send email. Please try again!'
        this.showEmail = true
      })

  }

  showEmailModal() {
    this.modalRef = this.modalService.show(this.emailModal)
  }

  hideModal() {
    this.modalRef.hide()
  }

  goToFacebook() {
    window.open('https://www.facebook.com/pages/category/Business-Service/Volt-Drop-Electrical-2111756612447279/', "_blank");
  }

  cancel(timer) {
    clearInterval(timer)
  }

}
