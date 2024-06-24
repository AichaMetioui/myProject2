const myProSchema = require("../models/mySchema")
const SecondSchema = require("../models/secodSchema")
const bcrypt = require('bcrypt');




const articles = (re, res) => {
    res.render("homePage")
}

//save data on db 
const addArticle = (req, res) => {
    console.log(req.body)
    const newArticle = new myProSchema(req.body)
    newArticle.save()
        .then(() => {
            console.log("it register ")
        })

        .catch((err) => {
            console.log(err)
        })
    res.redirect("/addTweet")

}
//find the data :
const allArticel = (req, res) => {
    myProSchema.find()
        .then(result => {
            res.render("allArticle", {
                articles: result
            }
            )

        })
        .catch((err) => { console.log("error") })
}



// delete  : 
const deleteArticle = (req, res) => {
    console.log(req.params)
    myProSchema.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/addTweet")
        })
        .catch(err => {
            console.log(err)
        })

}


//update: 
const updateArticle = (req, res) => {
    myProSchema.findById(req.params.id)
        .then((result) => {
            res.render("editArticle", {
                Artcl: result
            })

        })
        .catch(err => {
            console.log(err)
        })
}

//save edit:
const saveEdit = (req, res) => {
    myProSchema.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect("/addTweet")
        })
        .catch(err => {
            console.log(err)
        })
}

const mainPage = (req, res) => {
    res.render("mainPage")
}


const signUp = (req, res) => {
    if (req.body.userName === "" || req.body.LastName === "" || req.body.EmailAdress === "" || req.body.password === "") {
        res.render("mainPage", {
            err: "All field are empty",
            succes: "",
            loginErr: "",
            user: [],
        })

    } else {
        let existemail
        SecondSchema.findOne({ EmailAdress: req.body.EmailAdress }).then((result) => {

            existemail = result;
        }

        ).catch((err) => { console.log(err); })
        
        console.log(req.body.EmailAdress)
        if (existemail) {
            res.render("mainPage", {
                err: "email already exist ",
                succes: "",
                loginErr: "",
                user: [],
            })
        }

        else {
            const hash = bcrypt.hashSync(req.body.password, 10);
            //console to see hashing password 
            console.log(req.body.password);
            console.log(hash);
            if (!hash) {
                res.render("mainPage", {
                    err: "something wrong ",
                    succes: "",
                    loginErr: "",
                    user: [],
                })
            }
            else {

                let user = {
                    ...req.body,
                    pssword: hash
                }
                let User = new SecondSchema(user)
                User.save().then(() =>
                    res.render("mainPage", {

                        err: "",
                        succes: "user has been added you can log in now",
                        loginErr: "",
                        user: [],

                    })).catch((error) => {
                        console.log(error)
                    })
            }
        }


    }
}


const logIn = (req, res) => {
    console.log(req.body)

}







module.exports = {
    articles,
    addArticle,
    allArticel,
    deleteArticle,
    updateArticle,
    saveEdit,
    mainPage,
    signUp,
    logIn,






}