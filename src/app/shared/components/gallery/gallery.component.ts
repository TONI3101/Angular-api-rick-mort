import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() characterList: any [] = []
  constructor() { }

  ngOnInit(): void {
  }

}
