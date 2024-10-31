

namespace AllGreetings {
    export namespace Greetings{
        export function returnGreetings(greeting: string){
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    }
    
    export namespace GreetingsWithLength {
        export function returnGreetings (greeting: string){
            let greetingLength = getLength(greeting)
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        function getLength(message: string): number{
            return message.length
        }
    }
    
}

AllGreetings.Greetings.returnGreetings("Bonjour")
AllGreetings.GreetingsWithLength.returnGreetings("Hola")

const greet = AllGreetings.Greetings

greet.returnGreetings("Hello")