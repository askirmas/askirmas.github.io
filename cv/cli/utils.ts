const {values: $values} = Object
type Dict<V = unknown, K extends PropertyKey = string> = {[k in K]: V}
type FlatObject = Record<string|number, null|undefined|boolean|number|string>

export {
  isFlatObject
}

function isFlatObject(source: Dict) :source is FlatObject {
  const values = $values(source)
  
  for (let i = values.length; i--;) {
    const value = values[i]
    if (typeof value === "object" && value !== null)
      return false
  }
    

  return true
}