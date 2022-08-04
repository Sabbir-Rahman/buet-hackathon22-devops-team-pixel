import { Schema, model, Model } from 'mongoose'

import { CourseEnrollDoc, CourseEnroll } from '../interfaces/modelInterfaces/courseEnroll.interface'

const courseEnrollmentSchema = new Schema<CourseEnroll>(
  {
    courseId: { type: String, required: true },
    studentId: { type: String, required: true },
    isApproved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

const CourseEnrollModel = model<CourseEnroll>('courseEnroll', courseEnrollmentSchema) as Model<CourseEnroll>

export default CourseEnrollModel
