import React from 'react'

const QuoteRow = (props) => {
    const { quote } = props
    return (
        <tr>
            <td>{quote.author}</td>
            <td>{quote.body}</td>
        </tr>

    )
}

export default QuoteRow