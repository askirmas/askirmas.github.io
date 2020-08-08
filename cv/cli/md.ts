import schema from "../Andrii_Kirmas.schema.json"
import data from "../Andrii_Kirmas.json"
import { isFlatObject, unique, Values } from "./utils"

const {values: $values} = Object
//, {isArray: $isArray} = Array

export default md 
export {
  linkHtml, linkMd, mdItem
}

if (module.parent === null)
  console.log(md().join("\n\n"))

function md() { 
  const {properties} = schema
  , {links: {properties: linksDescription}} = properties
  , {$schema, title, description, links, salary, ...content} = data
  , linksBlock: string[] = []
  , meta = [
    hMd(1, title),
    hMd(2, textMd(description, properties.description)),
  ]
  , contentBlock: string[] = []

  let link: keyof typeof links
  for (link in links) {
    const {
      title,
      //@ts-ignore
      description = ''
    } = linksDescription[link]
    , value = links[link]

    linksBlock.push(
      linkHtml({
        "title": `${
          title
        }${
          value
          .replace(/(^https?:\/\/(www\.)?|\/$)/g, "")
        }`,
        "href": `${description}${value}`
      })
    )
  }

  let contentTitle: keyof typeof content
  for (contentTitle in content) {
    // , description = properties[contentTitle]

    contentBlock.push(hMd(3, contentTitle))
    
    switch (contentTitle) {
      case "Education":
      case "Experience":
        const rangeData = content[contentTitle]
        , records = $values(rangeData) as Values<typeof rangeData>
        , {length} = records

        for (let i = length; i--;) {
          const record = records[i]

          if (typeof record !== "object")
            continue

          const {title, maximum, minimum, items, description} = record
          , itemed = new Set<string>()

          contentBlock.push(
            hMd(4, `${minimum} - ${maximum} ${title}`),
            `<b>${description}</b>`
          )

          if (items) {
            items.forEach(item => {
              if (typeof item !== 'object')
                return
              item.items?.forEach(item => itemed.add(item))
            })
            contentBlock.push([...itemed].join(", "))
  
            items.forEach(item => {
              const title = typeof item === "string" ? item : item.title
              contentBlock.push(`- ${title}`)
            })
  
          //   contentBlock.push(  
          //     //@ts-ignore
          //     items.map(item => mdItem(item))
          //     .flat()
          //     .join('\n\n')
          //   )
          }
        }

        break
      default: 
        const value = content[contentTitle]
        if (typeof value === "string") {
          contentBlock.push(value)
          continue
        }
    
        if (isFlatObject(value)) {
          let key: keyof typeof value
          for (key in value)
            contentBlock.push(`${key}: ${value[key]}`)
          
          continue
        }
    
        for (const key in value) {
          contentBlock.push(
            hMd(4, key),
            //@ts-ignore
            JSON.stringify(value[key])
          )
        }  
    }
  }

  
  return [
    meta,
    linksBlock.join(" "),
    `Expected salary: ${salary} ${properties.salary.title}`,
    contentBlock
  ].flat()
}


type tLink = {
  "title": string
  "description"?: string
  "href": string
}

function linkMd({title, description = "", href}: tLink) {
  return `[${title}](${href} "${description}")`
}

function linkHtml({title, description = "", href}: tLink) {
  return `<a href="${href}" title="${description}">${title}</a>`
}

type tText = {
  "title": string
  "description": string
  "$comment": string
}

function textMd(value: string, text?: tText) {
  if (!text)
    return value
  const {title, description, $comment} = text

  return value.replace($comment, linkMd({
    "title": $comment,
    "description": title,
    "href": description
  }))
}

function hMd(index: number, content: string) {
  return `${"#".repeat(index)} ${content}`
}


type tItem = {
  "title": string
  "items": string[]
  "additionalItems"?: string[]
}

function mdItem(source: tItem | string) {
  const output = [
    `- ${typeof source === "string" ? source : source.title}`
  ]

  if (typeof source !== "string") {
    const {items, additionalItems} = source
    output.push(unique(items).join(', '))
    if (additionalItems)
      output.push(unique(additionalItems).map(v => `<i>${v}</i>`).join(', '))
  }

  return output
}

