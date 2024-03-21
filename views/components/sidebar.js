const sidebar =
    `
    <div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
        <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
                
                <div class="sidenav-menu-heading">Product Management</div>
                
                <a class="nav-link" href="/product">
                    <div class="nav-link-icon"><i class="fa-solid fa-gift"></i></div>Product List
                </a>

                <a class="nav-link" href="/product-add">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Product Add
                </a>


                <!-- Sidenav Menu Heading (Core)-->
                <div class="sidenav-menu-heading">Sub Category Management</div>
                <!-- Sidenav Accordion (Dashboard)-->
                
                <a class="nav-link" href="/sub-category-list">
                    <div class="nav-link-icon"><i class="fa-solid fa-gift"></i></div>Sub Category List
                </a>

                <a class="nav-link" href="/sub-category-add">
                    <div class="nav-link-icon"><i class="fa-solid fa-gift"></i></div>Sub Category Add
                </a>

            </div>

        </div>
        <!-- Sidenav Footer-->
        <div class="sidenav-footer">
        </div>
    </nav>
</div>`;


module.exports = { sidebar }; 
