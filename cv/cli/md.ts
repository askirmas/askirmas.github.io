import schema from "../Andrii_Kirmas.schema.json"
import data from "../Andrii_Kirmas.json"
import { isFlatObject } from "./utils"

export default md 
export {
  linkHtml, linkMd
}

if (module.parent === null)
  console.log(md().join("\n\n"))

function md() { 
  const {properties} = schema
  , {links: {properties: linksDescription}} = properties
  , {$schema, title, description, links, salary, ...content} = data
  , linksBlock: string[] = []
  , meta = [
    `# ${title}`,
    `## ${description}`
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
        title: `${
          title
        }${
          value
          .replace(/(^https?:\/\/(www\.)?|\/$)/g, "")
        }`,
        href: `${
          description
        }${
          value
        }`
      })
    )
  }

  let contentTitle: keyof typeof content
  for (contentTitle in content) {
    const value = content[contentTitle]
    // , description = properties[contentTitle]

    contentBlock.push(`### ${contentTitle}`)
    
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
  }

  return [
    meta,
    linksBlock.join(" "),
    `Expected salary: ${salary} ${properties.salary.title}`,
    contentBlock
  ].flat()
}


type tLink = {
  title: string
  description?: string
  href: string
}

function linkMd({title, description = "", href}: tLink) {
  return `[${title}](${href} "${description}")`
}

function linkHtml({title, description = "", href}: tLink) {
  return `<a href="${href}" title="${description}">${title}</a>`
}