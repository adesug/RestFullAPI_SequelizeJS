const { students } = require('../models/');

module.exports={
    getAllStudents : (req,res) => {
        students.findAll()
        .then((data) => {
            res.status(200).send({
                msg : "get al data success",
                status : 200,
                data 
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "get all data is error",
                status: 500,
                error
            })
        })
    },
    getStudentsByID : (req, res) => {
        const id = req.params.id;
        students.findAll({
            where:{
                id 
            }
        })
        .then((data) => {
            res.status(200).send({
                msg : "get id data students is success",
                status : 200,
                data 
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "get data id is error",
                status: 500,
                error
            })
        })


    },

    createNewStudent : (req, res) => {
        const {body} = req ;

        students.create(body)
        .then((data) => {
            res.status(200).send({
                msg : "create new data students is success",
                status : 200,
                data 
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "get all data is error",
                status: 500,
                error
            })
        })
    },
    updateStudents : async (req,res) =>{
            const {id} = req.params;
            const { body } = req

            //menampilkan body
            let findStudent = await students.findOne({
                where : {
                    id
                }
            });

            if(findStudent === null){
                res.status(404).send({
                    msg: "updaate student is error",
                    status : 404,
                    error: "data is not found"
                });

            }
            //

            students.update (body,{
                where: {
                    id
                }
            })
            .then((data) => {

                //menampilkan body
                    const resObject = {...findStudent.dataValues, ...body}
                //
                res.status(200).send({
                    msg : "update data students is success",
                    status : 200,
                    data : resObject
                })
            })
            .catch ((error) => {
                res.status(500).send({
                    msg: "update data is error",
                    status: 500,
                    error
                })
            })

    },
    deleteDataStudent : async (req,res ) => {
        const {id} = req.params;

        let findStudent = await students.findOne({
            where : {
                id
            }
        });

        if(findStudent === null){
            res.status(404).send({
                msg: "updaate student is error",
                status : 404,
                error: "data is not found"
            });

        }

        students.destroy({
            where:{
                id
            }
        })
        .then((data) => {

            //menampilkan body
                const resObject = {...findStudent.dataValues}
            //
            res.status(200).send({
                msg : "Delete data students is success",
                status : 200,
                data : resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "delete data is error",
                status: 500,
                error
            })
        })

    }
}