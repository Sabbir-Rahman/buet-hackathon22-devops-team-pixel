import { CorrectedDocument } from '../../models/types'

export interface Admin {
  name: string,
}

export type AdminDoc = Admin & CorrectedDocument

export interface Student {
  name: string,
  gender: string,
  year: number
}

export type StudentDoc = Student & CorrectedDocument
