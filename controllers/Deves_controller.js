const fs = require('fs');
const path = require('path');

// All Deves data models
const deves = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/deves.json')).toString());

// Get all Deves
const getAllDeves = (req, res) =>{
    res.status(200).json(deves);
};

// get latest id
const getid = () =>{
    if(deves.length > 0){
        return deves[deves.length - 1].id +1;
    }else{
        return 1;
    }
}




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
const CreateDeve = (req, res) =>{

    let {name, age, skill} = req.body;

    deves.push({
        id      : getid(),
        name    : name,
        skill   : skill,
        age     : age
    });

    fs.writeFileSync(path.join(__dirname, '../data/deves.json'), JSON.stringify(deves));

    res.status(202).json({
        message : 'New deve Created'
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