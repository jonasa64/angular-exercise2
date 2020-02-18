import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `<img src="{{data.image}}"/><br>
 title {{data.title}} <br>
  rating {{data.rating}}`,
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
