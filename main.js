let nombre = prompt("Nombre de usuario");

    while (nombre  != "ESC" ) {
        switch (nombre) {
        case "seba":
            alert("Hola seba")
            break;

            case "luis":
                alert("Hola luis")
                break;

                case "anthony":
                    alert("Hola tony")
                    break;

                    case "coderhouse":
                        alert("Hola coder")
                        break;
    
        default:
            alert("Prueba con seba, luis, anthony o coderhouse");
            break;
        }nombre = prompt("Ingresa nuevamente un nombre de usuario")
    } 
 
