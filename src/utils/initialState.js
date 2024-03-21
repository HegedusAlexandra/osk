import pic1 from "../assets/pictures/c (1).jpg"
import pic2 from "../assets/pictures/c (2).jpg"
import pic3 from "../assets/pictures/c (18).jpg"
import pic4 from "../assets/pictures/c (4).jpg"
import pic5 from "../assets/pictures/c (5).jpg"
import pic6 from "../assets/pictures/c (6).jpg"
import pic7 from "../assets/pictures/c (7).jpg"
import pic8 from "../assets/pictures/c (8).jpg"
import pic9 from "../assets/pictures/c (9).jpg"
import pic10 from "../assets/pictures/c (10).jpg"
import pic11 from "../assets/pictures/c (11).jpg"
import pic12 from "../assets/pictures/c (12).jpg"
import pic13 from "../assets/pictures/c (17).jpg"
import pic14 from "../assets/pictures/c (14).jpg"

export const initialState= {
    products: [
      { id: 1, name: "Midnight Lace Corset", quantity: {sm:0,m:0,lg:0,xl:0,xxl:0} , store: {sm:0,m:1,lg:3,xl:0,xxl:0}, price: 10,url:pic1,type:'FEMALE'},
      { id: 2, name: 'Orange Baron Coat', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:1,m:1,lg:1,xl:1,xxl:0},  price: 20,url:pic2,atr:'object-bottom',type:'MALE'},
      { id: 3, name: 'Silken Whisper Blouse', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:3,xl:0,xxl:2}, price: 6,url:pic3,type:'FEMALE'},
      { id: 4, name: 'Aurora Chiffon Wrap', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:3,xl:0,xxl:2},price: 12,url:pic4,type:'FEMALE'},
      { id: 5, name: 'Ivory Elegance Trousers', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:2,m:5,lg:1,xl:0,xxl:0}, price: 12,url:pic5,type:'MALE'},
      { id: 6, name: 'Opaline Dream Shirt', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:1,m:0,lg:0,xl:2,xxl:10},price: 14,url:pic6,type:'FEMALE'},
      { id: 7, name: 'Celestial Silk Tops', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  ,  store: {sm:10,m:2,lg:0,xl:0,xxl:1},price: 3,url:pic7,type:'FEMALE'},
      { id: 8, name: "Lhama Coat", quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:2,m:1,lg:3,xl:1,xxl:2},price:18.6,url:pic8,type:'CHILD'},
      { id: 9, name: 'Velvetine Dusk Gown', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:3,m:3,lg:3,xl:1,xxl:1},price: 14.2,url:pic9,atr:'object-bottom',type:'FEMALE'},
      { id: 10, name: 'Golden Empress Midi Dress', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0} , store: {sm:0,m:1,lg:3,xl:0,xxl:2},price: 20,url:pic10,type:'FEMALE'},
      { id: 11, name: 'Platinum Poise Peacoat', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:3,xl:0,xxl:2},price: 25,url:pic11,type:'FEMALE'},
      { id: 12, name: 'Sapphire Serenade Suit ', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:0,lg:0,xl:0,xxl:0},price: 12,url:pic12,type:'FEMALE'},
      { id: 13, name: 'Echo Ridge Tee', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:13,xl:11,xxl:2},price:8.4 ,url:pic13,type:'MALE'},
      { id: 14, name: 'Canyon Trek Cargo Shorts', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:4,m:1,lg:7,xl:8,xxl:2},price: 15,url:pic14,atr:'object-top',type:'MALE'},
    ],
    filteredProducts: [{ id: 1, name: "Midnight Lace Corset", quantity: {sm:0,m:0,lg:0,xl:0,xxl:0} , store: {sm:0,m:1,lg:3,xl:0,xxl:0}, price: 10,url:pic1,type:'FEMALE'},
    { id: 2, name: 'Orange Baron Coat', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:1,m:1,lg:1,xl:1,xxl:0},  price: 20,url:pic2,atr:'object-bottom',type:'MALE'},
    { id: 3, name: 'Silken Whisper Blouse', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:3,xl:0,xxl:2}, price: 6,url:pic3,type:'FEMALE'},
    { id: 4, name: 'Aurora Chiffon Wrap', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:3,xl:0,xxl:2},price: 12,url:pic4,type:'FEMALE'},
    { id: 5, name: 'Ivory Elegance Trousers', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:2,m:5,lg:1,xl:0,xxl:0}, price: 12,url:pic5,type:'MALE'},
    { id: 6, name: 'Opaline Dream Shirt', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:1,m:0,lg:0,xl:2,xxl:10},price: 14,url:pic6,type:'FEMALE'},
    { id: 7, name: 'Celestial Silk Tops', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  ,  store: {sm:10,m:2,lg:0,xl:0,xxl:1},price: 3,url:pic7,type:'FEMALE'},
    { id: 8, name: "Lhama Coat", quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:2,m:1,lg:3,xl:1,xxl:2},price:18.6,url:pic8,type:'CHILD'},
    { id: 9, name: 'Velvetine Dusk Gown', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:3,m:3,lg:3,xl:1,xxl:1},price: 14.2,url:pic9,atr:'object-bottom',type:'FEMALE'},
    { id: 10, name: 'Golden Empress Midi Dress', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0} , store: {sm:0,m:1,lg:3,xl:0,xxl:2},price: 20,url:pic10,type:'FEMALE'},
    { id: 11, name: 'Platinum Poise Peacoat', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:3,xl:0,xxl:2},price: 25,url:pic11,type:'FEMALE'},
    { id: 12, name: 'Sapphire Serenade Suit ', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:0,lg:0,xl:0,xxl:0},price: 12,url:pic12,type:'FEMALE'},
    { id: 13, name: 'Echo Ridge Tee', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:0,m:1,lg:13,xl:11,xxl:2},price:8.4 ,url:pic13,type:'MALE'},
    { id: 14, name: 'Canyon Trek Cargo Shorts', quantity: {sm:0,m:0,lg:0,xl:0,xxl:0}  , store: {sm:4,m:1,lg:7,xl:8,xxl:2},price: 15,url:pic14,atr:'object-top',type:'MALE'},]
  };
