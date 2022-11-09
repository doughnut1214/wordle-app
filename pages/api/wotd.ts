// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {RandomWord} from '../../utils/randomWord'
//when api key comes in, change response from any to WOTD
type WOTD = {
    //implement me
    word: string
}
type methodError = {
    message: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WOTD | methodError>
) {
    if (req.method === "GET") {
        /*
        const url =`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${"NYI"}`
        try {
            const result = await fetch(`${url}`, {
                method: "GET", headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            console.log("internal api status:", result.status)
            if(!result.ok) throw new Error
            const data = await result.json()
            
            console.log("final data to send: ", data)
        } catch {
            res.status(500).json({ message: 'Failure to retrieve data' })
            return
        }

        //TODO: json the data returned from the api response
        */
        const word = RandomWord()
        
        console.log("Victory word from API:", word)
        res.status(200).json({ word: word })
    }
    else {
        res.status(403).json({ message: 'GET is the only acceptable method' })
    }
}
