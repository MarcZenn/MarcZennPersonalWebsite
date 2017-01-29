module.exports = {
    getIndex : function(req, res){
      res.sendFile(path.resolve(__dirname, './index.html'))
    }
}
