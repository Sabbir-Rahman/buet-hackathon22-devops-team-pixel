import { Schema, model, Model } from 'mongoose'

import { ResultDoc, Result } from '../interfaces/modelInterfaces/resultInterface'

const resultSchema = new Schema<Result>(
  {
    studentId: { type: String, required: true },
    result: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const ResultModel = model<Result>('result', resultSchema) as Model<Result>

export default ResultModel
