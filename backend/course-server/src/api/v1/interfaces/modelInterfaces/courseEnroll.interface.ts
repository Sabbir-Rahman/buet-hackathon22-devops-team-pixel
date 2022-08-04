import { CorrectedDocument } from '../../models/types'

export interface CourseEnroll {
  courseId: string,
  studentId: string,
  year: number,
  isApproved: Boolean
}

export type CourseEnrollDoc = CourseEnroll & CorrectedDocument
