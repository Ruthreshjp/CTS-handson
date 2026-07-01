public class Main {
    public static void main(String[] args){
        double futurevalue =  FinancialForecast.forecast(10000,0.10,3);
        System.out.println("The future value is "+futurevalue);

        double optimizedfuturevalue = Optimized.forecast(10000,0.10,3);
        System.out.println("The optimized future value is "+optimizedfuturevalue);
    }
}
