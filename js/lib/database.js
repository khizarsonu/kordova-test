/**
 * Created by khizar on 3/31/14.
 */
define(['c/global'],function(global){
    var database;

    database.name='defaultName';
    database.size=1000000;
    database.key='db';

    database.open=function()
    {
        global.set(this.key,window.openDatabase(this.name, "1.0",this.name, this.size));
    }

    database.close=function()
    {
        global.remove(this.key);
    }

    database.execute=function(sql,errorFunc,succFunc)
    {
        function populateDB(tx) {
            tx.executeSql(sql);
        }
        var donothing=function()
        {

        }

        errorFunc=errorFunc||donothing;
        succFunc=succFunc||donothing;
        this.getDb.transaction(populateDB, errorFunc, succFunc);
    }


    database.queryResult=function(sql,errorFunc)
    {
        var donothing=function(){}
        errorFunc=errorFunc||donothing;
        //rows will be stored here
        var result;
        function queryDB(tx) {
            function querySuccess(tx, results) {
                result = results;
            }
            tx.executeSql(sql, [], querySuccess, errorFunc);
        }
        this.getDb.transaction(queryDB, errorCB);
        return result;
    }

    database.query=function(sql,errorFunc)
    {
        var row,result;
        result=this.queryResult(sql,errorFunc);
        row=result.rows.item(0);
        return row;
    }

    database.queryAll=function(sql,errorFunc){
        var rows,result;
        result=this.queryResult(sql,errorFunc);
        rows=result.rows;
        return rows;
    }

    database.queryScalar=function(sql,errorFunc)
    {
        var result,row;
        result=this.queryResult(sql,errorFunc);
        row=result.rows.item(0);

        var first;
        for (var i in row) {
            if (row.hasOwnProperty(i) && typeof(i) !== 'function') {
                first = row[i];
                break;
            }
        }
        return first;
    }

    database.getDb=function()
    {
        if(global.get(this.key))
            return global.get(this.key);
        this.open(this.name,this.size);
        return global.get(this.key);
    }



    return database;
});