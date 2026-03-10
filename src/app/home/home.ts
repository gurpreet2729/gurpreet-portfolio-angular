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
    fullScreen: {
      enable: false
    },
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: '#2563eb'
      },
      links: {
        color: '#2563eb',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1
      },
      number: {
        value: 50
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: { min: 1, max: 3 }
      }
    }
  };

  goToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}

downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'GurpreetdotNetCV.pdf';
  link.click();
}
}