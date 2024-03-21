const sidebar =
    `
    <div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
        <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
                
                <div class="sidenav-menu-heading">Order Management</div>
                
                <a class="nav-link" href="/orders">
                    <div class="nav-link-icon"><i class="fa-solid fa-gift"></i></div>Order List
                </a>

                <a class="nav-link" href="/order-payment">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Order Payment
                </a>

            </div>

        </div>
        <!-- Sidenav Footer-->
        <div class="sidenav-footer">
        </div>
    </nav>
</div>`;


module.exports = { sidebar }; 
