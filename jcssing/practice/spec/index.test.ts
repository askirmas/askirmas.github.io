import {parseCss} from '.'

describe(parseCss.name, () => {
  it('.Logical', () => expect(parseCss(`
    .Logical {
      /*Logical*/
      display: contents; }
  `)).toStrictEqual([
    [".Logical"],
    {
      "display": "contents"
    }
  ]))

  it(':root', () => expect(parseCss(`
    /*generated*/
    :root {
      --color-main-data: 18, 22, 55 /*hsl(233.5, 50.7%, 14.3%)*/;
    }
  `)).toStrictEqual([
    [
      "/*generated*/\n:root",
    ],
    {
      "--color-main-data": "18, 22, 55 /*hsl(233.5, 50.7%, 14.3%)*/"
    }
  ]))

  it('@import', () => expect(parseCss(`
    @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  `)).toStrictEqual([
  ]))
  
  it('build[0..2]', () => expect(parseCss(`
    @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
    .Logical {
      /*Logical*/
      display: contents; }
    
    /*generated*/
    :root {
      --color-main-data: 18, 22, 55 /*hsl(233.5, 50.7%, 14.3%)*/;
    }
  `)).toStrictEqual([
    [".Logical"],
    {
      "display": "contents"
    },
    [
      "/*generated*/",
      ":root"
    ],
    {
      "--color-main-data": "18, 22, 55 /*hsl(233.5, 50.7%, 14.3%)*/"
    }
  ]))
})