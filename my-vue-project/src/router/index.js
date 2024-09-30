import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../components/HelloWorld.vue'; // Adjust the path as needed
import Profile from '../components/ProfileTest.vue'; // Adjust the path as needed

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Menu
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
