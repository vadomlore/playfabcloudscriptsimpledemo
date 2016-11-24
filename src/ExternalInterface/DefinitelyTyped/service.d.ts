declare var handlers: any;
declare var currentPlayerId: string;
declare namespace log {
    function debug(s:string):void;
    function info(s:string):void;
    function error(s:string):void;
    function debug(s:string, object:any):void;
    function info(s:string, object:any):void;
    function error(s:string, object:any):void;    
}  