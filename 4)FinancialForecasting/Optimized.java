public class Optimized {
    public static double forecast(double value, double rate, int years){
        return value * Math.pow(1+rate, years);
    }
}
