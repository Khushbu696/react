import { useState } from 'react'
import StarbucksLogo from './images/logo.png'
import Profile from './images/profile.png'
import Searchicon from './images/search.png'
import BestSeller from './images/Bestseller.png'
import Drinks from './images/Drinks.png'
import Food from './images/Food.png'
import Merchandise from './images/Merchandise.png'
import Coffeeathome from './images/CoffeeAtHome.png'
import Readytoeat from './images/ReadyToEat.png'
import Starbuckscup from './images/starbucks.png'
import Hotchoco from './images/hotchoco.png'
import Vanilla from './images/vanilla.png'
import Instagram from './images/instagram.png'
import Facebook from './images/facebook-app-symbol.png'
import Twitter from './images/twitter.png'
import Apple from './images/apple.png'
import Playstore from './images/playstore.png'
import './style.css'

function App() {

  return (
    <>
      <div class="head">
        <img id="left" src={StarbucksLogo} alt="Starbucks"/>
        <span id="home">Home</span>
        <span id="gift"> <a href="gift.html"> Gift </a> </span>
        <span id="order"> <a href="order.html"> Order </a> </span>
        <span id="pay"> <a href="pay.html"> Pay </a> </span>
        <span id="store"> <a href="store.html"> Store </a> </span>
        <span id="feedback"> <a href="feedback.html"> Feedback </a> </span>
        <span id="search"> <img src={Searchicon} alt="search"/> Looking for something specific ?</span>
        <img id="right" src={Profile} alt="profile"/>
    </div>

    <div class="head2">
        <span>Know More</span>
    </div>

    <h2>Handcrafted Curations</h2>
    <div class="fourth">
        <img src={BestSeller} alt="Bestseller"/>
        <img src={Drinks} alt="Drinks"/>
        <img src={Food} alt="Food"/>
        <img src={Merchandise} alt="Merchandise"/>
        <img src={Coffeeathome} alt="Coffee at home"/>
        <img src={Readytoeat} alt="Ready to eat"/>
    </div>

    <div class="fifth">
        <span id="bestseller">Bestseller</span>
        <span id="drinks">Drinks</span>
        <span id="food">Food</span>
        <span id="merchandise">Merchandise</span>
        <span id="coffeeathome">Coffee at Home</span>
        <span id="readytoeat">Ready to Eat</span>
    </div>

    <div class="sixth">
        <h2>Barsita Recommends</h2>
        <div class="sixthchild">
            <div class="cappuccino">
                <img src={Starbuckscup} alt="Cappuccino"/>
                <h3>Cappuccino</h3>
                <p>SHORT()</p>
                <div class="lower">
                    <span>₹283.50</span>
                    <span id="item">Add Item</span>
                </div>
            </div>
            <div class="hotchoco">
                <img src={Hotchoco} alt="Hot chocolate"/>
                <h3>Signature Hot Chocolate</h3>
                <p>SHORT(237mL)284 kcal</p>
                <div class="lower">
                    <span>₹309.75</span>
                    <span id="item">Add Item</span>
                </div>
            </div>
            <div class="vanilla">
                <img src={Vanilla} alt="Vanilla Milkshake"/>
                <h3>Vanilla Milkshake</h3>
                <p>TALL(354mL)PRE SERVE(354mL) 531 kcal</p>
                <div class="lower">
                    <span>₹378.00</span>
                    <span id="item">Add Item</span>
                </div>
            </div>
        </div>
    </div>

    <div class="seventh">
        <h2>Learn more about the world of coffee!</h2>
        <div class="coffee">
            <h1>Art & Science Of Coffee Brewing</h1>
            <p>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
            <span>Learn More</span>
        </div>
    </div>

    <div class="foot">
        <div class="bottom">
            <div class="row1">
                <img src={StarbucksLogo} alt="logo"/>
            </div>
            <div class="row2">
                <span id="title">About Us</span>
                <p>Our Heritage</p>
                <p>Coffeehouse</p>
                <p>Our Company</p>
            </div>
            <div class="row3">
                <span id="title">Responsibility</span>
                <p>Diversity</p>
                <p>Community</p>
                <p>Ethical Sourcing</p>
                <p>Environmental Stewardship</p>
                <p>Learn More</p>
            </div>
            <div class="row4">
                <span id="title">Quick Links</span>
                <p>Privacy Policy</p>
                <p>FAQs</p>
                <p>Starbucks India Mobile App <br/> Terms of Use</p>
                <p>Customer Service</p>
                <p>Delivery</p>
                <p>Season's Gifting</p>
                <p>Loyalty Program Terms and <br/> Conditions</p>
                <p>Starbucks Rewards Day Offer</p>
                <p>Beverage Subscription</p>
                <p>Diwali Bonus Star Offer</p>
            </div>
            <div class="row5">
                <span id="title">SOCIAL MEDIA</span>
                <p>
                    <img src={Instagram} alt="Instagram"/>
                    <img src={Facebook} alt="Facebook"/>
                    <img src={Twitter} alt="Twitter"/>
                </p>
            </div>
            <div class="row6">
                <div>
                    <img src={Apple} alt="Apple store"/>
                    <span>DOWNLOAD ON THE</span><br/>
                    <span>App Store</span>
                </div>
                <div>
                    <img src={Playstore} alt="Playstore"/>
                    <span>GET IT ON</span><br/>
                    <span>Google Play</span>
                </div>
            </div>
        </div>
        <div class="last">
            <div class="aa">Web Accessiblity</div>
            <div class="bb">Privacy Statement</div>
            <div class="cc">Terms of Use</div>
            <div class="dd">Contact Us</div>
        </div>
    </div>
    </>
  )
}

export default App
