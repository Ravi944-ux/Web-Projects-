import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int arr[] = new int[5];
        
        // Create a 1D array of integers with size 5
        for (int i = 0; i < arr.length; i++) {
            arr[i] = scanner.nextInt();
        }
        // Calculate the sum of all elements in the array
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        // Print the original array and the calculated sum
        System.out.print("Array: [");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i != arr.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
        System.out.println("Sum: " + sum);
        scanner.close();
    }
}
