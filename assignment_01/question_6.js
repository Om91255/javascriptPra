/*
You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and use a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%.
*/

a="credit"

switch (a) {
    case "credit":
            console.log("processing fee of credit is 2%")
            break;
    case "debit":
            console.log("processing fee of debit is 1.5%")
            break;
    case "paypal":
            console.log("processing fee of paypal is 3%")
    default:
        console.log("invalid case")
        break;
}
