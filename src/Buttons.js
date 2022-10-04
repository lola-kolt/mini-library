function Buttons({filteredBooks}) {
    return(
        <div className="cont back">
            <button className="change" onClick={() => filteredBooks("art")}>Art</button>
            <button className="change" onClick={() => filteredBooks("romance")}>Romance</button>
            <button className="change" onClick={() => filteredBooks("food")}>Food</button>
            <button className="change" onClick={() => filteredBooks("computers")}>Computers</button>
            <button className="change" onClick={() => filteredBooks("health")}>Health</button>
        </div>
    )
}

export default Buttons;