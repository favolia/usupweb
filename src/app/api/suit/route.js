import { play } from "@/lib/suit";

const { NextResponse } = require("next/server");

export const GET = (request) => {
    const params = param => request.nextUrl.searchParams.get(param)
    const point = params('point')

    try {
        const match = play({ user: { point: Number(point || 0) } })

        if (point) {
            return NextResponse.json({
                status: true,
                message: 'success',
                match,
            }, { status: 200 })
        }

        return NextResponse.json({
            status: true,
            message: "Set the 'point' parameter with a number [0 = rock (default), 1 = scissors, 2 = paper], for example: ?point=0, ?point=1, ?point=2",
            match,
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            status: false,
            message: error.message || 'Something went wrong.',
            match: null
        }, { status: 500 })
    }
}
