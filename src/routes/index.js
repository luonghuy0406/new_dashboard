import AboutUs from '../pages/AboutUs';
import Brand from '../pages/Brand';
import ChildBrand from '../pages/Brand/ChildBrand';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import ChildProduct from '../pages/Products/ChildProduct';
import ListProducts from '../pages/Products/ListProduct';
import Service from '../pages/Service';

// public view
const publicRoutes = [
    {path:'/dashboard',component:Products,label:"ABOUT US",layout:"dashboard"},
    {path:'/',component:Home,label:"Home"},    
    {path:'/about',component:AboutUs,label:"ABOUT US"},
    {path:'/product',component:Products,label:"Product"},
    {path:'/brand',component:Brand,label:"Brand"},
    {path:'/business',component:Service,label:"Our business"},
    {path:'/brand/:id',component:ChildBrand},
    {path:'/product/:id',component:ListProducts},
    // {path:'/product/pump/:id',component:ChildProduct},
    {path:'/product/:id1/:id2',component:ChildProduct},
    // {path:'/product/thermoplastic_high_pressure_hoses/:id',component:ChildProduct},
    // {path:'/product/thermometer/:id',component:ChildProduct},
    // {path:'/product/chart_recorder/:id',component:ChildProduct},
    // {path:'/product/chart_paper_n_pen/:id',component:ChildProduct},
    {path:'/404',component:NotFound,label:"404",layout:null},
    {path:'*',component:NotFound,layout:null},
    // {path:'/product',component:Products, layout: null,label:"Product"},
]

//need to login
const privateRoutes = [

]

export {publicRoutes,privateRoutes}