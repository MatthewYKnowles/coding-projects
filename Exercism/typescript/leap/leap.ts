export default function isLeapYear(year: number): boolean {
    return specialCaseEveryOneHundredYears(year)
        ? everyFourHundredYearsIgnoreSpecialCase(year)
        : shouldBeLeapYear(year)
}

function specialCaseEveryOneHundredYears(year: number) {
    return year % 100 === 0
}
function everyFourHundredYearsIgnoreSpecialCase(year: number) {
    return year % 400 === 0
}
function shouldBeLeapYear(year: number) {
    return year % 4 === 0
}
