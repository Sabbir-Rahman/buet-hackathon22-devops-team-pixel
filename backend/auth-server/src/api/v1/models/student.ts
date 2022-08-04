import { Schema, model, Model } from 'mongoose'
import { Student } from '../interfaces/modelInterfaces/auth.interface'


const studentSchema = new Schema<Student>(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    year: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const StudentModel = model<Student>('student', studentSchema) as Model<Student>

export default StudentModel
