class Startup {
    public static main(): number {
        log.debug('Hello World');
        return 0;
    }
}

handlers.startup = function(args, context){
    Startup.main();
}