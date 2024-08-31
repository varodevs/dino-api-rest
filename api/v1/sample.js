module.exports = async (req, res) => {
    if(req.method === "GET" ){
        res.json([
            {name: "Pepe", Age:22},
            {name: "Fran", Age:30}
        ])
    }else{

    }
};