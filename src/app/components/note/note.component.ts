import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() public name: string = '';
  @Input() public descr: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
