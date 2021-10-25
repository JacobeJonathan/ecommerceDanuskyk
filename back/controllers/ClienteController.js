'use strict'

var Cliente = require('../models/cliente');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');


const registro_cliente = async function(req,res){
    var data = req.body;
    var Clientes_arr = [];

    Clientes_arr = await Cliente.find({email:data.email});
    if(Clientes_arr.length == 0){
        
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err,hash){
                if (hash) {
                    data.password = hash;
                    var reg = await Cliente.create(data);
                    res.status(200).send({data:reg});
                }else{
                    res.status(200).send({message:'ErrorServer',data:undefined});  
                }
            })
        }else{
            res.status(200).send({message:'No hay una contraseña',data:undefined}); 
        }
       
    }else{
        res.status(200).send({message:'El correo ya es existente',data:undefined});
    }
    
    //REGISTROS
    
    
    
}

const login_cliente = async function(req,res){
    var data = req.body;
    var Clientes_arr = [];


    Clientes_arr = await Cliente.find({email:data.email});

    if(Clientes_arr.length == 0){
        res.status(200).send({message:'no se encontro el correo',data:undefined})
    }else{
        //Login

        let user = Clientes_arr[0];

        bcrypt.compare(data.password, user.password, async function(error,check){
            if(check){
                res.status(200).send({
                    data:user,
                    token: jwt.createToken(user)
                
                });
                
            }else{
                res.status(200).send({message:'La contraseña es incorrecta',data:undefined});
            }
        });

        
    }

}
module.exports={
    registro_cliente,
    login_cliente
}