import { Request, Response } from 'express'
import Ping from '../models/ping'

export const getPing = (req: Request, res: Response) => {
   new Ping()
   res.send('<h1>Pong!</h1>')
}