import { ISkill, Project } from 'src/app/models/interfaces/project.interface';

export const COMMERCIAL_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Game pog',
    description: 'Online gaming platform that offers a variety of games. It likely employs modern web technologies. It was made in the' +
      ' team of 3 people (UX/UI, backend, frontend). I was responsible for the frontend part of this project including the animations.',
    technologies: [
      ISkill.ANGULAR,
      ISkill.HTML,
      ISkill.CSS,
      ISkill.TS,
      ISkill.SASS,
      ISkill.ANGULAR_MATERIAL,
      ISkill.RXJS,
      ISkill.NGRX,
      ISkill.GIT
    ],
    image: {
      slider: '/projects/game-pog/slider.png',
      main: [''],
    },
    github: '',
    deploy: 'https://gamepog.com/'
  },
  {
    id: 2,
    name: 'Game host',
    description: `Platform to earn money by clicking on ads. This project contains a lot of custom animations. It was made in the team of 3
                  people (UX/UI, backend, frontend). I was responsible for the frontend part of this project.`,
    technologies: [
      ISkill.ANGULAR,
      ISkill.HTML,
      ISkill.CSS,
      ISkill.TS,
      ISkill.SASS,
      ISkill.ANGULAR_MATERIAL,
      ISkill.TAILWIND,
      ISkill.RXJS,
      ISkill.GIT
    ],
    image: {
      slider: '/projects/game-host/slider.png',
      main: [''],
    },
    github: '',
    deploy: ''
  },
  {
    id: 3,
    name: 'EventUI',
    description: `In a team of 4 developers we created a large platform for organizing events.<br><br>
                  Thanks to this platform, the organiser has the ability to automatically create the multilingual website for his event, add/edit all
                  the information and media on this site.<br><br>
                  He can create the registration form with the necessary fields that will be used by the users to register for his event. The organiser
                  can always see the list of registered users with the necessary information from the registration form. More than that, he can contact
                  with users (or selected users) by e-mail or SMS from the platform.<br><br>
                  We have also prepared a system that helps the organiser to create and use videoconferences from the platform. Finally, the organiser
                  can sell whatever he wants. He can add necessary products and he will always be able to check the statistics of his shop.<br><br>
                  What is even more important, the organiser can easily add his shop and videoconferences to the event website thanks to specially
                  prepared web components.<br><br>
                  I have been responsible for writing code to implement new platform features using the Angular v15-v17 framework. I was responsible for md-tokens based material design layout. I created a lot of reactive forms and also created custom universal form controls.
                  Additionally, I created web components (microfrontends) using Angular v17, maintained and added new functionality to websites built using
                  WordPress and PHP. Finally, I've been adding the ability for organisers to easily add our web components to their event websites
                  by writing new WordPress widgets using PHP.`,
    technologies: [
      ISkill.ANGULAR,
      ISkill.HTML,
      ISkill.CSS,
      ISkill.TS,
      ISkill.SASS,
      ISkill.ANGULAR_MATERIAL,
      ISkill.TAILWIND,
      ISkill.MATERIAL_WEB,
      ISkill.WORDPRESS,
      ISkill.PHP,
      ISkill.JS,
      ISkill.WEB_COMPONENTS,
      ISkill.MYSQL,
      ISkill.REACTIVE_FORMS,
      ISkill.RXJS,
      ISkill.RX_ANGULAR,
      ISkill.GIT
    ],
    image: {
      slider: '/projects/event-ui/slider.png',
      main: [''],
    },
    github: '',
    deploy: 'https://app.eventui.pl'
  },
];
