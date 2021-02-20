import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const check = ()=>{
    const list = JSON.parse(localStorage.getItem('list'));
    return list? list: [];
}

function App() {
    const [text,setText] = useState('');
    const [list,setList] = useState(check());
    const [alert,setAlert] = useState({show:false,mgs:'',type:''});
    const [isEditing,setIsEditing] = useState(false);
    const [editId,setEditId] = useState(null);

    const removeItem = (id)=>{
        setList(list.filter(item=>item.id!=id));
    }

    const removeAlert = ()=>{
        setAlert({show:false,mgs:'',type:''});
    }

    const setEdit = (item) => {
        setIsEditing(true);
        setEditId(item.id);
        setText(item.text);
    }

    const submit = (e)=>{
        e.preventDefault();
        if(!text){
            showAlert(true,'danger','Plase enter a value');
        }else{
            if(!isEditing){
                const newItem = {id:new Date().getTime().toString(),text}
                setList([...list,newItem]);
                setText('');
                showAlert(true,'success','Item added to the list');
            }
            else{
                setList(
                    list.map(item=>{
                        if(item.id===editId){
                            return {id:item.id,text};
                        }
                        else
                            return item;
                    })
                )
                setText('');
                setIsEditing(false);
                setEditId(null);
                showAlert(true,'success','Item changed');
            }
        }
        
    }

    const showAlert = (show,type,msg)=>{
        setAlert({show,type,msg});   
    }

    const clear = ()=>{
        setList([]);
    }

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    },[list])

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={submit}>
                {alert.show && <Alert msg={alert.msg} type={alert.type} removeAlert={removeAlert} list={list}/>}
                <h3>Grocery Bud</h3>
                <div className="form-control">
                    <input 
                    type="text"
                    className="grocery"
                    placeholder="e.g. eggs"
                    value={text}
                    onChange={(e)=>{setText(e.target.value);}}
                    />
                    <button className="submit-btn">{isEditing? 'edit': 'submit'}</button>
                </div>
            </form>
            {list.length > 0 && (
            <div className="grocery-container">
                <List list={list} removeItem={removeItem} setEdit={setEdit}/>
                <button className="clear-btn" onClick={clear}>Clear items</button>
            </div>)}
        </section>
    );
}

export default App
