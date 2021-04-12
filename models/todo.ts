import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        status: {type: Boolean, required: true}
    },
    {
        timestamps: true
    }
)

export default model<ITodo>("Todo", todoSchema)

// 스키마를 모델에 담아서 준다. 결론은 모델