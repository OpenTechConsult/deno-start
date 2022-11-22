const food = Deno.args[0]

console.log(food)
if (food === 'hate') {
    console.log('🦕... is born')
} else {
    console.log('🥚... need some love')
}