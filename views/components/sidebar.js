const sidebar = async (data = {}) => {
console.log("🚀 ~ sidebar ~ data:", data)

    if (data.role === 3) {
        return await sidebar_admin(data.role);
    } else {
        return await sidebar_store(data.role);
    }

}
const sidebar_admin = async () => {
    return `
    <div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
        <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">

            <div class="sidenav-menu-heading">Product Management</div>

                <a class="nav-link" href="/product-add">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Product Add
                </a>

                <a class="nav-link" href="/product">
                    <div class="nav-link-icon"><i class="fa-solid fa-gift"></i></div>Product List
                </a>

                <div class="sidenav-menu-heading">Category Management</div>

                <a class="nav-link" href="/sub-category-add">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Sub Category Add
                </a>

                <a class="nav-link" href="/sub-category-list">
                    <div class="nav-link-icon"><i class="fa-solid fa-gift"></i></div>Sub Category List
                </a>
                
                <div class="sidenav-menu-heading">Order Management</div>
                
                <a class="nav-link" href="/orders">
                    <div class="nav-link-icon"><i class="fa-solid fa-gift"></i></div>Order List
                </a>

                <a class="nav-link" href="/order-payment">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Order Payment
                </a>

                <div class="sidenav-menu-heading">Price Management</div>

                <a class="nav-link" href="/product-price">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Price Adjustment
                </a>

                <div class="sidenav-menu-heading">Discount Management</div>

                <a class="nav-link" href="/bank-management">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Bank Management
                </a>

                <a class="nav-link" href="/card-discount-add">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Card Discounts Add
                </a>

                <a class="nav-link" href="/card-discount-list">
                    <div class="nav-link-icon"><i class="fa-solid fa-layer-group"></i></div>Card Discounts List
                </a>

            </div>

        </div>
        <!-- Sidenav Footer-->
        <div class="sidenav-footer">
        </div>
    </nav>
</div>`;
}

const sidebar_store = async () => {
    return `
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
</div>`};


module.exports = { sidebar }; 
