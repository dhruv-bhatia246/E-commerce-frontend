import React from 'react'
import Layout from '../../components/Layout'
import './style.css';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return (
    <>
      <Layout />
      <div className="main-div" >
        <p className="p1">This web application implements the basic features of Flipkart web app and in not a complete clone of it. Hence, to test the functionlity of this, you can try the following steps:</p>
        <ol>
          <li>
            Create an account using signup or Login using given credentials:
            <ul>
              <li>
                Email: ak@gmail.com
              </li>
              <li>
                Password: 123456
              </li>
            </ul>
          </li>
          <li>
            In the navbar menu, hover on electronics.
          </li>
          <li>
            Under mobiles section, click on Samsung.
          </li>
          <li>
            Click on any mobile you like.
          </li>
          <li>
            Then, click on add to cart if you want to add multiple items in your cart or buy now to directly checkout with the item shown on your screen.
          </li>
          <li>
            Click on place order to continue to with the products in cart.
          </li>
          <li>
            Select the address you want to deliver the product add or add new if no address is saved. You can also edit the previously saved address by selecting it and then clicking on edit button on the right side.
          </li>
          <li>
            Now, check the order summary and review the order. Click on continue to move to the final step i.e. payment. 
          </li>
          <li>
            Finally, select the payment method available and click on confirm order.
          </li>
          <li>
            To view the order, hover on Profile menu in the navbar and click on orders.
          </li>
        </ol>
      </div>
    </>
  )

}

export default HomePage