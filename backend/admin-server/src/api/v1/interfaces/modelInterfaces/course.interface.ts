import { CorrectedDocument } from '../../models/types'

export interface Course {
  name: string,
  description: string
}

export type CourseDoc = Course & CorrectedDocument
