import Page404 from '../pages/404';
import About from '../pages/About';
import Address from '../pages/Address';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import Blog from '../pages/Blog';
import Blogs from '../pages/Blogs';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Product from '../pages/Product';
import Shop from '../pages/Shop';
import { ABOUT_ROUTE, ADDRESS_ROUTE, ADMIN_ROUTE, BLOGS_ROUTE, BLOG_ROUTE, CART_ROUTE, CONTACT_ROUTE, FAQ_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOTFOUND_ROUTE, ORDER_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: CART_ROUTE,
        Component: Cart,
    },
    {
        path: ORDER_ROUTE,
        Component: Order,
    },
    {
        path: ADDRESS_ROUTE,
        Component: Address,
    }
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: NOTFOUND_ROUTE,
        Component: Page404,
    },
    {
        path: ABOUT_ROUTE,
        Component: About,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
    },
    {
        path: BLOGS_ROUTE,
        Component: Blogs,
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact,
    },
    {
        path: FAQ_ROUTE,
        Component: Faq,
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product,
    }
];