import React, { useMemo, useState, useEffect } from 'react'
import { useTable, useFilters,useSortBy, usePagination } from 'react-table'
import '../assets/css/table.css';
import { Button, Dropdown,Row,Col } from 'react-bootstrap';
import { BsArrowDownUp} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import ImportModal from '../table/ImportModal';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';


export const Table = ({columns,data}) => {
  let mockData = useSelector((state)=>state.dataFromApi).dataFromApi;

//   useEffect(()=>{
//     // getData();
//     //  console.log("ticketData")
// },mockData)
 console.log("data inside table comp", data)
//  const DATA = useMemo(() => data, [])
	let list = columns.length > 0
  && columns.map((item, i) => {
  return (
    <Dropdown.Item eventKey={item.accessor}>{item.Header}</Dropdown.Item>
  )
}, this);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    rows,
    prepareRow,
    setFilter
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
    usePagination,
  )
  
  const themeState = useSelector((state)=>state.changeTheme);
  const {pageIndex}=state
  const [value,setValue]=useState('Filter');
  const [showModal,setShowModal]=useState(false);
  const [filterText,setFilterText]=useState('');
  const handleSelect=(e)=>{
    setValue(e)
  }
  const pages = page.filter((row) => {
    let flag = false;
    prepareRow(row);
    row.cells.forEach((cell, index) => {
        if (cell.value != null) { flag = true; }
    });
    return flag;
});
  const handleOnChange=(value,e)=>{
    setFilterText(e.target.value)    
    setFilter(value,e.target.value)
  }

  return (<>  
    {
      showModal==true ? <ImportModal showModal = {showModal} setShowModal = {setShowModal} handleYesButton ={()=>{console.log("upload file")
        setShowModal(false)}} />:null
    }
    <div className='table-container'>
   <h5>Ticket Details</h5> 
    <div className='ActionBar'>
      <div>
      <Form.Group>
          <Row>
            <Col>
          
            <Link to={{ pathname: "/ticketDetails/addNewTicket" }}>  <Button size="sm" style={{width:"100px",  height:"35px",background:"#4869BF"}}>
               + New Ticket 
              </Button></Link>
            </Col>
            <Col className="right">
            <Button
                  size="sm"
                  style={{width:"100px",  height:"35px",background:"#4869BF"}}
                onClick={()=>setShowModal(true)}
                >Import Ticket
                </Button>
            </Col>
          </Row>
        </Form.Group>
    </div>

    <span className='filter'>
      <Dropdown onSelect={handleSelect} className="dropdown">
      <Dropdown.Toggle style={{background:"#4869BF"}} >
        {value}
      </Dropdown.Toggle>
      <Dropdown.Menu>
      {list}
      </Dropdown.Menu>
    </Dropdown>
    {" "}
    Contains :<input
            type="text"
            value={filterText}
            onChange={(e) => handleOnChange(value,e) }
            defaultValue={filterText}
         />
    </span>
    
    </div>
    <div className='table-container'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} >
                  {column.render('Header')}
                  <BsArrowDownUp
                                color="black"
                                width="50%"
                                size="1.5em"
                                height="26"
                                className="m-l-5 upDownArrow"
                                {...column.getHeaderProps(
                                  column.getSortByToggleProps()
                                )}
                                ></BsArrowDownUp>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {pages.length===0 ?   <tr>
            <td colSpan={headerGroups[0].headers.length}>
             <h5 className="headingFont center centerMargin">No Results Found</h5>
            </td></tr>:
          pages.map((row,i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className={i % 2 === 0 ? "" : themeState.themeColor === "light" ? "stripsTableLightTheme": "stripsTableDarkTheme"}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='pagination-bar'>
      <button
                            size='sm'
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                            className= "fontFamilyCalibri pageButton">
                            Prev
                        </button>
                        <span>
                <strong>
                  {pageIndex+1} of {pageOptions.length}
                </strong>
              </span>
                <button
                  variant="outline-secondary"
                  size='sm'
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className= "fontFamilyCalibri pageButton">
                  Next
                  </button>{' '}
      </div>
    </div>
    </div>
    </>

  )
}