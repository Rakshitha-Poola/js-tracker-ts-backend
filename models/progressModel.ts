import mongoose, {Document} from "mongoose";

export interface TopicsProgressTypes {
    topicId:mongoose.Types.ObjectId,
    doneQuestions:mongoose.Types.ObjectId[],
    bookmarkedQuestions:mongoose.Types.ObjectId[],
    notes:{questionId:mongoose.Types.ObjectId, text:string}[]


}
export interface ProgressSchemaTypes extends Document{
    userId:mongoose.Types.ObjectId
    topics:TopicsProgressTypes[]
}

const ProgressSchema = new mongoose.Schema<ProgressSchemaTypes>({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
        unique: true
    },
    topics:[
        {
            topicId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Topic",
                required: true,
            },
            doneQuestions:[
                {
                    type: mongoose.Schema.Types.ObjectId
                }
            ],
            bookmarkedQuestions: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                }
            ],
            notes:[
                {
                    questionId: {
                        type: mongoose.Schema.Types.ObjectId
                    },
                    text: String
                }
            ]
        }
    ]
})

export const Progress = mongoose.model<ProgressSchemaTypes>("Progress", ProgressSchema)