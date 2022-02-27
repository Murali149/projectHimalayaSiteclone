function navigationBar(){
    return `<div id="freeShippingOffer"> <span class="smallFont"><span class="largeFont">FREE SHIPPING</span> ON ALL ORDERS OVER $35!</span></div>
       
    <div id="navBar">

        <div id="leftNavbar">
            
            <div id="index" onclick="goToIndex()"> <img id="logo" src="./images/himalayaLogo.jpg" alt=""> </div>
            
            <div id="shop"> Shop

                <div id="dropDownContent">

                    <div id="mainMenu">
                        <div>
                            <h4>Herbal Supplements</h4>
                            <a href="./singleHerbs.html">Single Herb Supplements</a>
                            <a href="./singleHerbs.html">Multi-Ingredient Supplements</a>
                        </div>
                        <div>
                            <h4>Oral Care</h4>
                            <a href="./singleHerbs.html">Adult Toothpaste</a>
                            <a href="./singleHerbs.html">Kids Toothpaste</a>
                        </div>
                        <div>
                            <h4>Personal Care</h4>
                            <a href="./singleHerbs.html">Face Care</a>
                            <a href="./singleHerbs.html">Cleansing Bars</a>
                            <a href="./singleHerbs.html">Balm</a>
                        </div>
                    </div>

                    <div id="itemAd">
                        <div id="imageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA_Ashwagandha_90ct_Carton_Bottle_410x.jpg?v=1603142607" alt="">
                        </div>
                        <div id="imageInfoBox">
                            <h4>Featured Products</h4>
                            <p>Find out why everyone loves bestselling OrganicAwhwagandha</p>
                        </div>
                    </div>

                </div>

            </div>

            <div id="about" onclick="goToAbout()">About </div>
            <div id="StoreLocator" onclick="goToStoreLocation()"> Store Locator </div>
        </div>

        <div id="rightNavbar">
            
            <div id="search" class="rightnavbtnDivs" onclick="ShowSearchBar()"><button class="rightnavbtns">Search <i class="fa-thin fa-magnifying-glass"></i> </button> <p class="navHovers">Search</p> </i></div>
            <div id="showSearchBar">
                <div id="searchBarText"> <p> What are you Looking for?</p> <a href="">X</a> </div>
                <div id=searchBarBox"> <input type="text" placeholder="Search Products...">  <i class="fa-thin fa-magnifying-glass"></i> </button> <p class="navHovers">Search</p> </i></div>
            </div>

            <div id="myAccount" class="rightnavbtnDivs" onclick="">
                 <button  class="rightnavbtns" id="dropDownBtn" onclick="showMyAccOptions()">MyAccount<i class="fa-thin fa-user" ></i></button> 
                 <p class="navHovers">MyAccount</p> 
                 <div id="myAccountDropDown" class="dropdown-content">
                     <a href="signIn.html">Sign In</a>
                     <a href="signUp.html">Register</a>
                     <a href="checkOut.html">Check Out</a>
                     <a href="" id="closeMyAccdiv">   Close  </a>
                 </div> 
            </div>

            <div id="cart" class="rightnavbtnDivs" onclick="goToCart()">   <button  class="rightnavbtns"> Cart<i class="fa-thin fa-cart-circle-check"></i></button><p class="navHovers">Cart</p></div>
        
        </div>

    </div>

    <div id="navPath">
        
    </div>`
}

export default navigationBar;