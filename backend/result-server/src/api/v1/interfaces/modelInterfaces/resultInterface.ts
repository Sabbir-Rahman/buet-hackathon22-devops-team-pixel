import { CorrectedDocument } from '../../models/types'

export interface Result {
  studentId: string,
  result: number,
  year: number,
}

export type ResultDoc = Result & CorrectedDocument
