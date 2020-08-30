[[_TOC_]]

## semver

Patch - hotfix

Minor - feature

Major - breaking

## Imperatives

|                                                              | [RFC-2119](https://tools.ietf.org/html/rfc2119) | Status              | MD      | Char |
| ------------------------------------------------------------ | ----------------------------------------------- | ------------------- | ------- | ---- |
| The definition is an absolute requirement of the specification | MUST                                            | Released LTS        | **"*"** | +    |
| The definition is an absolute prohibition of the specification | MUST NOT                                        | Won't               | "!"     | -    |
| May exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course | SHOULD                                          | Stable Beta Nightly | ""      | .    |
| May exist valid reasons in particular circumstances when the    particular behavior is acceptable or even useful, but the full    implications should be understood and the case carefully weighed    before implementing any behavior described with this label | SHOULD NOT                                      | Deprecated          | ~~"~"~~ | @    |
| An item is truly optional                                    | MAY                                             | Proposal Request    | *"_"*   | ?    |

|                                                              | [RFC-6919](https://tools.ietf.org/html/rfc6919) |
| ------------------------------------------------------------ | ----------------------------------------------- |
| Used to indicate    requirements that are needed to meet formal review criteria (e.g.,    mandatory-to-implement security mechanisms), when these mechanisms    are too inconvenient for implementers to actually implement | MUST (BUT WE KNOW YOU WON'T)                    |
| The authors of the    specification think that implementations should do something, but    they're not sure quite what | SHOULD CONSIDER                                 |
| Indicates dangerous behaviors that some important vendor still does and therefore we were    unable to make MUST NOT | REALLY SHOULD NOT                               |
| Conveys an optimistic assertion of an    implementation behaviour that is clearly morally right, and thus does not require substantiation | OUGHT TO                                        |
| The authors expectation about    what a reasonable implementation is likely to do in a given case.    There is no requirement for implementations to be reasonable | WOULD PROBABLY                                  |
| A behavior that might seem    appealing to some people, but which is regarded as ridiculous or    unnecessary by others.  This phrase is frequently used to avoid    further delay in approval of a document | MAY WISH TO                                     |
| A way for specification authors to    articulate existential possibilities, in order to provide a hint that    might be critical to reliable or secure operation, but without a hard    requirement.  The lack of a requirement allows for vendor product    differentiation | COULD                                           |
| Some of the working group    members thought of as an edge case that will never happen, but in    practice allows the protocol to work at the most fundamental level | POSSIBLE                                        |
| A requirement in an intentionally stealthy    fashion, to facilitate product differentiation (cf. "COULD" above) | MIGHT                                           |

## Commit

Types

- contract
- test
- spec
- code

Verbs

- Reuse, Segregate/Split
- Implement
- ....