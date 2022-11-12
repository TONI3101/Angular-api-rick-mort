import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from 'src/app/shared/services/character-service.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  characters: any = []

  constructor(private charactersService: CharacterServiceService) {}

  ngOnInit(): void {
    this.change(1)


  }

  change(page: number){
    this.charactersService.getcharacters(page).subscribe((res: any) =>{
      console.log(res);

      this.characters = res.results;
    })

  }



}
