import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper} from '@mui/material';
import Button from '@mui/material/Button';

function Expense({ expense, onDeleteExpense, setExpenseFormMode, setExpense }){

    function handleDeleteExpense(){
        onDeleteExpense(expense)
        console.log('deleted')
    }

    function handleEditExpense(){
        setExpenseFormMode('update')
        setExpense(expense)
    }

    return (
        <TableContainer 
            component={Paper} 
                sx={{ 
                    margin: 'auto', 
                    width: '20%', 
                    maxWidth: '100%', 
                    mb:5, 
                    boxShadow: '0px 10px 15px 5px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    transform: 'scale(1)',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '0px 4px 8px -2px rgba(0,0,0,0.3), 0px 7px 10px 1px rgba(0,0,0,0.2), 0px 2px 16px 1px rgba(0,0,0,0.18)'
                    }

                }}>
            <Table aria-label="simple table">
                <TableBody>

                        <TableRow>
                            <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell>{expense.name}</TableCell>
                        </TableRow>
                    
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Amount</TableCell>
                            <TableCell>{expense.amount}</TableCell>
                        </TableRow>
                    
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Date Incurred</TableCell>
                            <TableCell>{expense.date_incurred}</TableCell>
                        </TableRow>
                    
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Category</TableCell>
                            <TableCell>{expense.category}</TableCell>
                        </TableRow>
                    
                        <TableRow sx={{ alignItems: 'center'}}>
                            <TableCell colSpan={2} sx={{ textAlign: 'center' }}>
                                <Button color="secondary"
                                    variant="outlined"
                                    onClick={() => handleEditExpense()} 
                                    style={{
                                        marginTop: '5px',
                                        border: 'none', 
                                        padding: 0, 
                                    }}>
                                    Edit Expense
                                </Button>
                                {' '}
                                <br/>
                                <Button 
                                        color="secondary"
                                        variant="outlined"
                                        onClick={() => handleDeleteExpense()} 
                                        style={{
                                            border: 'none', 
                                            padding: 0, 
                                        }}
                                    >
                                    Delete Expense
                                </Button>
                            </TableCell>
                        </TableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
        
        // <div>
        //    <span style={{fontWeight: 'bold'}}>Name</span><span>: {expense.name}</span>
        //     <br></br>
        //     <span style={{fontWeight: 'bold'}}>Amount</span><span>: {expense.amount}</span>
        //     <br></br>
        //     <span style={{fontWeight: 'bold'}}>Date Incurred</span><span>: {expense.date_incurred}</span>
        //     <br></br>
        //     <span style={{fontWeight: 'bold'}}>Category</span><span>: {expense.category}</span>
        //     <br></br>
        //     <Button 
        //         color="secondary"
        //         variant="outlined"
        //         onClick={() => handleEditExpense()} 
        //         style={{
        //             marginTop: '5px',
        //             border: 'none', 
        //             padding: 0, 
        //         }}
        //     >
        //         Edit Expense
        //     </Button>
        //     <br></br>
        //     <Button 
        //         color="secondary"
        //         variant="outlined"
        //         onClick={() => handleDeleteExpense()} 
        //         style={{
        //             border: 'none', 
        //             padding: 0, 
        //         }}
        //     >
        //         Delete Expense
        //     </Button>
        //     <br></br>
        //     <br></br>
        //     <br></br>
        //     <br></br>
        // </div>
    )
}

export default Expense;