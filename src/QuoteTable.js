import React from 'react'
import QuoteRow from './QuoteRow'

const QuoteTable = (props) => {
    const { quotes } = props.data
    // console.log(quotes)
    return (
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Quote</th>
                </tr>
            </thead>
            <tbody>
               {quotes.map((q, i) => {
                   return <QuoteRow key={i} quote={q} />
               })}
            </tbody>
        </table>
    )
}

export default QuoteTable