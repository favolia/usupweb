const cases = ['Batu', 'Gunting', 'Kertas']

const suit = () => {
    const random = Math.round(Math.random() * (2 - 0) + 0);
    const result = cases[random]

    return {
        text: result,
        point: random
    }
}

export const play = () => {
    const bot = suit()
    const player = suit()

    if (player.point === bot.point) {

        return {
            detail: {
                bot: {
                    point: bot.point
                },
                user: {
                    point: player.point
                }
            },
            type: 'TYPE_DRAW'
        }

    } else if (
        (player.point === 0 && bot.point === 2) || // Rock vs Scissors
        (player.point === 1 && bot.point === 0) || // Paper vs Rock
        (player.point === 2 && bot.point === 1)    // Scissors vs Paper
    ) {
        return {
            detail: {
                bot: {
                    point: bot.point,
                    text: bot.text
                },
                user: {
                    point: player.point,
                    text: player.text
                }
            },
            type: 'TYPE_WIN'
        }
    } else {
        return {
            detail: {
                bot: {
                    point: bot.point,
                    text: bot.text
                },
                user: {
                    point: player.point,
                    text: player.text
                }
            },
            type: 'TYPE_LOSE'
        }
    }
}