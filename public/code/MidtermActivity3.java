import java.util.Scanner;

public class SecureATMSystemGadicho {
    public static void main(String[] args) {
        final String CORRECT_PIN = "Gadicho1234";
        Scanner scanner = new Scanner(System.in);
        int attempts = 0;
        boolean accessGranted = false;
        double balance = 5000.0; // Starting balance
        final double MAX_WITHDRAWAL = 2000.0;
        
        while (attempts < 3) {
            System.out.print("Enter your PIN: ");
            String enteredPin = scanner.nextLine();
            
            if (enteredPin.equals(CORRECT_PIN)) {
                System.out.println("Access Granted.\n");
                accessGranted = true;
                break;
            } else {
                attempts++;
                if (attempts < 3) {
                    System.out.println("Incorrect PIN. You have " + (3 - attempts) + " attempts left.");
                }
            }
        }
        
        if (accessGranted) {
            int choice;
            do {
                System.out.println("===== ATM MENU =====");
                System.out.println("1. Check Balance");
                System.out.println("2. Deposit");
                System.out.println("3. Withdraw");
                System.out.println("4. Exit");
                System.out.print("Select an option: ");
                
                try {
                    choice = Integer.parseInt(scanner.nextLine());
                    
                    switch (choice) {
                        case 1:
                            System.out.printf("Current Balance: %.2f pesos\n\n", balance);
                            break;
                        case 2:
                            System.out.print("Enter deposit amount: ");
                            double deposit = Double.parseDouble(scanner.nextLine());
                            balance += deposit;
                            System.out.printf("Deposited %.2f pesos successfully.\n\n", deposit);
                            break;
                        case 3:
                            System.out.print("Enter withdrawal amount: ");
                            double withdrawal = Double.parseDouble(scanner.nextLine());
                            if (withdrawal > MAX_WITHDRAWAL) {
                                System.out.printf("Error: Maximum withdrawal per transaction is %.2f pesos.\n\n", MAX_WITHDRAWAL);
                            } else if (withdrawal <= balance) {
                                balance -= withdrawal;
                                System.out.printf("Withdrew %.2f pesos successfully.\n\n", withdrawal);
                            } else {
                                System.out.println("Insufficient funds!\n");
                            }
                            break;
                        case 4:
                            System.out.println("Goodbye!");
                            break;
                        default:
                            System.out.println("Invalid option. Please try again.\n");
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid input. Please enter a number.\n");
                    choice = 0;
                }
            } while (choice != 4);
        } else {
            System.out.println("Account locked.");
        }
        
        scanner.close();
    }
}
