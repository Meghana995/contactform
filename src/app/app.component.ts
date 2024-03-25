import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contactform';

  @ViewChild('signInBtn', { static: true }) signInBtn!: ElementRef;
  @ViewChild('signUpBtn', { static: true }) signUpBtn!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(){

  }
  ngOnInit(): void {
    this.signUpBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add('sign-up-mode');
    });

    this.signInBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove('sign-up-mode');
    });
  }
}
