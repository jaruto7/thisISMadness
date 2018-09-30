class Todo extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            data: []
        };
    }
    addTodo( val ) {
        const todo = {
            text: val,
            id: uiid.v4(),
        };
        const data = [ ...this.state.data, todo ];
        this.setState( { data } );
    }
}