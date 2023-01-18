import { DataService } from './../../services/data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() public name: string = '';
  @Input() public descr: string = '';
 
  @Output() closeAction: EventEmitter<void> = new EventEmitter();
  data: Observable<{ title: string, descr: string }[]> = null!;


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataService.getAsyncData();
  }

}
