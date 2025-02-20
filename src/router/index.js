import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DocPage from "../views/DocPage.vue";

const routes = [
	{
		path: "/",
		component: HomePage,
		name: "home",
	},
	{
		path: "/front-end",
		redirect: "/front-end/introduction",
	},
	{
		path: "/front-end/:id",
		component: DocPage,
		name: "front-end",
		props: true,
	},
	{
		path: "/back-end",
		redirect: "/back-end/introduction",
	},
	{
		path: "/back-end/:id",
		component: DocPage,
		name: "back-end",
		props: true,
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	base: import.meta.env.BASE_URL,
	routes,
});

export default router;
