import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-errorMessage',
  templateUrl: './errorMessage.component.html',
  styleUrls: ['./errorMessage.component.scss']
})

export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string = 'Something went wrong, please try again later';
  constructor() { }

  ngOnInit(): void {
  }

}
