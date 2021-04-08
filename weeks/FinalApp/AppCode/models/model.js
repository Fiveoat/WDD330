process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const {
    Pool
} = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});


function getUserCoinData(user_id, callback) {
    let sql = "SELECT * FROM users u INNER JOIN user_coins uc on u.user_id = uc.user_id INNER JOIN coins c ON uc.symbol = c.symbol WHERE u.user_id=" + user_id;
    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            callback(null, db_results);
        }
    })
}

function getPriceData(callback) {
    let sql = "SELECT DISTINCT * FROM coins;";
    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            callback(null, db_results);
        }
    })
}

function deleteCoinHolding(user_id, symbol, callback) {
    let sql = `DELETE FROM user_coins WHERE symbol = '${symbol}' AND user_id = ${user_id}`;
    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            let results = {
                list: db_results.rows
            };
            callback(null, results);
        }
    })
}

function updatePriceData(coin, price, callback) {
    let sql = `UPDATE coins SET last_known_price = '${price}' WHERE symbol = '${coin}'`;
    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            callback(null, db_results);
        }
    })
}

function registerUser(first_name, last_name, password, email, callback) {
    let sql = "INSERT INTO users(first_name, last_name, password_, email) VALUES ('" + first_name + "', '" + last_name + "', '" + password + "', '" + email + "');";
    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            let results = {
                list: db_results.rows
            };
            callback(null, results);
        }
    })
}

function addCoinHolding(user_id, symbol, quantity, callback) {
    let sql = "INSERT INTO user_coins(user_id, symbol, quantity) VALUES ('" + user_id + "', '" + symbol + "', '" + quantity + "');";
    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            let results = {
                list: db_results.rows
            };
            callback(null, results);
        }
    })
}

function getPassword(email, callback) {
    let sql = `SELECT * FROM users WHERE email = '${email}'`;
    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            let results = {
                list: db_results.rows
            };
            callback(null, results);
        }
    })
}


module.exports = {
    registerUser: registerUser,
    getUserCoinData: getUserCoinData,
    addCoinHolding: addCoinHolding,
    getPriceData: getPriceData,
    updatePriceData: updatePriceData,
    getPassword: getPassword,
    deleteCoinHolding: deleteCoinHolding
}