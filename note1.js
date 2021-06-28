const fs = require('fs')
const chalk = require('chalk')
const loadNotes = () =>{
    try{
       const dataBuffer = fs.readFileSync('notes1.json')
       return JSON.parse(dataBuffer.toString())
    }
    catch(e)
    {
        return []
    }
}

const addNote = (title,body) =>{
    const notes = loadNotes()
    const dupticates = notes.find((note) => {
        return note.title!=title
    })
    if(dupticates)
    {
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.blue.bold("note added successfully!!"))
        saveNote(notes)
    }
    else{
        console.log(chalk.red("Title already taken"))
    }
}
const removeNote = (title) =>{
    var flag=false
    const notes = loadNotes()
    for(let i=0;i<notes.length;i++){
        if(notes[i].title===title)
        {
            notes.splice(i,2)
            saveNote(notes)
            console.log(chalk.blueBright.bold("Note removed successfully!!"))
            flag=true
            break
        }
    }
    if(!flag)
    console.log(chalk.redBright.bold("Such title note doesnt exist"))
}

const listNote = () =>{
    const notes = loadNotes()
    var i=0;
   notes.forEach(element => {
       i++;
       console.log(i + "." + element.title)
   });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const dupticates = notes.find((note) =>{
        if(note.title == title){
            console.log(chalk.inverse.blue(note.title))
            console.log(note.body)
        }
        return note.title==title
    })
    if(!dupticates){
        console.log(chalk.red("No such note exists!!"))
    }
}
const updateNote = (title,body) =>{
    const notes = loadNotes()
    var flag=false
    for(let i=0;i<notes.length;i++){
        if(notes[i].title===title)
        {
            notes[i].body+=body
            saveNote(notes)
            console.log(chalk.blueBright.bold("Note updated successfully!!"))
            flag=true
            break
        }
    }
    if(!flag)
    console.log(chalk.redBright.bold("Such title note doesnt exist"))
    
}
const saveNote = (note) => {
    const datajson = JSON.stringify(note)
    fs.writeFileSync('notes1.json',datajson)
}
module.exports={
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNote: listNote,
    updateNote: updateNote
}
