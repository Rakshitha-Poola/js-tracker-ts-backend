import mongoose, {Document} from "mongoose";

export interface QuestionsSchemaTypes extends Document{
    problem:string,
    URL:string,
    URL2:string
}

export interface TopicSchemaTypes extends Document{
    topicName:string,
    position:number,
    questions:QuestionsSchemaTypes[]
}

const QuestionsSchema = new mongoose.Schema({
    problem:{
        type:String,
        required: true
    },
    URL:{
        type:String,
    },
    URL2:{
        type:String
    }
})

const TopicSchema = new mongoose.Schema<TopicSchemaTypes>({
    topicName:{
        type: String,
        requird: true
    },
    position:{
        type: Number,
        required: true,
    },
    questions:[QuestionsSchema]
})


export const Topic = mongoose.model<TopicSchemaTypes>("Topic", TopicSchema)