const food = Deno.args[0]
const parent = Deno.args[1]


if (food === 'love' && parent === 'ryan') {
    console.log('🦕... is born')
} else {
    console.log('🥚... need some love')
}