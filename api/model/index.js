const db = require('../config');

const {hash, compare, hashSync } = require('bcrypt');

const { createToken } = require('../middleware/AuthenticateUser');


//============= Users =============//
class User {
    login(req, res) {
        const {
            emailAdd,
            userPass
        } = req.body;
        const querySt =
            `SELECT firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users 
        WHERE emailAdd = '${emailAdd}' `;
        DB.query(querySt, async (err, data) => {
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err: "Incorrect email address"
                });
            } else {
                await compare(userPass,
                    data[0].userPass,
                    (uErr, uResult) => {
                        if (uErr) throw uErr;
                        const jToken =
                            createToken({
                                emailAdd,
                                userPass
                            });
                        res.cookie('Valid User',
                            jToken, {
                                maxAge: 3600000,
                                httpOnly: true
                            })
                        if (uResult) {
                            res.status(200).json({
                                msg: 'Log in success',
                                jToken,
                                result: data[0]
                            })
                        } else {
                            res.status(401).json({
                                err: 'Incorrect password'
                            })
                        }
                    })
            }
        })
    }
    fetchUsers(req, res) {
        const querySt = 
        `
        SELECT firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users
        `;
        
        db.query(querySt, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const querySt = 
        `
        SELECT firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users
        WHERE userID = ?;
        `;
        
        db.query(querySt,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async createUser(req, res) {
        let info = req.body;
        info.userPass = await 
        hash(info.userPass, 15);
        let user = {
            emailAdd: info.emailAdd,
            userPass: info.userPass
        }
        
        const querySt =
        `INSERT INTO Users
        SET ?;`;
        db.query(querySt, [info], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                
                const jToken = createToken(user);
                res.cookie("Valid User", jToken, {
                    maxAge: 999,
                    httpOnly: true
                });
                res.status(200).json({msg: "Successfully added new user."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const querySt = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        
        db.query(querySt,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "User successfully updated."} );
        })    
    }
    deleteUser(req, res) {
        const querySt = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        
        db.query(querySt,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "User was successfully deleted."} );
        })    
    }
}


//============= Products =============//
class Product {
    fetchProducts(req, res) {
        const querySt = `SELECT id, name, author, description, date_created, imgURL, price, quantity, category
        FROM Products;`;
        db.query(querySt, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const querySt = `SELECT id, name, author, description, date_created, imgURL, price, quantity, category
        FROM Products
        WHERE id = ?;`;
        db.query(querySt, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO Products
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to create new product."});
                }else {
                    res.status(200).json({msg: "Successfully created new product."});
                }
            }
        );    

    }
    updateProduct(req, res) {
        const querySt = 
        `
        UPDATE Products
        SET ?
        WHERE id = ?
        `;
        db.query(querySt,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Could not update product."});
                }else {
                    res.status(200).json({msg: "Product successfully updated"});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const querySt = 
        `
        DELETE FROM Products
        WHERE id = ?;
        `;
        db.query(querySt,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "Unable to find product."});
            res.status(200).json({msg: "Successfully deleted product."});
        })
    }
}


//============= Orders =============//
class Order {
    fetchOrders(req, res) {
        const querySt = `SELECT id, userID, productID, quantity, orderDate, totalPrice
        FROM Orders;`;
        db.query(querySt, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchOrder(req, res) {
        const querySt = `SELECT id, userID, productID, quantity, orderDate, totalPrice
        FROM Orders
        WHERE id = ?;`;
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addOrder(req, res) {
        const strQry = 
        `
        INSERT INTO Orders
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to create new order."});
                }else {
                    res.status(200).json({msg: "Successfully created new order."});
                }
            }
        );    

    }
    updateOrder(req, res) {
        const querySt = 
        `
        UPDATE Orders
        SET ?
        WHERE id = ?
        `;
        db.query(querySt,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Could not update order."});
                }else {
                    res.status(200).json({msg: "Order successfully updated"});
                }
            }
        );    

    }
    deleteOrder(req, res) {
        const querySt = 
        `
        DELETE FROM Orders
        WHERE id = ?;
        `;
        db.query(querySt,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "Unable to find order."});
            res.status(200).json({msg: "Successfully deleted order."});
        })
    }
}

//============= Cart =============//
class Cart {
    fetchCart(req, res) {
        const strQry =
        `
        SELECT productName, price, imgURL 
        FROM users
        inner join cart on users.userID = cart.userID
        inner join products on cart.productID = products.productID
        where cart.userID = ${req.params.id};
        `;
        DB.query(strQry, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            })
        });
    }
    addCart(req, res) {
        const strQry =
            `
        INSERT INTO cart
        SET ?;
        `;
        DB.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({
                        err: "Unable to add to cart."
                    });
                } else {
                    res.status(200).json({
                        msg: "Successfully added to cart."
                    });
                }
            }
        );

    }
    updateCart(req, res) {
        const querySt =
            `
        UPDATE cart
        SET ?
        WHERE cartID = ?
        `;
        DB.query(querySt, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({
                        err: "Could not update cart."
                    });
                } else {
                    res.status(200).json({
                        msg: "Cart successfully updated"
                    });
                }
            }
        );

    }
    deleteItemCart(req, res) {
        const querySt =
            `
        DELETE FROM Cart
        WHERE productID = ?;
        `;

        DB.query(querySt, [req.params.id],
            (err) => {
                if (err) res.status(400).json({err: "Record not found"});
                res.status(200).json({
                    msg: "Item was removed."
                });
            })
    }
    deleteCart(req, res) {
        const querySt =
            `
        DELETE FROM Cart
        WHERE userID = ?;
        `;

        DB.query(querySt, [req.params.id],
            (err) => {
                if (err) res.status(400).json({err: "Record not found"});
                res.status(200).json({
                    msg: "Cart has been cleared."
                });
            })
    }
}



module.exports = {
    User, 
    Product,
    Order,
    Cart
}

