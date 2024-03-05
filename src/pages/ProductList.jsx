import React,{useState,useEffect} from 'react'
import ProductListContainer from '../components/ProductListContainer'
import Menu from '../components/Menu'
import Footer from './Footer'
import MobileMenu from '../components/MobileMenu'
import OrderButton from '../components/OrderButton'

export default function ProductList() {

  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('#footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isFooterVisible = footerRect.top < windowHeight;
        setIsFooterVisible(isFooterVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isFooterVisible);

  return (
    <div className="absolute z-2 w-[100%] h-[500vh] bg-transparent">
         {window.innerWidth > 780 ? <Menu screen={"list"} /> : <MobileMenu/>}
        <ProductListContainer/>
        <div className={`${isFooterVisible ? 'top-[10vh]' : 'bottom-[2vh]'} fixed z-20  right-[5vh]`}><OrderButton/></div>
        <Footer/>
    </div>
  )
}
