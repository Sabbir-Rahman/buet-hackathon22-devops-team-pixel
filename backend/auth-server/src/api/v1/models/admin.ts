import { Schema, model, Model } from 'mongoose'

import { AdminDoc, Admin } from '../interfaces/modelInterfaces/auth.interface'

const adminSchema = new Schema<Admin>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
)

const AdminModel = model<Admin>('admin', adminSchema) as Model<Admin>

export default AdminModel
