import { Component } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

interface Sound {
  id: number;
  name: string;
  filename: string;
  url: string;
}

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class SoundListComponent {
  displayedColumns: string[] = ['id', 'name', 'filename'];
  selectedSound: Sound | null = null;

  sounds: Sound[] = [
    {
      id: 1,
      name: 'Rain Sound',
      filename: 'rain.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: 2,
      name: 'Nature Sound',
      filename: 'nature.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 3,
      name: 'Piano Melody',
      filename: 'piano.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
  ];

  onRowClick(sound: Sound) {
    this.selectedSound = sound;
  }

  isSelected(sound: Sound) {
    return this.selectedSound?.id === sound.id;
  }
}
