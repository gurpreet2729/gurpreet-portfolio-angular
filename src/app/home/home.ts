import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-home',
  imports: [NgxParticlesModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  particlesOptions = {
    particles: {
      number: { value: 60 },
      links: {
        enable: true,
        distance: 150,
        color: '#888'
      },
      move: {
        enable: true,
        speed: 1
      },
      size: {
        value: 2
      }
    }
  };
}