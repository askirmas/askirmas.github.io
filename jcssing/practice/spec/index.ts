import {writeFileSync} from 'fs'
// import css1 from "!!raw-loader!./builder.css"
// import css2 from "!!raw-loader!./resvis.css"

if (module.parent === null)
  [
    './builder.css',
  //  './resvis.css'
  ].forEach(p => writeFileSync(`${p}.json`, JSON.stringify(
    parseCss(
      readingSync(p, module.filename)
    )
, null, 2)))

export {
  parseCss
}

function readingSync(path: string, filepath: string) :string {
  // require('!!raw-loader!./resvis.css') is not working at least in ts
  const {readFileSync} = require('fs')
  return readFileSync(`${filepath.replace(/\/[^\/]+$/, '')}/${path}`).toString()
}


function parseCss(cssContent: string) {
  const cssParser = /\s*(?<selector>[^\{]+)\s*\{\s*(?<rule>[^\}]+)\s*\}/mg
  , rulesDelimiter = /\s*,\s*/m 
  , $return = []
  let result
  while (
    result = cssParser.exec(cssContent),
    result
  ) {
    const {groups} = result
    , {selector, rule} = groups!
    , style: Record<string, string> = {}
    , styleParser = /\s*(?<property>[0-9a-zA-Z-_]+)\s*:\s*(?<value>[])\s*;?/mg

    $return.push(selector.split(rulesDelimiter).map(s => s.trim()))

    let molecule
    while (molecule = styleParser.exec(rule), molecule) {
      const {property, value} = molecule.groups!
      style[property] = value
    }
    $return.push(style)
  }

  return $return
}