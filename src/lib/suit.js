const cases = ['Batu', 'Gunting', 'Kertas']

const suit = () => {
    const random = Math.round(Math.random() * (2 - 0) + 0);
    const result = cases[random]

    return {
        text: result,
        point: random
    }
}

export const play = ({ user }) => {
    const bot = suit()
    // const user = suit()

    if (user.point === bot.point) {

        return {
            detail: {
                bot,
                user
            },
            type: 'TYPE_DRAW'
        }

    } else if (
        (user.point === 0 && bot.point === 2) || // Rock vs Scissors
        (user.point === 1 && bot.point === 0) || // Paper vs Rock
        (user.point === 2 && bot.point === 1)    // Scissors vs Paper
    ) {
        return {
            detail: {
                bot,
                user
            },
            type: 'TYPE_LOSE'
        }
    } else {
        return {
            detail: {
                bot,
                user
            },
            type: 'TYPE_WIN'
        }
    }
}