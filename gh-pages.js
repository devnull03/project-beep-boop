import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/devnull03/project-beep-boop.git', // Update to point to your repository
  user: {
   name: 'Arnav Mehta', // update to use your name
   email: '56480041+devnull03@users.noreply.github.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);