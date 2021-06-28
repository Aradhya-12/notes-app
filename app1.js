const fs = require('fs')
const chalk = require('chalk')
const yargs= require('yargs')
const notes_util=require('./note1.js')

yargs.command({
    command: 'add',
    describe:'adding note',
    builder:{
        title:{
            describe:"title of note",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"content to be added",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes_util.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe:'removing note',
    builder:{
        title:{
            describe:"title of note",
            demandOption:true,
            type:'string'
        }
        
    },
    handler(argv){
        notes_util.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe:'listing all notes',
    handler(){
        notes_util.listNote()
    }
})

yargs.command({
    command: 'read',
    describe:'reading content of given note',
    builder:{
        title:{
            describe:"title of note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes_util.readNote(argv.title)
    }
})

yargs.command({
    command: 'update',
    describe:'updating a note',
    builder:{
        title:{
            describe:"title of note",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"content to be added",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes_util.updateNote(argv.title,argv.body)
    }
})

yargs.parse()

