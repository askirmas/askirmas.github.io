## Phases



```mermaid
graph TB
parent{{PARENT}}
MOUNTING((MOUNTING))
UPDATING((UPDATING))
DOM((DOM))

constructor_>"constructor"]
getDerivedStateFromProps>"getDerivedStateFromProps"]
shouldComponentUpdate>"shouldComponentUpdate"]
render>"render"]
getSnapshotBeforeUpdate>"getSnapshotBeforeUpdate"]
componentDidMount>"componentDidMount"]
componentDidUpdate>"componentDidUpdate"]

parent -.-> MOUNTING -.-> constructor_
constructor_ -.-> getDerivedStateFromProps
getDerivedStateFromProps -.-> render

parent --> UPDATING --> getDerivedStateFromProps

getDerivedStateFromProps --> shouldComponentUpdate

shouldComponentUpdate --> render

render -.-> DOM -.-> componentDidMount --> UPDATING
render --> getSnapshotBeforeUpdate --> DOM --> componentDidUpdate --> UPDATING
DOM --> UPDATING

```

## Data flow

### Full view



```mermaid
graph TB
subgraph Input
props[props]
props.new[p.new]
end

state{{state}}
state.new{{s.new}}

subgraph constructor__
constructor.arg0["0"]
constructor.body["body"]
%% constructor.arg0 -.- constructor.body
end

subgraph getDerivedStateFromProps_
getDerivedStateFromProps.arg0["0"]
getDerivedStateFromProps.arg1{{"1"}}
getDerivedStateFromProps.return{{"return"}}
%% getDerivedStateFromProps.arg0 -.- getDerivedStateFromProps.arg1 -.- getDerivedStateFromProps.return
end
subgraph shouldComponentUpdate_
shouldComponentUpdate.this(("this"))
shouldComponentUpdate.arg0["0"]
shouldComponentUpdate.arg1{{"1"}}
%% shouldComponentUpdate.this -.- shouldComponentUpdate.arg0 -.- shouldComponentUpdate.arg1
end
subgraph render_
render.this(("this"))
end

subgraph getSnapshotBeforeUpdate_
getSnapshotBeforeUpdate.this["this"]
getSnapshotBeforeUpdate.arg0["0"]
getSnapshotBeforeUpdate.arg1{{"1"}}
getSnapshotBeforeUpdate.return(("return"))
%% getSnapshotBeforeUpdate.this --- getSnapshotBeforeUpdate.arg0 --- getSnapshotBeforeUpdate.arg1 --- getSnapshotBeforeUpdate.return
end
componentDidMount>"componentDidMount"]
subgraph componentDidUpdate_
componentDidUpdate.this(("this"))
componentDidUpdate.arg0["0"]
componentDidUpdate.arg1{{"1"}}
componentDidUpdate.arg2(("2"))
componentDidUpdate.body{{"body"}}
end

componentDidMount --> state.new
componentDidUpdate.body --> state.new

props -.-> constructor.arg0

constructor.arg0 -.-> getDerivedStateFromProps.arg0
constructor.body -.-> state
state -.-> getDerivedStateFromProps.arg1

getDerivedStateFromProps.return -.-> render.this

props.new --> getDerivedStateFromProps.arg0
state.new --> getDerivedStateFromProps.arg1
props --> shouldComponentUpdate.this
getDerivedStateFromProps.arg0 --> shouldComponentUpdate.arg0
getDerivedStateFromProps.arg0 -.-> render.this
getDerivedStateFromProps.arg1 --> shouldComponentUpdate.this
getDerivedStateFromProps.return --> shouldComponentUpdate.arg1

shouldComponentUpdate.arg0 --> render.this
shouldComponentUpdate.arg1 --> render.this

render.this --> getSnapshotBeforeUpdate.this

shouldComponentUpdate.this --> getSnapshotBeforeUpdate.arg0
shouldComponentUpdate.this --> getSnapshotBeforeUpdate.arg1

getSnapshotBeforeUpdate.this --> componentDidUpdate.this
getSnapshotBeforeUpdate.arg0 --> componentDidUpdate.arg0
getSnapshotBeforeUpdate.arg1 --> componentDidUpdate.arg1
getSnapshotBeforeUpdate.return --> componentDidUpdate.arg2


```

### Updating

```mermaid
graph TB

subgraph INPUT
props.new[p.new]
end

state.new{{s.new}}
setState>"setState"]

props[p.pre]
state{{s.pre}}

subgraph render_
render.this(("this"))
end

subgraph componentDidMount_
componentDidMount.this(("this"))
componentDidMount.body{{"body"}}
end
subgraph componentDidUpdate_
componentDidUpdate.this(("this"))
componentDidUpdate.arg0["0"]
componentDidUpdate.arg1{{"1"}}
componentDidUpdate.arg2>"getSnapshotBeforeUpdate"]
componentDidUpdate.body{{"body"}}
end

props.new --> render.this
state.new --> render.this

render.this --> componentDidUpdate.this
render.this --> componentDidMount.this

props --> componentDidUpdate.arg0
state --> componentDidUpdate.arg1

componentDidMount.body --> setState
componentDidMount.this --> state

componentDidUpdate.body --> setState
componentDidUpdate.this --> state
```



## Data

| method                   | mounting | updating | phase  | props-next | state-next | this.props | this.state | props-pre | state-pre | snapshot | return        |
| ------------------------ | -------- | -------- | ------ | ---------- | ---------- | ---------- | ---------- | --------- | --------- | -------- | ------------- |
| constructor              | 1        |          | render |            |            | arg0       | default    |           |           |          |               |
| getDerivedStateFromProps | 2        | 1        | render |            | return     | arg0       | arg1       |           |           |          | null \| State |
| shouldComponentUpdate    |          | 2        | render | arg0       | arg1       | this       | this       |           |           |          | boolean       |
| render                   | 3        | 3        | render |            |            | this       | this       |           |           |          | JSX           |
| getSnapshotBeforeUpdate  |          | 4        | pre    |            |            | this       | this       | arg0      | arg1      | return   | null \| SS    |
| componentDidMount        | 4        |          | commit |            |            |            |            |           |           |          |               |
| componentDidUpdate       |          | 5        | commit |            |            | this       | this       | arg0      | arg1      | arg2     |               |