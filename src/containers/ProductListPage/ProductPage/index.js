import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';

/**
* @author
* @function ProductPage
**/

const ProductPage = (props) => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const { page } = product;

  useEffect(() => {
    
    const params = getParams(props.location.search);
    const payload = {
      params
    }

    dispatch(getProductPage(payload));
  }, []);

  return(
    <div style={{ margin:"5px 10px", textAlign:"center" }}>
      <h3>{page.title}</h3>
      <Carousel autoPlay="true" infiniteLoop="true"
        renderThumbs={() => {}}
      >
        {
          page.banners && page.banners.map((banner,index) =>
            <a 
              key={index}
              style={{ display: 'block' }}
              href={banner.navigateTo}
            >
              <img src={banner.img} alt="" />
            </a>
          )
        }
      </Carousel>
      <div style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        margin:"5px"  
      }}>
        {
          page.products && page.products.map((product,index) => 
            <Card 
              key={index}
              style={{
                width:"400px",
                height: "200px",
                margin: "0 5px"
              }}
            >
              <img src={product.img} alt="" style={{width:"100%",height:"100%"}}/>
            </Card>
          )
        }
      </div>
    </div>
   )

 }

export default ProductPage