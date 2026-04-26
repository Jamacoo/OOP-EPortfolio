import java.util.Scanner;

public class StudentPaymentSystemGadicho {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        
        // Initial setup
        System.out.print("Enter Student Name: ");
        String sName = reader.nextLine();
        
        System.out.print("Enter Student ID: ");
        String sID = reader.nextLine();
        
        System.out.print("Enter Total Tuition Fee: ");
        double feeLeft = Double.parseDouble(reader.nextLine());
        
        int transCounter = 0;
        boolean isPromoUsed = false;
        int navOpt;
        
        do {
            System.out.println("\n===== PAYMENT MENU =====");
            System.out.println("1. Pay Tuition");
            System.out.println("2. Check balance");
            System.out.println("3. Apply Discount");
            System.out.println("4. Exit");
            System.out.print("Select an option: ");
            
            try {
                navOpt = Integer.parseInt(reader.nextLine());
                
                switch (navOpt) {
                    case 1:
                        if (feeLeft <= 0) {
                            System.out.println("No remaining balance (Fully Paid)");
                        } else {
                            System.out.print("Enter payment amount: ");
                            double payAmt = Double.parseDouble(reader.nextLine());
                            
                            // Nested if for validation
                            if (payAmt > 0) {
                                if (payAmt > feeLeft) {
                                    System.out.println("Invalid Payment (Amount exceeds remaining balance)");
                                } else {
                                    feeLeft -= payAmt;
                                    transCounter++;
                                    System.out.printf("Payment of %.2f pesos processed successfully.\n", payAmt);
                                    if (feeLeft == 0) {
                                        System.out.println("Account Status: No remaining balance");
                                    }
                                }
                            } else {
                                System.out.println("Invalid Payment (Amount must be greater than zero)");
                            }
                        }
                        break;
                        
                    case 2:
                        System.out.printf("Remaining balance: %.2f pesos\n", feeLeft);
                        if (feeLeft <= 0) {
                            System.out.println("Status: No remaining balance");
                        }
                        transCounter++;
                        break;
                        
                    case 3:
                        // Nested if for discount validation
                        if (!isPromoUsed) {
                            if (feeLeft <= 0) {
                                System.out.println("No remaining balance to apply discount to.");
                            } else {
                                System.out.println("Select Student Type:");
                                System.out.println("1. Scholar (20% discount)");
                                System.out.println("2. Regular Student (No discount)");
                                System.out.print("Choice: ");
                                int sCategory = Integer.parseInt(reader.nextLine());
                                
                                if (sCategory == 1) {
                                    double calcDisc = feeLeft * 0.20;
                                    feeLeft -= calcDisc;
                                    isPromoUsed = true;
                                    transCounter++;
                                    System.out.printf("Scholar discount of %.2f pesos applied (20%%).\n", calcDisc);
                                    if (feeLeft == 0) {
                                        System.out.println("Status: No remaining balance");
                                    }
                                } else if (sCategory == 2) {
                                    System.out.println("Regular student selected. No discount applied.");
                                    isPromoUsed = true; // Mark as processed so it only applies once
                                    transCounter++;
                                } else {
                                    System.out.println("Invalid student type selection.");
                                }
                            }
                        } else {
                            System.out.println("Error: Discount has already been applied or student type already set.");
                        }
                        break;
                        
                    case 4:
                        System.out.println("\n-----------------------------");
                        System.out.println("Student Name: " + sName);
                        System.out.println("Total Transactions: " + transCounter);
                        System.out.printf("Final balance: %.2f pesos\n", feeLeft);
                        System.out.println("-----------------------------");
                        break;
                        
                    default:
                        System.out.println("Invalid choice. Please select from 1-4.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid number.");
                navOpt = 0;
            }
            
        } while (navOpt != 4);
        
        reader.close();
    }
}
