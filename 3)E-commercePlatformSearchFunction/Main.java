public class Main {
    public static void main(String[] args){
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Book", "Books"),
            new Product(4, "Headphones", "Electronics"),
            new Product(5, "Shoes", "Footwear")
        };
        System.out.println("Search using linear search");
        Product linear = LinearSearch.search(products, 3);
        if(linear != null){
            linear.display();
        } else {
            System.out.println("Product not found");
        }

        System.out.println("Search using binary search");
        Product binary = BinarySearch.search(products, 3);
        if(binary != null){
            binary.display();
        } else {
            System.out.println("Product not found");
        }   
    }
}
