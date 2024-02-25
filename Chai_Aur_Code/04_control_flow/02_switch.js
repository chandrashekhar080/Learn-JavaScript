/******************* Switch Ceses  ************************ */

//switch (key) {
//  case value:
     
//    break;
//
//   default:
//       break;
//}

const day = 6; //declare a variable

switch (day) { //using switch case  key is imp for switch cases
    case 1: //value of the variable and case
        console.log("Sunday"); //print what we want
        break;  //break case here
     case 2:
        console.log("Moday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednusday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default: //value didn't matched print default value
        console.log("Enter Currect Day");
        break;
}