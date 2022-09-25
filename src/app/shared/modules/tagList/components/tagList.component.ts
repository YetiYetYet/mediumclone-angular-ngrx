import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-taglist',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.scss']
})

export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
