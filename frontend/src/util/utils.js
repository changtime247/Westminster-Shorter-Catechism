function stripESV(str) {
  str = str.replaceAll('<note', '<span')
  str = str.replaceAll('</note>', '</span>')
  str = str.replaceAll(
    '<p>(<a href="http://www.esv.org" class="copyright">ESV</a>)</p>',
    ''
  )

  let smallStart = str.indexOf('<small')
  let smallEnd = str.indexOf('small>')

  str = `${str.slice(0, smallStart)}${str.slice(smallEnd + 6)}`

  let h2End = str.indexOf('h2>')

  str = `${str.slice(
    0,
    h2End + 3
  )} <span className='esv-logo'>ESV</span>${str.slice(h2End + 3)}`

  return str
}

export { stripESV }
