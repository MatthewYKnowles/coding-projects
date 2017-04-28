export default class HelloWorld {

    static hello(personToGreet?: string) {
        if (personToGreet) {
            return `Hello, ${personToGreet}!`
        }
        return 'Hello, World!'
    }
}