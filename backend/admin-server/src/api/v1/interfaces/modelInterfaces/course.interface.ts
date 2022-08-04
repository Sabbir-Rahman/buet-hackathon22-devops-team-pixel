import { CorrectedDocument } from '../../models/types'

export interface Course {
  name: string
}

export type CourseDoc = Course & CorrectedDocument
