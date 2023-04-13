export const COLUMNS=[
    {
        Header:"Ticket ID",
        accessor:'id'
    },
    {
        Header:"Name",
        accessor:'name'
    },
    {
        Header:"Decription",
        accessor:'description',
        Cell: (cell) => {
            const val = cell.value;
            const text = val;
            const count =30;
            const limitCellData =text.slice(0, count) + (text.length > count ? "..." : "") ;
            return (
                <div className={text !== undefined ? text.length > count ? text.length > 52 ? "tooltipDesignscrollFirstColumn" : "tooltipDesignFirstColumn" : null : null}>
                    
                        {limitCellData}
                
                    <span className={text !== undefined ? text.length > count ? text.length > 52 ? "tooltipTextscrollFirstColumn" : "tooltipTextFirstColumn" : "displayNone" : null}>{val}</span>
                </div>);
        }

    },
    {
        Header:"Email",
        accessor:'email'
    },
    {
        Header:"Priority",
        accessor:'priority'

    },
    {
        Header:"Seat no",
        accessor:'seat_number'
    }
]