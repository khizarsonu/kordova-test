/**
 * Created by khizar on 3/31/14.
 */
define([],function(){
    var fn;
    /**
     * this will save object with respect to global scope
     * @param key
     * @param value
     */
    fn.set=function(key,value){
        window.global[key]=value;
    }

    /**
     * This will return value stored in key
     * @param key
     * @returns {*}
     */
    fn.get=function(key)
    {

        return window.global[key];
    }

    /**
     * this will delete key from memory and will not be available
     * @param key
     */
    fn.remove=function(key)
    {
        delete window.global[key];
    }

    return fn;
});