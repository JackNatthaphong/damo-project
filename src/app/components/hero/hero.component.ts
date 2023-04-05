import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor() { }
  listHero: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'necromancer' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tomado' },
  ];

  ngOnInit(): void {
    this.listHero.forEach(this.CerateHeros);
  }

  CerateHeros(hero: Hero) {
    const newLI = document.createElement("li");
    newLI.style.cursor = 'pointer';
    newLI.append(`${hero.id} ${hero.name}`);
    newLI.addEventListener('click', () => {
      const res = document.getElementById("myhero")! as HTMLLabelElement;
      res.style.textDecoration = 'underline';
      res.textContent = `${hero.name}`;
    });
    const list = document.getElementById("herolist")!;
    list.append(newLI);
  }
}

interface Hero {
  id: number,
  name: string
}
