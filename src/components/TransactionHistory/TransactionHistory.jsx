import React from 'react'
import PagesWrapper from '../Wrapper/PagesWrapper'
import Table from './Table'
import TableHeader from './TableHeader'

function TransactionHistory() {
  return (
    <PagesWrapper>
      <TableHeader/>
      <Table/>
    </PagesWrapper>
  )
}

export default TransactionHistory
