public class FinancialForecast {
    public static double forecast(double value, double rate, int years){
        if(years == 0){
            return value;
        }
        return forecast(value,rate, years - 1) * (1+rate);
    }
}
