import React from "react";
import Checkbox from '../CheckBox/index.jsx';
import Message from '../MessageItem/index.jsx';
import { TaskStructure } from './styles.js';

function TaskItem({ content }) {
    const [checked, setChecked] = React.useState(false);

    return (
        <TaskStructure>
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            <Message message={content}></Message>
        </TaskStructure>
    );
}

export default TaskItem;
