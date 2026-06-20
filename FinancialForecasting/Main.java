public class Main {
    public static void main(String[] args){
        FinancialForecast f = new FinancialForecast();
        double futurevalue =  f.forecast(10000,0.10,3);
        System.out.println("The future value is "+futurevalue);

        Optimized o = new Optimized();
        double optimizedfuturevalue = o.forecast(10000,0.10,3);
        System.out.println("The optimized future value is "+optimizedfuturevalue);
    }
}
