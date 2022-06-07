const fs = require('fs');
const path = require('path');
const Developer = require('../models/developerModel');

// All Deves data models
const deves = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/deves.json')).toString());


// get latest id
const getid = () =>{
    if(deves.length > 0){
        return deves[deves.length - 1].id +1;
    }else{
        return 1;
    }
}



// Get all Deves
const getAllDeves = async (req, res) =>{

    let data = await Developer.find();
    res.status(200).json(data);


};





// Get Single Deve
const getSingleDeve = (req, res) =>{
    let id = req.params.id;

    if(deves.some(data => data.id == id)){
        res.status(200).json(deves.find(data => data.id == id));
    }else{
        res.status(404).json({
            message : 'data not found'
        });    
    }
    
};

// Get Create Deves
const CreateDeve = async (req, res) =>{

        let {name, age, skill} = req.body;

    let data = await Developer.create({
        name    : name,
        skill   : skill,
        age     : age
    })

    res.status(202).json({
        message : 'New Developer Data Created'
    })
};


// Get Edit Deves
const editDeve = (req, res) =>{

    let id = req.params.id;
    let {name, age, skill} = req.body;


    deves[deves.findIndex(data => data.id == id)] = {
        id      : id,
        name    : name,
        skill   : skill,
        age     : age

    }
    fs.writeFileSync(path.join(__dirname, '../data/deves.json'), JSON.stringify(deves));
    res.status(202).json({
        message : 'Deves Edit Data successful '
    })
};


// Get Delete Deves
const deleteDeve = (req, res) =>{

    let id = req.params.id;
    if( deves.some(data => data.id == id) ){
        let upDatedData = deves.filter( data => data.id != id);
        fs.writeFileSync(path.join(__dirname, '../data/deves.json'), JSON.stringify(upDatedData));

        res.status(200).json({
            message : 'data Deleted '
        }); 
    }else{
        res.status(400).json({
            message : 'data not found'
        }); 
    } 


    res.send('Delete deve')
};

module.exports ={
    getAllDeves,
    getSingleDeve,
    CreateDeve,
    editDeve,
    deleteDeve
}