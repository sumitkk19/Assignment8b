import { Component, EventEmitter, Input , OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // Add input decorator as it will receve the data from parent
  @Output() public MyEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  public message = "Hello From Child";

}
