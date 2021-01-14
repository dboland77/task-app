import React from 'react';
import styled from 'styled-components';
import Task from './Task.jsx';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius:2px;
`;
const Title = styled.h3`
    padding: 8px;`;

const Tasklist = styled.div`
    padding: 8px`;

class Column extends React.Component {
    render(){
        return (
            <Container>
                <Title> {this.props.column.title}</Title>
                <Tasklist>{this.props.tasks.map(task=> {
                    return <Task key={task.id} task ={task}/>
                })} </Tasklist>
            </Container>
        )
    }
}

export default Column;