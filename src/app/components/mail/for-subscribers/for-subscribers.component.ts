import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Mail } from 'src/app/models/mail';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-for-subscribers',
  templateUrl: './for-subscribers.component.html',
  styleUrls: ['./for-subscribers.component.css']
})
export class ForSubscribersComponent {
  model: any = { for: 'Subscribers' };

  constructor(private mailService: MailService,
    private alertify: AlertifyService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  onFormSubmit() {
    this.spinner.show();

    this.mailService.sendForSubscribers(this.model).subscribe({
      next: () => {
        this.spinner.hide();
        this.alertify.success('Mail has been sent successfully for all subscribers');
        this.router.navigate(['/mail/mails']);
      },
      error: error => {
        this.spinner.hide();
        this.alertify.error(error.error);
      }
    });
  }
}
