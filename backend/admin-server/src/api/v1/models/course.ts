import { Schema, model, Model } from 'mongoose'

import {
  CourseDoc,
  Course,
} from '../interfaces/modelInterfaces/course.interface'

const courseSchema = new Schema<Course>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
)

const CourseModel = model<Course>('course', courseSchema) as Model<Course>

export default CourseModel
