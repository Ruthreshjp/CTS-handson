class Logger{
    private static Logger ins;
    private Logger(){
        System.out.println("Logger instance is created");
    }
    public static Logger getInst(){
        if(ins == null){
            ins = new Logger();
        }else{
            System.out.println("Logger instance already created can't create another");
        }
        return ins;
    }
} 