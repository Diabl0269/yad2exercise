import numeral from 'numeral'

export default price =>
  price ? '₪' + numeral(price).format('0,00') : 'לא צויין מחיר'
