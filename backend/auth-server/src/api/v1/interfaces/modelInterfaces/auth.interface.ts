import { CorrectedDocument } from '../../models/types'

export interface Admin {
  name: string,
}

export type AdminDoc = Admin & CorrectedDocument
