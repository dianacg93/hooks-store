const HomePage = ({saleItem, edit, editItem, changeItem}) => {
    return(
        <div>
            <h1>My Hardware Store</h1>
            <div>
                <span>Currently on Sale : {saleItem}!</span>
                <span>
                    <button onClick={editItem}>
                        {edit? "Hide" : "Edit Sale Item"}
                    </button>
                </span>
                <div>
                    {edit? 
                    <div><input type="text" value={saleItem} onChange={changeItem}/></div> : 
                    null}
                </div>
            </div>
        </div>
    )
}

export default HomePage;