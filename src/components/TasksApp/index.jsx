import React from "react"
import { Container } from "./styles" 
import { Image } from "./styles"
import { TextInput } from "./styles"
import { Button } from "./styles"
import { Text } from "./styles"
import { Title } from "./styles"
import { ListBox } from "./styles"
import TaskItem from "../TaskItem/index.jsx"
import MyGlobalStyles from "../../styles/globalStyles"
import Chatting from '../../assets/chatting.svg'
function Tasks(){
    const [textInputContent, setTextInputContent] = React.useState()
    const [textInputAllContent, setTextInputAllContent] = React.useState([])
    function typingOnTextInput(inputEvent){
        setTextInputContent(inputEvent.target.value);
    }
    function buttonClick(){
        const previousContentAll = [...textInputAllContent, textInputContent]
        if(textInputContent != ""){
            setTextInputAllContent(previousContentAll);
            document.getElementById('TextInput').value = '';
            setTextInputContent('');
        }
    }

    return(
        <Container>
            <MyGlobalStyles></MyGlobalStyles>
            <Image src={Chatting} alt="people-chatting" />
            <Title>To-Do List</Title>
            <TextInput maxLength={120} id="TextInput" onChange={typingOnTextInput} ></TextInput>
            <Button isOn={textInputContent} data-cy="buttonComent" onClick={buttonClick}><Text>
            To remember.</Text></Button>
            <ListBox>
                <ul>
                    {textInputAllContent.map((content) => 
                        <TaskItem content={content}></TaskItem>
                    )}
                </ul>
            </ListBox>
        </Container>
    )
}
export default Tasks