import "./CartSidebar.css";

function CartSidebar({ cartItems, onRemoveItem, onCheckout }) {
    // Calculate total price dynamically
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <aside className="cart-sidebar">
            <div className="cart-header">
                <h3>Your Gallery Cart</h3>
                <span className="cart-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
            </div>

            <div className="cart-items-container">
                {cartItems.length === 0 ? (
                    <div className="empty-cart-message">
                        <p>Your cart is empty.</p>
                        <p className="subtext">Explore the gallery and add your favorite masterpieces!</p>
                    </div>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="cart-item-row">
                            <img src={item.image} alt={item.title} className="cart-item-thumb" />
                            <div className="cart-item-details">
                                <h4>{item.title}</h4>
                                <p className="cart-item-artist">{item.artist}</p>
                                <p className="cart-item-price">${item.price}</p>
                            </div>
                            <button
                                className="remove-item-btn"
                                onClick={() => onRemoveItem(index)}
                                title="Remove item"
                            >
                                ×
                            </button>
                        </div>
                    ))
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total-row">
                        <span>Total:</span>
                        <span className="cart-total-price">${totalPrice}</span>
                    </div>
                    <button className="checkout-btn" onClick={onCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </aside>
    );
}

export default CartSidebar;