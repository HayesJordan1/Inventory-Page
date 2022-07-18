import './main.css';
import './main'

function InventoryGrid2(){
return(
  <html>
    <head>
      <link rel="stylesheet" href="main.css" />
    </head>
    <body>
    <header><h1>Inventory</h1></header>
    <main>
      <section class="sort-options">
        <button class="sort-name">Sort By Name</button>
        <button class="sort-left">Sort By Amount Left</button>
        <button class="sort-needed">Sort By Amount Needed</button>
        <button class="sort-more">Sort By How much more</button>

      </section>
      <section class="list-headers">
        <div class="header-title">Name</div>
        <div class="header-left">Amount Left</div>
        <div class="header-needed">Amount Needed</div>
        <div class="header-more">How much More Needed</div>

      </section>
   
      <section class="list">
       </section>
    
    </main>
    <script src="main.js"></script>
    </body>

  </html>


)
}
export default InventoryGrid2