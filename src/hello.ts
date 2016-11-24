class Greeting {    
    sayHello(playerId:string):string{
        return "Hello" + playerId + "!";
    }
}
handlers.hello = function(args, context){
    var message = new Greeting().sayHello(currentPlayerId);
    log.info(message);
    log.debug("helloWorld:", {input: args.inputValue})
    return { messageValue: message };
}