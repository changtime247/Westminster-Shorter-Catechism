function stripESV(str) {
  str = str.replaceAll('<note', '<span')
  str = str.replaceAll('</note>', '</span>')
  str = str.replaceAll(
    '<p>(<a href="http://www.esv.org" class="copyright">ESV</a>)</p>',
    ''
  )
  return str
}

export { stripESV }
