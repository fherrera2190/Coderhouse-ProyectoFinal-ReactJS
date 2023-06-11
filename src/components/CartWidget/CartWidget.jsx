function CartWidget() {
    return (
        <>

            <button type="button" className="btn btn-primary position-relative">
                <i className="bi bi-cart4"></i>
                <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                    {/* <span class="visually-hidden">unread messages</span> */}
                </span>
            </button>
        </>
    );
}

export default CartWidget;